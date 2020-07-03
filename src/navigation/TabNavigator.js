import React from 'react'

import { AntDesign } from '@expo/vector-icons'

import { HomeStack, SettingsStack } from './StackNavigators'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//root app tabs navigator
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //setting the tab icons
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = "home";
          } else if (route.name === 'Settings') {
            iconName = "setting";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default Tabs