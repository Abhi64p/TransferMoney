import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BackButton from '../components/BackButton';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen';
import SendScreen from '../screens/SendScreen';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{
      animation: 'slide_from_right',
      headerTransparent: true,
      headerTitle: () => null,
      headerBackTitle: () => null,
      headerLeft: ({canGoBack}) => (canGoBack ? <BackButton /> : null),
      headerStyle: {width: 100},
    }}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="RequestScreen" component={RequestScreen} />
    <Stack.Screen
      name="SendScreen"
      component={SendScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default RootStackNavigator;
