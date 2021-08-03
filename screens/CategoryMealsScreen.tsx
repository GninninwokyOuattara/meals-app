import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props: any) => {
    const categoryId = props.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(
        (category) => category.id === categoryId
    );

    return (
        <View style={styles.screen}>
            <Text>The Categories Meals screen</Text>
            <Text>{selectedCategory?.title}</Text>

            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealsDetails" });
                }}
            />
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
    },
});

export default CategoryMealsScreen;
