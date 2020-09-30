import React, { Component, useEffect, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { TabBottom } from './TabBottom'

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="TabBottom" component={TabBottom} />
        </Stack.Navigator>
    )
}