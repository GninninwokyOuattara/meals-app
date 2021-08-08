import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { RootState } from "../types";

const FavoriteMealsScreen = (props: any) => {
    const favMeals = useSelector(
        (state: RootState) => state.meals.favoriteMeals
    );
    if (favMeals.length === 0) {
        return (
            <View style={styles.content}>
                <Text>No favorite meals found. Start adding some !</Text>
            </View>
        );
    }

    return <MealList data={favMeals} navigation={props.navigation} />;
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default FavoriteMealsScreen;
