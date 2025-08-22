import { State } from "./state.js";

export async function commandExplore(state: State, locationName: string): Promise<void> {
  if (!locationName) {
    console.log("please input location name");
    return;
  }

  const res = await state.pokeApi.fetchLocation(locationName);

  console.log("");
  console.log(`Exploring ${locationName}...`);
  if (res.pokemon_encounters.length > 0) console.log("Found Pokemon:");
  res.pokemon_encounters.forEach((pokemon_encounter) => {
    console.log(`- ${pokemon_encounter.pokemon.name}`);
  });
};