import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
export const Complete = (props) => {
    const {navigation} = props
    return (
        <>
            <HeaderComponent navigation={navigation} title="Complete"  />
        </>
    )
}

const styles = StyleSheet.create({
})