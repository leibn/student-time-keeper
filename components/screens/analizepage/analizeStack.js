import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnalizeMainScreen from './AnalizeScreen';
import specificSubjectAnalizeScreen from './specificSubjectAnalize';

const Stack = createStackNavigator();

export function analizeStacNavigetor() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnalizeBrifScreen" component={AnalizeMainScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="specificSubjectAnalizeScreen" component={specificSubjectAnalizeScreen} />
    </Stack.Navigator>
  );
}