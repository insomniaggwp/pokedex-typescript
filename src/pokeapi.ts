export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      const url = pageURL ? pageURL : PokeAPI.baseURL + '/location-area';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resJson: ShallowLocations = await response.json();
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
    // implement this
    try {
      const response = await fetch(PokeAPI.baseURL + '/location-area' + locationName);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resJson: ShallowLocations = await response.json();
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
};