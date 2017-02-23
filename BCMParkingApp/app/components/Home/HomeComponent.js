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
    View
} from 'react-native';
import {  H1, Container, Content, Button,
    Left, Right, Body, Icon,
    Drawer, SideBar, Form, Item, Input, Text} from 'native-base';



export default class HomeComponent extends Component {


    static navigationOptions = {
        title: 'Home',
        drawer: () => ({
            label: 'Home'
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
            <Container>
                <Content padder>
                <H1>Welcome to the BCM Parking App</H1>
                <Text>This app was built to help maintain a list of current drivers and manage parking at BCM.</Text>
                </Content>

            </Container>

        );
    }
}


AppRegistry.registerComponent('HomeComponent', () => HomeComponent);
/**
 * Created by Stephen on 2/21/17.
 */
