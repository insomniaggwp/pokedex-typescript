import { State } from "./state.js";

export async function commandMapB(state: State): Promise<void> {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }

  const res = await state.pokeApi.fetchLocations(state.prevLocationsURL ? state.prevLocationsURL : '');

  console.log("");
  res.results.forEach((result) => {
    console.log(result.name);
  });

  state.nextLocationsURL = res.next;
  state.prevLocationsURL = res.previous;
};