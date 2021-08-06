import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteMealsScreen = (props: any) => {
    const favMeal = MEALS.filter((meal) => meal.id == "m1" || meal.id == "m2");

    return <MealList data={favMeal} navigation={props.navigation} />;
};

FavoriteMealsScreen.navigationOptions = (props: any) => {
    return {
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="drawer"
                    iconName="ios-menu"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
    };
};

export default FavoriteMealsScreen;
