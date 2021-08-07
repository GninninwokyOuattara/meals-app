import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
    meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    const fetchFonts = () => {
        return Font.loadAsync({
            "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
            "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        });
    };

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onError={() => {}}
                onFinish={() => setDataLoaded(true)}
            />
        );
    }

    return (
        <Provider store={store}>
            <MealsNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontFamily: "OpenSans-Bold",
    },
});
