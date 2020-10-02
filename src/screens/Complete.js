import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { BaseComponent } from '../components/BaseComponent'
export const Complete = (props) => {
    const { navigation, route } = props
    const { dataInit, setDataInit } = route.params

    return (
        <>
            <HeaderComponent navigation={navigation} title="Complete" />
            <BaseComponent
                navigation={navigation}
                route={route}
                dataInit={dataInit}
                currentRoute="complete"
                setDataInit={setDataInit}
            />
        </>
    )
}
