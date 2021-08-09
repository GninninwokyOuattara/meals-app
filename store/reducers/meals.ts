import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";
import { TOGGLE_FAVORITE, TOGGLE_FILTER } from "../actions/meals";
import { FilterName } from "../../types";

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
        case TOGGLE_FILTER:
            let filtersToApply = [];
            for (let key in actions.filters) {
                if (actions.filters[key] === true) {
                    filtersToApply.push(key);
                }
            }

            let data = [...state.meals];
            if (filtersToApply) {
                for (let filter of filtersToApply as FilterName[]) {
                    data = data.filter((meal) => meal[filter] !== true);
                }
            }

            return {
                ...state,
                filteredMeals: data,
            };

        default:
            return state;
    }
};

export default mealsReducer;
