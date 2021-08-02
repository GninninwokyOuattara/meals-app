import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Meals screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealsDetails" });
                }}
            />
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

export default CategoryMealsScreen;
