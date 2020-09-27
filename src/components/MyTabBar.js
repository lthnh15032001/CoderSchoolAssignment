import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import { TabButton } from './TabButton'
export const MyTabBar = (props) => {
    const { state, navigation } = props
    // const [translateValue] = useState(new Animated.Value(0));
    // const totalWidth = Dimensions.get("window").width;
    // const tabWidth = totalWidth / state.routes.length;
    return (
        // <View style={[styles.container, { width: totalWidth }]}>
            <View style={styles.container}>
            {/* <Animated.View style={[styles.slider, {
                transform: [{ translateX: translateValue }],
                width: tabWidth - 20,
            }]} /> */}
            {state.routeNames.map((item, index) => {
                const focused = state.index === index;
                return (
                    <TabButton
                        // translateValue={translateValue}
                        // tabWidth={tabWidth}
                        state={state}
                        routeNames={item}
                        navigation={navigation}
                        index={index}
                        focused={focused}
                        key={index} />
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: "center",
        // height:70
    },
    slider: {
        height: 5,
        position: "absolute",
        top: -8,
        left: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
    }
});