import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { MEALS } from "../data/dummy-data";

const MealsDetailsScreen = (props: any) => {
    const mealId = props.navigation.getParam("MealId");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
                    {selectedMeal?.ingredients.map((ingredient, idx) => {
                        return <Text key={idx}>{ingredient}</Text>;
                    })}
                </View>
            </View>
            <View style={styles.detailZone}>
                <Text style={styles.zoneHeader}>STEPS</Text>
                <View>
                    {selectedMeal?.steps.map((step, idx) => {
                        return <Text key={idx}>{step}</Text>;
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

MealsDetailsScreen.navigationOptions = (props: any) => {
    const mealId = props.navigation.getParam("MealId");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal?.title,
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
});

export default MealsDetailsScreen;
