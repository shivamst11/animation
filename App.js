import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './src/navigation';
import { CounterStoreContext, ThemeContext } from './src/screen/context';
import { counterStore } from './src/screen/store';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

function App() {
  return (
    <CounterStoreContext.Provider value={counterStore}>
      <MyStack />
    </CounterStoreContext.Provider>
  );
}
export default App;
