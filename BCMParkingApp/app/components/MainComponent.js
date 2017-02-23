/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import HomeComponent from './Home/HomeComponent';
import DriversComponent from './Drivers/DriversComponent';


const BCMApp =  DrawerNavigator({

    Home: {

        screen: StackNavigator({
            Home: {
                screen: HomeComponent,
            },
            PowerSearch: {
                screen: DriversComponent,
            },
        }, {
            initialRouteName : 'Home',
            style: {
                flex: 1,
                backgroundColor: '#424242',
                paddingTop: Platform.OS === 'ios' ? 20 : 0,
            }
        })

    },
    Drivers: {
        screen: DriversComponent
    }
});


AppRegistry.registerComponent('BCMApp', () => BCMApp);
