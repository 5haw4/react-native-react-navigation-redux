import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'
import SettingsScreen from '../screens/SettingsScreen'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//home tab stack navigator
export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
    )
}

//settings tab stack navigator
export const SettingsStack = () => {
    return (
        <Stack.Navigator initialRouteName={"Settings"}>
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
    )
}
