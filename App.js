import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen1 from './components/API_Screen_01';
import Screen2 from './components/API_Screen_02';
import Screen3 from './components/API_Screen_03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}