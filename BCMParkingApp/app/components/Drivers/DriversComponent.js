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
import {  H1, Container, Content,
    Left, Right, Body, Icon, Button,
    Drawer, SideBar, Form, Item, Input} from 'native-base';
import DriverStore from '../../stores/DriverStore';
import {observer} from 'mobx-react/native';

@observer
export default class DriversComponent extends Component {


    static navigationOptions = {
        title: 'Drivers',
        drawer: () => ({
            label: 'Drivers'
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
               <Content>
                   <Item rounded style={{marginTop: 10}}>
                       <Icon name="search" />
                       <Input value={DriverStore.DriverNameFilter} placeholder="Search"  onChangeText={(val) => DriverStore.updateDriverNameFilter(val)}/>
                   </Item>
                   {DriverStore.Drivers.map((driver, index) =>   <Text key={index}>{driver.Name}</Text>)}

               </Content>
           </Container>
        );
    }
}


AppRegistry.registerComponent('DriversComponent', () => DriversComponent);
