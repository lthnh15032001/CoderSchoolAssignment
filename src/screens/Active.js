import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { BaseComponent } from '../components/BaseComponent'
export const Active = (props) => {
    const { navigation, route } = props
    const { dataInit, setDataInit } = route.params

    return (
        <>
            <HeaderComponent navigation={navigation} title="Active" />
            <BaseComponent
                navigation={navigation}
                route={route}
                dataInit={dataInit}
                currentRoute="Active"
                setDataInit={setDataInit}
            />
        </>
    )
}
