import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import { RootState } from "../types";

const CategoryMealsScreen = (props: any) => {
    const categoryId = props.navigation.getParam("categoryId");
    const meals = useSelector((state: RootState) => {
        return state.meals.filteredMeals;
    });
    const displayedMeals = meals.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    if (!displayedMeals.length) {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>
                    No meals found. Maybe check you filters ?
                </Text>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    contentText: {
        fontFamily: "OpenSans-Bold",
    },
});

export default CategoryMealsScreen;
