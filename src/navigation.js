import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Opacity from './screen/Opacity';
import { Button, View } from 'react-native';
import Scale from './screen/Scale';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import TranslatePosition from './screen/TranslatePosition';
import Interpolation from './screen/Interpolation';
import Easing from './screen/Easing';
import Spring from './screen/Spring';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Opacity" component={Opacity} />
        <Stack.Screen name="TranslatePosition" component={TranslatePosition} />
        <Stack.Screen name="Scale" component={Scale} />
        <Stack.Screen name="Interpolation" component={Interpolation} />
        <Stack.Screen name="Easing" component={Easing} />
        <Stack.Screen name="Spring" component={Spring} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
