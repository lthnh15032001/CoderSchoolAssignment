import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { Icon } from '../components/Icon'
import { dataConfig } from '../data/todoData'
import { BaseComponent } from '../components/BaseComponent'
export const Week4 = (props) => {
    const { navigation, route } = props
    const [dataInit, setDataInit] = useState(dataConfig)
    // useEffect(() => {
    //     console.log(dataInit) 
    // }, [dataInit])
    return (
        <>
            <HeaderComponent navigation={navigation} title="Week 4" />
            <View style={styles.container}>
                <Text style={styles.list}>Lists</Text>
                <View style={styles.wrapBox}>
                    <TouchableOpacity style={styles.all} onPress={() => { navigation.navigate("AllTodo", { dataInit: dataInit }) }}>
                        <Icon Ionicons name="add-circle-outline" size={30} color="blue" />
                        <Text style={styles.textAll}>All</Text>
                        <Text style={styles.number}>15 Tasks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.all} onPress={() => { navigation.navigate("Complete", { dataInit: dataInit }) }}>
                        <Icon Ionicons name="checkmark-done" size={30} color="blue" />
                        <Text style={styles.textAll}>Complete</Text>
                        <Text style={styles.number}>13 Tasks</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapBox}>
                    <TouchableOpacity style={styles.all} onPress={() => { navigation.navigate("Active", { dataInit: dataInit }) }}>
                        <Icon Feather name="play" size={30} color="blue" />
                        <Text style={styles.textAll}>Active</Text>
                        <Text style={styles.number}>12 Tasks</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.notDone}>Your have'nt done works (Active work)</Text>
                <BaseComponent
                    navigation={navigation}
                    route={route}
                    dataInit={dataInit}
                    currentRoute="main"
                    style={{marginBottom: 30}}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    notDone: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
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