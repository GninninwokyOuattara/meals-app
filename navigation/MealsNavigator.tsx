import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigation = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealsDetails: MealsDetailsScreen,
});

const BottomNavigation = createBottomTabNavigator({
    Meals: MealsNavigation,
    Favorites: FavoriteMealsScreen,
});

export default createAppContainer(BottomNavigation);
