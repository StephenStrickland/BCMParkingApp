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
import {  Content, Container, Button, Card, CardItem, Body, Icon, Text} from 'native-base';


export default class SignupComponent extends Component {


    static navigationOptions = {
        title: 'Signup',
        drawer: () => ({
            label: 'Signup'
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

                    <Button full success onPress={() => this.props.navigation.navigate('NewDriver')} style={{marginBottom: 20}}>

                        <Text>New Registration</Text>
                    </Button>

                    <Button full info style={{marginBottom: 20}}>
                        <Text>Update Registration</Text>
                    </Button>

                    <Button full light  style={{marginBottom: 20}}>
                        <Text>Renew Registration</Text>
                    </Button>

                </Content>
            </Container>

        );
    }
}


AppRegistry.registerComponent('SignupComponent', () => SignupComponent);
/**
 * Created by Stephen on 2/21/17.
 */
