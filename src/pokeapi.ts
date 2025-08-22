import { Cache, CacheEntry } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #pokeCache = new Cache(300000);

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      const url = pageURL ? pageURL : PokeAPI.baseURL + '/location-area';
      const pc = this.#pokeCache.get<ShallowLocations>(url);

      if (pc) {
        return pc;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resJson: ShallowLocations = await response.json();
      this.#pokeCache.add(url, resJson);
      return resJson;

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to fetch locations:", error.message);
        throw error;
      } else {
        console.error("Unknown error while fetching locations:", error);
        throw new Error("Unknown error occurred");
      }
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {
      const url = PokeAPI.baseURL + '/location-area/' + locationName;
      const pc = this.#pokeCache.get<Location>(locationName);

      if (pc) {
        return pc;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resJson: Location = await response.json();
      this.#pokeCache.add(url, resJson);
      return resJson;

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to fetch location:", error.message);
        throw error;
      } else {
        console.error("Unknown error while fetching location:", error);
        throw new Error("Unknown error occurred");
      }
    }

  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    },
  }[];
};