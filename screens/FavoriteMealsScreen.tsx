import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoriteMealsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Favorite Meals screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavoriteMealsScreen;
