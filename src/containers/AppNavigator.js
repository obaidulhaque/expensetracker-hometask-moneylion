/*import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;
*/


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Items from './Items'

/*
const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;
*/

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Expense Tracker'}}/>
        <Stack.Screen name="Items" component={Items} options={{title: 'New Expense'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;