import { Filter } from "../../types";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (id: string) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};

export const TOGGLE_FILTER = "TOGGLE_FILTER";

export const toggleFilter = (filters: Filter) => {
    return { type: TOGGLE_FILTER, filters };
};
