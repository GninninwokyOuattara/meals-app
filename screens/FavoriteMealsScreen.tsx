import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { RootState } from "../types";

const FavoriteMealsScreen = (props: any) => {
    const favMeals = useSelector(
        (state: RootState) => state.meals.favoriteMeals
    );

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

export default FavoriteMealsScreen;
