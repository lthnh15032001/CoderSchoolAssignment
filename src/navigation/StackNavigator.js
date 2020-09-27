import React, { Component, useEffect, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens'
import { TabBottom } from './TabBottom'

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={TabBottom} />
        </Stack.Navigator>
    )
}