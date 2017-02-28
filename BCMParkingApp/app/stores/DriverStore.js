/**
 * Created by Stephen on 2/22/17.
 */

import {observable, computed, action, autorun, reaction} from 'mobx'
import DriverSchema from '../data/realm/DriverSchema';
import TimerMixin from 'react-timer-mixin';

const reactMixin = require('react-mixin');

const Realm = require('realm');
const realm = new Realm({schema:[DriverSchema]});
class DriverStore {

    constructor(){


        this._driverCollection = realm.objects('Driver');

        // TimerMixin.setInterval(() => {
        //     realm.write(() => {
        //         realm.create('Driver', {Name:'Ivy Charlie'});
        //     });
        //     console.log('heeyyyyooooo!!!!!!');
        //
        // }, 2000);

        this.Drivers = this._driverCollection;


    }

    

    _driverCollection = {};

    @observable DriverNameFilter = '';
    @observable Drivers = [];
    // @computed get Drivers(){
    //     const filterText = 'Name CONTAINS "' + this.DriverNameFilter + '"' ;
    //     let drivers = this.DriverNameFilter ? this._driverCollection.filtered(filterText) : this._driverCollection;
    //
    //     console.log('drivers--->',drivers);
    //     return drivers;
    // }

    @action updateDriverNameFilter(name){
        this.DriverNameFilter = name;
    }

    @action savePlayer(){
        realm.write(() => {

        });
    }

}

reactMixin(DriverStore.prototype, TimerMixin);

const store = new DriverStore;

export default store;