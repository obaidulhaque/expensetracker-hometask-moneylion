/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppNavigator from './src/containers/AppNavigator';



export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
