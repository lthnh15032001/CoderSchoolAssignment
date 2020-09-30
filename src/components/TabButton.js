import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, TouchableWithoutFeedback
} from "react-native";
import { Icon } from './Icon'
export const TabButton = (props) => {
    // const { routeNames, navigation, focused, state, index, translateValue, tabWidth } = props
    const { routeNames, navigation, focused, state, index } = props
    const key = state.routes[index].key;
    const name = state.routes[index].name;
    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: key,
            canPreventDefault: true,
        });

        if (!focused && !event.defaultPrevented) {
            navigation.navigate(name);
        }

        // Animated.spring(translateValue, {
        //     toValue: index * tabWidth,
        //     velocity: 10,
        //     useNativeDriver: true,
        //   }).start();

    };
    let iconName = "";
    switch (routeNames) {
        case "Week2":
            iconName = "plus-circle";
            break;
        case "Week3":
            iconName = "align-left";
            break;
        case "Week4":
            iconName = "user"
        default:
            break;
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress} style={{ position: 'absolute' }}>
                <View style={[styles.containerButton, { backgroundColor: focused ? "#999" : "white" }]}>
                    <Icon Feather name={iconName} size={25} color={focused ? "white" : "gray"} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        overflow: "hidden",
    },
    containerButton: {
        padding: 10,
        borderRadius: 30,
        margin: 10,
    }
});