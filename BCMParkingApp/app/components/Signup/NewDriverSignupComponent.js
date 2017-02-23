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
import {observer} from 'mobx-react/native';
import {  H1, Container, Content,
    Left, Right, Body, Icon,
    Drawer, SideBar, Form, Item, Input, Text, Label} from 'native-base';
import VehicleModelPicker from '../Vehicle/VehicleModelPicker';
import VehicleMakePicker from '../Vehicle/VehicleMakePicker';
import VehicleStore from '../../stores/VehicleStore';

@observer
export default class NewDriverSignupComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            tag: '',
            make: '',
            model:''
        };

    }

    updateState = (key, val) => {
        this.setState({[key]:val});
        console.log({[key]:val})
    };

    static navigationOptions = {
        title: 'New Driver Signup',
    };


    render() {

        return (
            <Container>
                <Content padder>
                    <Form>
                        <Item>
                            <Input placeholder="Full Name" />
                        </Item>
                        <Item >
                            <Input placeholder="License Plate" />
                        </Item>

                        <Item stackedLabel last>
                            <Label>Select Vehicle Make</Label>
                            <VehicleMakePicker  store={VehicleStore}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Select Vehicle Model</Label>
                            <VehicleModelPicker models={VehicleStore.Models} store={VehicleStore}/>
                        </Item>

                    </Form>

                    {VehicleStore.Models.map((model) => {
                        return<Text key={model.value + model.title}>{model.value}</Text>})}

                </Content>

            </Container>

        );
    }
}


AppRegistry.registerComponent('NewDriverSignupComponent', () => NewDriverSignupComponent);
/**
 * Created by Stephen on 2/21/17.
 */
