import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from './src/screens/BookList';
import BookDetail from './src/screens/BookDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Book List" component={BookList} />
          <Stack.Screen name="Book Detail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
