/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';

console.disableYellowBox = true; // picker will be depricated from react-native core and have to fix when it is being update

const store = configureStore();

const expenseTracker = () => 
    <Provider store = {store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => expenseTracker);
