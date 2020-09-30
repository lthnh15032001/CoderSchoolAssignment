import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '../components'
// import { ava } from '../assets/ava.jpg'
export const HeaderComponent = (props) => {
    const {
        navigation
    } = props
    const onButtonClosePress = () => {
        navigation.goBack();
    };
    const openDrawer = () => {
        navigation.openDrawer();
    }
    // console.log(navigation.canGoBack())
    const getGoBack = () => {
        return navigation.canGoBack()
    }
    return (
        <SafeAreaView
            forceInset={{ top: "always" }}
        >
            <View style={styles.headerContainer}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                <View style={styles.headerWraper}>
                    <TouchableOpacity style={styles.buttonClose} onPress={getGoBack() && onButtonClosePress} >
                        <Icon AntDesign size={26} name="arrowleft" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{props.title && props.title}</Text>
                    <TouchableOpacity style={styles.buttonClose} onPress={() => openDrawer()}>
                        <Icon MaterialCommunityIcons size={20} name="widgets" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "flex-end",
        // backgroundColor: "white",
    },
    buttonClose: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    headerWraper: {
        height: 35,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    }
});