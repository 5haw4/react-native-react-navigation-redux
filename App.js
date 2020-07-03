import React from 'react';

import { Provider } from 'react-redux'
import Store from './src/store/reducers/rootReducer'

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator'

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}