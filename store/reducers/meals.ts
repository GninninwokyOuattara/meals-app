import { MEALS } from "../../data/dummy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

// type InitState = typeof initialState

const mealsReducer = (state = initialState, actions: any) => {
    return state;
};

export default mealsReducer;
