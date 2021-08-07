import React from "react";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import { RootState } from "../types";

const CategoryMealsScreen = (props: any) => {
    const categoryId = props.navigation.getParam("categoryId");
    const meals = useSelector((state: RootState) => {
        return state.meals.meals;
    });
    const displayedMeals = meals.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return <MealList data={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigation: any) => {
    const categoryId = navigation.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(
        (category) => category.id === categoryId
    );

    return {
        headerTitle: selectedCategory?.title,
    };
};

export default CategoryMealsScreen;
