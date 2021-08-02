import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
} from "react-native";

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
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>
                props.navigation.navigate({ routeName: "CategoryMeals" })
            }
        >
            <View>
                <Item title={item.title} />
            </View>
        </TouchableOpacity>
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
