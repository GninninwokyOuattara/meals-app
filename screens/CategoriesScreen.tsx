import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

// Item Components

type itemProps = {
    title: any;
};

const Item: React.FC<itemProps> = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

// CategoriesScreen Component

type renderItemType = (item: { item: { title: string } }) => JSX.Element;

const CategoriesScreen = (props: any) => {
    const renderItem: renderItemType = ({ item }) => (
        <View style={styles.gridItem}>
            <Item title={item.title} />
        </View>
    );

    // return (
    //     <View style={styles.screen}>
    //         <Text>The Categories screen</Text>
    //         <Button
    //             title="Go to meals"
    //             onPress={() => {
    //                 props.navigation.navigate({ routeName: "CategoryMeals" });
    //             }}
    //         />
    //     </View>
    // );

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

export default CategoriesScreen;
