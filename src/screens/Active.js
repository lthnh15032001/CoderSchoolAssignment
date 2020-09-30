import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
export const Active = (props) => {
    const {navigation} = props
    return (
        <>
            <HeaderComponent navigation={navigation} title="Active" />
        </>
    )
}

const styles = StyleSheet.create({
})