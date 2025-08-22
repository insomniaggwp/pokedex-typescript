import { State } from "./state.js";

export async function commandCatch(state: State, pokemonName: string): Promise<void> {
  if (!pokemonName) {
    console.log("please input pokemon name");
    return;
  }

  const res = await state.pokeApi.fetchPokemon(pokemonName);

  console.log("");
  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const randomNum = Math.floor(Math.random() * res.base_experience);
  const catchThreshold = 100 - (res.base_experience / 5);

  if (randomNum < catchThreshold) {
    console.log(`${pokemonName} was caught!`)
    state.pokedex[pokemonName] = res;
  } else {
    console.log(`${pokemonName} escaped!`);
  }
};