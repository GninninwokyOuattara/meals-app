import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";

const CategoryMealsScreen = (props: any) => {
    const renderMealItem = (itemData: any) => {
        return <MealItem {...itemData.item} />;
    };

    const categoryId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
    );
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
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
    },
});

export default CategoryMealsScreen;
