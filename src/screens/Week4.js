import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { Icon } from '../components/Icon'
export const Week4 = (props) => {
    const { navigation } = props
    return (
        <>
            <HeaderComponent navigation={navigation} title="Week 4" />
            <View style={styles.container}>
                <Text style={styles.list}>Lists</Text>
                <View style={styles.wrapBox}>
                    <TouchableOpacity style={styles.all} onPress={() => { }}>
                        <Icon Feather name="user" size={30} color="blue" />
                        <Text style={styles.textAll}>All</Text>
                        <Text style={styles.number}>15 Tasks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.all}>
                        <Icon Feather name="user" size={30} color="blue" />
                        <Text style={styles.textAll}>Complete</Text>
                        <Text style={styles.number}>13 Tasks</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapBox}>
                    <TouchableOpacity style={styles.all}>
                        <Icon Feather name="user" size={30} color="blue" />
                        <Text style={styles.textAll}>Active</Text>
                        <Text style={styles.number}>12 Tasks</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    number: {
        color: 'grey',
        marginBottom: 17
    },
    all: {
        elevation: 50,
        backgroundColor: 'white',
        padding: 15,
        width: "48%",
        marginRight: 10,
        borderRadius: 16
    },
    textAll: {
        fontSize: 20,
        fontWeight: '900',
        marginTop: 25,
        marginBottom: 5
    },
    wrapBox: {
        flexDirection: 'row',
        marginTop: 17
    },
    container: {
        flex: 1,
        padding: 10
    },
    list: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 5
    }
});