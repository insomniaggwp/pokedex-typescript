import readline from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
    };
}
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Usage the pokedex",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Map Locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Map B",
            callback: commandMapB,
        }
    };
}
