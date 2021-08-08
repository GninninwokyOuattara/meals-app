import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";
import { TOGGLE_FAVORITE } from "../actions/meals";
import { Reducer } from "redux";

const initialState: {
    meals: Meal[];
    filteredMeals: Meal[];
    favoriteMeals: Meal[];
} = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case TOGGLE_FAVORITE:
            const idx = state.favoriteMeals.findIndex(
                (meal: Meal) => meal.id === actions.mealId
            );
            if (idx >= 0) {
                let updatedFav = [...state.favoriteMeals];
                updatedFav.splice(idx, 1);
                return { ...state, favoriteMeals: updatedFav };
            } else {
                let meal = state.meals.find(
                    (meal: Meal) => meal.id === actions.mealId
                );
                if (meal) {
                    let updatedFav = [...state.favoriteMeals, meal];
                    return {
                        ...state,
                        favoriteMeals: updatedFav,
                    };
                }
            }

        default:
            return state;
    }
};

export default mealsReducer;
