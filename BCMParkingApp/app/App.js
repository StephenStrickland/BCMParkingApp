/**
 * Created by Stephen on 2/21/17.
 */
import React, { Component } from 'react';
import {Platform} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeComponent from './components/Home/HomeComponent';
import DriversComponent from './components/Drivers/DriversComponent';
import SignupComponent from './components/Signup/SignupComponent';
import LogComponent from './components/Log/LogComponent';
import NewDriverSignup from './components/Signup/NewDriverSignupComponent';




const BaseRoutes = {
    Home : {screen: StackNavigator({
        Home: {screen: HomeComponent}
    })},
    Signup : {screen: StackNavigator({
        Signup: {screen: SignupComponent},
        NewDriver: {screen: NewDriverSignup}
    })},
    Log: {screen: StackNavigator({
        Log: {screen: LogComponent}
    })},
    Drivers: {screen: StackNavigator({
        Drivers: {screen: DriversComponent}
    })},
};


const AppNavigator = DrawerNavigator({
    ...BaseRoutes,

}, {
    initialRoutename: 'Home',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});


export default () => <AppNavigator/>;