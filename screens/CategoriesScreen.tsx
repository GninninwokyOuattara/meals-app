import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import COLORS from "../constants/Colors";

import CategoryGridTile from "../components/CategoryGridTile";

// CategoriesScreen Component

type renderItemType = (item: {
    item: { id: string; title: string; color: string };
}) => JSX.Element;

const CategoriesScreen = (props: any) => {
    const renderItem: renderItemType = ({ item }) => (
        <CategoryGridTile
            item={item}
            onSelect={() =>
                props.navigation.navigate({
                    routeName: "CategoryMeals",
                    params: {
                        categoryId: item.id,
                    },
                })
            }
        />
    );

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: "Categories",
    headerStyle: {
        backgroundColor: COLORS.accentColor,
    },
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoriesScreen;
