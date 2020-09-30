import React, { Component, useEffect, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { TabBottom } from './TabBottom'
import { AllTodo, Active, Complete } from "../screens";
const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="TabBottom" component={TabBottom} />
            <Stack.Screen name="AllTodo" component={AllTodo} />
            <Stack.Screen name="Active" component={Active} />
            <Stack.Screen name="Complete" component={Complete} />
        </Stack.Navigator>
    )
}