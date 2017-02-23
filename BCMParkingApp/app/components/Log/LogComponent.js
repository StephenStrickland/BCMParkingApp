/**
 * Created by Stephen on 2/18/17.
 */
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
    View
} from 'react-native';
import {  H1,
    Left, Right, Body, Icon, Button,
    Drawer, SideBar, Form, Item, Input} from 'native-base';


export default class LogComponent extends Component {


    static navigationOptions = {
        title: 'Logging',
        drawer: () => ({
            label: 'Logging'
        }),
        header: ({ navigate }) => ({
            // Render a button on the right side of the header
            // When pressed switches the screen to edit mode.
            left: (
                <Button transparent onPress={() => navigate('DrawerOpen')} >
                    <Icon active name="menu"/>
                </Button>
            ),
        }),
    };


    render() {

        return (
            <View>

                <H1>Hello from Logging</H1>
            </View>

        );
    }
}


AppRegistry.registerComponent('LogComponent', () => LogComponent);
/**
 * Created by Stephen on 2/21/17.
 */
