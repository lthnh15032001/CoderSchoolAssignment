import React, { Component, useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MyTabBar } from '../components/MyTabBar';

const Tab = createBottomTabNavigator();
import { Week2, Week3, Week4, Week5 } from '../screens'
export const TabBottom = (props) => {
    return (
        <Tab.Navigator initialRouteName="Week5" tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Week2" component={Week2} />
            <Tab.Screen name="Week4" component={Week4} />
            <Tab.Screen name="Week3" component={Week3} />
            <Tab.Screen name="Week5" component={Week5} />
        </Tab.Navigator>
    );
}
