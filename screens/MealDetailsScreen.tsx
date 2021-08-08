import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";

import { RootState } from "../types";

const ListItem = (props: { item: string }) => {
    return (
        <View style={styles.listContainer}>
            <Text>{props.item}</Text>
        </View>
    );
};

const MealsDetailsScreen = (props: any) => {
    const mealId = props.navigation.getParam("MealId");
    const meals = useSelector((state: RootState) => state.meals.meals);
    const selectedMeal = meals.find((meal: Meal) => meal.id === mealId);

    useEffect(() => {
        props.navigation.setParams({ mealTitle: selectedMeal?.title });
    }, [selectedMeal]);

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.mealView}>
                <Image
                    style={styles.mealImage}
                    source={{ uri: selectedMeal?.imageUrl }}
                />
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text>{selectedMeal?.duration} m</Text>
                    <Text>{selectedMeal!.complexity.toUpperCase()}</Text>
                    <Text>{selectedMeal!.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.detailZone}>
                <Text style={styles.zoneHeader}>INGREDIENTS</Text>
                <View>
                    {selectedMeal?.ingredients.map(
                        (ingredient: string, idx: number) => {
                            return <ListItem key={idx} item={ingredient} />;
                        }
                    )}
                </View>
            </View>
            <View style={styles.detailZone}>
                <Text style={styles.zoneHeader}>STEPS</Text>
                <View>
                    {selectedMeal?.steps.map((step: string, idx: number) => {
                        return <ListItem key={idx} item={step} />;
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

MealsDetailsScreen.navigationOptions = (props: any) => {
    return {
        headerTitle: props.navigation.getParam("mealTitle"),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => console.log("Favorited")}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: "transparent",
        // justifyContent: "center",
        // alignItems: "center",
    },
    mealRow: {
        flexDirection: "row",
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%",
    },
    mealImage: {
        width: "100%",
        height: "85%",
    },
    mealView: {
        height: 250,
        backgroundColor: "#f5f5c5",
    },
    detailZone: {
        marginVertical: 15,
    },
    zoneHeader: {
        fontFamily: "OpenSans-Bold",
        color: Colors.accentColor,
        fontSize: 20,
        alignSelf: "center",
    },
    listContainer: {
        padding: 10,
        borderWidth: 2,
        borderColor: "#ccc",
        margin: 5,
        fontFamily: "OpenSans-Regular",
    },
});

export default MealsDetailsScreen;
