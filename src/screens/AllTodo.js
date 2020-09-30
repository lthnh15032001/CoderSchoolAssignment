import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
export const AllTodo = (props) => {
    const {navigation} = props
    return (
        <>
            <HeaderComponent navigation={navigation} title="All Todo List"  />
        </>
    )
}

const styles = StyleSheet.create({
})