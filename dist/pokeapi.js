export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        try {
            const url = pageURL ? pageURL : PokeAPI.baseURL + '/location-area';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resJson = await response.json();
            return resJson;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Failed to fetch locations:", error.message);
                throw error;
            }
            else {
                console.error("Unknown error while fetching locations:", error);
                throw new Error("Unknown error occurred");
            }
        }
    }
    async fetchLocation(locationName) {
        // implement this
        try {
            const response = await fetch(PokeAPI.baseURL + '/location-area' + locationName);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resJson = await response.json();
            return resJson;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Failed to fetch locations:", error.message);
                throw error;
            }
            else {
                console.error("Unknown error while fetching locations:", error);
                throw new Error("Unknown error occurred");
            }
        }
    }
}
