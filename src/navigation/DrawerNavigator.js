import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
const Drawer = createDrawerNavigator();
import { StackNavigator } from './StackNavigator'
export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        </Drawer.Navigator>
    )
}