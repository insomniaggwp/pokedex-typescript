import { State } from "./state.js";

export async function commandInspect(state: State, pokemonName: string): Promise<void> {
  if (!pokemonName) {
    console.log("please input pokemon name");
    return;
  }

  const pokemon = state.pokedex[pokemonName];

  if (!pokemon) {
    console.log(`You don't have ${pokemonName} in your pokedex`);
    return;
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.Weight}`);
  console.log('Stats:');
  pokemon.stats.forEach((stat) => console.log(`  -${stat.stat.name}: ${stat.base_stat}`));
  console.log('Types:');
  pokemon.types.forEach((type) => console.log(`  - ${type.type.name}`));
};