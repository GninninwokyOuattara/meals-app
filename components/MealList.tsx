import React from "react";
import { FlatList, StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import MealItem from "./MealItem";

interface props {
    data: any;
    // renderFunction: (itemData: any) => JSX.Element;
    navigation: any;
}

const MealList: React.FC<props> = (props) => {
    const renderMealItem = (itemData: any) => {
        return (
            <MealItem
                {...itemData.item}
                onSelectMeal={() =>
                    props.navigation.navigate({
                        routeName: "MealsDetails",
                        params: {
                            MealId: itemData.item.id,
                        },
                    })
                }
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList data={props.data} renderItem={renderMealItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
    },
});

export default MealList;
