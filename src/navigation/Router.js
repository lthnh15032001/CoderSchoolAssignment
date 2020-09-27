import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './StackNavigator'
export const Router = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}