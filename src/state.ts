import { createInterface, type Interface } from "readline";
import readline from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeApi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
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
  }
}

export function getCommands(): Record<string, CLICommand> {
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
    },
    explore: {
      name: "explore",
      description: "Explore Location",
      callback: commandExplore,
    }
  };
}