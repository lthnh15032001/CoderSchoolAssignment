import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { BaseComponent } from '../components/BaseComponent'
export const AllTodo = (props) => {
    const { navigation, route } = props
    const { dataInit, setDataInit } = route.params
    return (
        <>
            <HeaderComponent navigation={navigation} title="All Todo List" />
            <BaseComponent
                navigation={navigation}
                route={route}
                dataInit={dataInit}
                setDataInit={setDataInit}
                currentRoute="all"
            />
            
        </>
    )
}