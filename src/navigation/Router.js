import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from './DrawerNavigator'
export const Router = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}