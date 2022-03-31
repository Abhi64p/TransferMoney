/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './routes/RootStackNavigator';

const App = () => (
  <NavigationContainer>
    <RootStackNavigator />
  </NavigationContainer>
);

export default App;
