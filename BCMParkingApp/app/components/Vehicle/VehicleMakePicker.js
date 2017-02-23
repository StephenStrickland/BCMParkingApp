/**
 * Created by Stephen on 2/21/17.
 */
import   React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base';
import {observer} from 'mobx-react/native';
import VehicleStore from '../../stores/VehicleStore';

@observer
export default class VehicleModelPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'ACURA',
            results: {
                items: []
            },
            selectedMakeValue: "ACURA",
            vehicleMakes: [{"value":"ACURA","title":"Acura"},{"value":"ALFA","title":"Alfa Romeo"},{"value":"AMC","title":"AMC"},{"value":"ASTON","title":"Aston Martin"},{"value":"AUDI","title":"Audi"},{"value":"AVANTI","title":"Avanti"},{"value":"BENTL","title":"Bentley"},{"value":"BMW","title":"BMW"},{"value":"BUICK","title":"Buick"},{"value":"CAD","title":"Cadillac"},{"value":"CHEV","title":"Chevrolet"},{"value":"CHRY","title":"Chrysler"},{"value":"DAEW","title":"Daewoo"},{"value":"DAIHAT","title":"Daihatsu"},{"value":"DATSUN","title":"Datsun"},{"value":"DELOREAN","title":"DeLorean"},{"value":"DODGE","title":"Dodge"},{"value":"EAGLE","title":"Eagle"},{"value":"FER","title":"Ferrari"},{"value":"FIAT","title":"FIAT"},{"value":"FISK","title":"Fisker"},{"value":"FORD","title":"Ford"},{"value":"FREIGHT","title":"Freightliner"},{"value":"GEO","title":"Geo"},{"value":"GMC","title":"GMC"},{"value":"HONDA","title":"Honda"},{"value":"AMGEN","title":"HUMMER"},{"value":"HYUND","title":"Hyundai"},{"value":"INFIN","title":"Infiniti"},{"value":"ISU","title":"Isuzu"},{"value":"JAG","title":"Jaguar"},{"value":"JEEP","title":"Jeep"},{"value":"KIA","title":"Kia"},{"value":"LAM","title":"Lamborghini"},{"value":"LAN","title":"Lancia"},{"value":"ROV","title":"Land Rover"},{"value":"LEXUS","title":"Lexus"},{"value":"LINC","title":"Lincoln"},{"value":"LOTUS","title":"Lotus"},{"value":"MAS","title":"Maserati"},{"value":"MAYBACH","title":"Maybach"},{"value":"MAZDA","title":"Mazda"},{"value":"MCLAREN","title":"McLaren"},{"value":"MB","title":"Mercedes-Benz"},{"value":"MERC","title":"Mercury"},{"value":"MERKUR","title":"Merkur"},{"value":"MINI","title":"MINI"},{"value":"MIT","title":"Mitsubishi"},{"value":"NISSAN","title":"Nissan"},{"value":"OLDS","title":"Oldsmobile"},{"value":"PEUG","title":"Peugeot"},{"value":"PLYM","title":"Plymouth"},{"value":"PONT","title":"Pontiac"},{"value":"POR","title":"Porsche"},{"value":"RAM","title":"RAM"},{"value":"REN","title":"Renault"},{"value":"RR","title":"Rolls-Royce"},{"value":"SAAB","title":"Saab"},{"value":"SATURN","title":"Saturn"},{"value":"SCION","title":"Scion"},{"value":"SMART","title":"smart"},{"value":"SRT","title":"SRT"},{"value":"STERL","title":"Sterling"},{"value":"SUB","title":"Subaru"},{"value":"SUZUKI","title":"Suzuki"},{"value":"TESLA","title":"Tesla"},{"value":"TOYOTA","title":"Toyota"},{"value":"TRI","title":"Triumph"},{"value":"VOLKS","title":"Volkswagen"},{"value":"VOLVO","title":"Volvo"},{"value":"YUGO","title":"Yugo"}]
        }
    }


    getItems =  () =>
    {
        return this.props.store.Makes
           .map(make => <Picker.Item key={make.value + make.title} label={make.title} value={make.value}/>);
    };

    render() {
        const items = this.getItems();
        return (
            <Picker
                iosHeader="Select Make"
                mode="dropdown"
                selectedValue={VehicleStore.currentMakeVal}
                onValueChange={(val) => this.props.store.updateCurrentMake(val)}>
                {items}
            </Picker>
        );
    }
}