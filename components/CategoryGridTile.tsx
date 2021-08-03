import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type props = {
    item: {
        id: string;
        title: string;
        color: string;
    };
    navigation: any;
};

const CategoryGridTile: React.FC<props> = (props) => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>
                props.navigation.navigate({
                    routeName: "CategoryMeals",
                    params: {
                        categoryId: props.item.id,
                    },
                })
            }
        >
            <View>
                <Text>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

export default CategoryGridTile;
