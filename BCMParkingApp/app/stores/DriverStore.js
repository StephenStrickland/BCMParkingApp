/**
 * Created by Stephen on 2/22/17.
 */

import {observable, computed, action, autorun, reaction} from 'mobx'
import DriverSchema from '../data/realm/DriverSchema';

class DriverStore {

    constructor(){
        let Realm = require('realm');
        let realm = new Realm({schema:[DriverSchema]});
        this._driverCollection = realm.objects('Driver');
        realm.write(() => {
            realm.create('Driver', {Name:'Stephen Strickland'});
        });
    }

    _driverCollection = {};

    @observable DriverNameFilter = '';

    @computed get Drivers(){
        const filterText = 'Name CONTAINS "' + this.DriverNameFilter + '"' ;
        let drivers = this.DriverNameFilter ? this._driverCollection.filtered(filterText) : this._driverCollection;

        console.log('drivers--->',drivers);
        return drivers;
    }

    @action updateDriverNameFilter(name){
        this.DriverNameFilter = name;
    }

}

const store = new DriverStore;

export default store;