import { store } from "./App";

export type RootState = ReturnType<typeof store.getState>;

export type FilterName =
    | "isGlutenFree"
    | "isLactoseFree"
    | "isVegan"
    | "isVegetarian";
export type Filter = { [key in FilterName]: boolean };
