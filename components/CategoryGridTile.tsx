import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableNativeFeedback,
    Platform,
} from "react-native";

type props = {
    item: {
        id: string;
        title: string;
        color: string;
    };
    onSelect: () => void;
};

const CategoryGridTile: React.FC<props> = (props) => {
    // let TouchableComp  : typeof TouchableOpacity | typeof TouchableNativeFeedback
    let TouchableComp: any;
    TouchableComp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: props.item.color,
                    }}
                >
                    <Text style={styles.title} numberOfLines={2}>
                        {props.item.title}
                    </Text>
                </View>
            </TouchableComp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        overflow: "hidden",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: 18,
    },
});

export default CategoryGridTile;
