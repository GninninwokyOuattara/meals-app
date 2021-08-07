import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, actions: any) => {
    return state;
};

export default mealsReducer;
