import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import COLORS from "../constants/Colors";

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Filter screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = (props: any) => {
    return {
        headerTitle: "Filters",
        headerStyle: {
            backgroundColor: COLORS.accentColor,
        },
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="drawer"
                    iconName="ios-menu"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FiltersScreen;
