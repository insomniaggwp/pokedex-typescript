import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().split(/\s+/);
}

export function startREPL(state: State) {

  state.readline.prompt();

  state.readline.on("line", async (line) => {
    const tokens = cleanInput(line);
    const command = tokens[0]?.toLowerCase();
    const args = tokens[1]?.toLowerCase();

    switch (command) {
      case "map":
        await state.commands.map.callback(state);
        break;

      case "mapb":
        await state.commands.mapb.callback(state);
        break;

      case "explore":
        await state.commands.explore.callback(state, args);
        break;

      case "help":
        await state.commands.help.callback(state);
        break;

      case "exit":
        await state.commands.exit.callback(state);
        state.readline.close();
        return;

      default:
        console.log(`Unknown command: ${line}`);
    }

    state.readline.prompt();
  });

  state.readline.on("close", () => {
    process.exit(0);
  });
}