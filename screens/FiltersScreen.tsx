import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import COLORS from "../constants/Colors";

const Filter = (props: {
    title: string;
    state: boolean;
    setStateFunction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>{props.title}</Text>
            <Switch
                trackColor={{ true: COLORS.accentColor, false: "white" }}
                onValueChange={(value) => props.setStateFunction(value)}
                value={props.state}
            />
        </View>
    );
};

const FiltersScreen = (props: any) => {
    const [isGlutenFree, setIsGutenFree] = useState(false);
    const [isLactoreFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeratian, setIsVegetarian] = useState(false);

    const { navigation } = props;

    const saveFilters = useCallback(() => {
        const filters = {
            isGlutenFree,
            isLactoreFree,
            isVegan,
            isVegeratian,
        };
        console.log("saved", filters);
        return filters;
    }, [isGlutenFree, isLactoreFree, isVegan, isVegeratian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text
                style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 20,
                    alignSelf: "center",
                    marginBottom: 15,
                }}
            >
                Available Filters / Restrictions
            </Text>

            <Filter
                title={"Gluten-Free"}
                state={isGlutenFree}
                setStateFunction={setIsGutenFree}
            />
            <Filter
                title={"Lactore-Free"}
                state={isLactoreFree}
                setStateFunction={setIsLactoseFree}
            />
            <Filter
                title={"Vegan"}
                state={isVegan}
                setStateFunction={setIsVegan}
            />
            <Filter
                title={"Vegatarian"}
                state={isVegeratian}
                setStateFunction={setIsVegetarian}
            />
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
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="save"
                    iconName="ios-save"
                    onPress={() => {
                        const saveFilters = props.navigation.getParam("save");
                        saveFilters();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 10,
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    filterTitle: {
        fontFamily: "OpenSans-Bold",
        fontSize: 15,
    },
});

export default FiltersScreen;
