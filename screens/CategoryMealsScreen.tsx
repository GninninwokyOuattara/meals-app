import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";

const CategoryMealsScreen = (props: any) => {
    const renderMealItem = (itemData: any) => {
        console.log(itemData.item.title);
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    };

    const categoryId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return <FlatList data={displayedMeals} renderItem={renderMealItem} />;
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
    },
});

export default CategoryMealsScreen;
