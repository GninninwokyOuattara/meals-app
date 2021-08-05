import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { color } from "react-native-reanimated";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigation = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealsDetails: MealsDetailsScreen,
});

const FavoriteNavigation = createStackNavigator(
    {
        Favorite: FavoriteMealsScreen,
        MealsDetails: MealsDetailsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: { backgroundColor: Colors.accentColor },
            headerTitle: "Your Favorites !",
        },
    }
);

const FiltersNavigation = createStackNavigator({
    Filter: {
        screen: FiltersScreen,
    },
});

const BottomNavigation = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigation,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-restaurant"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
            },
        },
        Favorites: {
            screen: FavoriteNavigation,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-star"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        },
    }
);

const MainNavigation = createDrawerNavigator(
    {
        Meals: {
            screen: BottomNavigation,
        },
        MealsFavs: {
            screen: FavoriteMealsScreen,
        },
        Filters: FiltersNavigation,
    },
    {
        drawerType: "slide",
    }
);

// export default createAppContainer(BottomNavigation);
export default createAppContainer(MainNavigation);
