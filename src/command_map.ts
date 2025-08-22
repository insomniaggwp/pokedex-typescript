import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  const res = await state.pokeApi.fetchLocations(state.nextLocationsURL ? state.nextLocationsURL : '');

  console.log("");
  res.results.forEach((result) => {
    console.log(result.name);
  });

  state.nextLocationsURL = res.next;
  state.prevLocationsURL = res.previous;
};