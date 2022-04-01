import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

export default RootStackNavigator;
