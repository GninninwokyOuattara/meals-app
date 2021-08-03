import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsDetailsScreen = (props: any) => {
    const mealId = props.navigation.getParam("MealId");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen screen</Text>
        </View>
    );
};

MealsDetailsScreen.navigationOptions = (props: any) => {
    const mealId = props.navigation.getParam("MealId");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal?.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MealsDetailsScreen;
