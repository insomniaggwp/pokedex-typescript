import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
  const pokemon = state.pokedex;

  for (const key in pokemon) {
    console.log(` - ${key}`);
  }
};