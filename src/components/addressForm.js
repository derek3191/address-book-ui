import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


export default class AddressForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            address: props.address
        };
    }
    
    render(){
        console.log(`props address =\n${this.state.address.addressLine1}`)
        if(this.state.address !== null){
            return (
                <div>
                    <FormControl id='updateAddressForm'>
                        <TextField id='uaf-addressLine1' placeholder='Address Line 1' value={this.state.address.addressLine1}/>
                        <TextField id='uaf-addressLine2' placeholder='Address Line 2' value={this.state.address.addressLine2}/>
                        <TextField id='uaf-city' placeholder='City' value={this.state.address.city}/>
                        <TextField id='uaf-state' placeholder='State' value={this.state.address.state}/>
                        <TextField id='uaf-zip' placeholder='Zip' value={this.state.address.zip}/>
                    </FormControl>
                </div>                
            )
        } else {
            return (
                <div>
                    
                    <FormControl id='addAddressForm'>
                        <TextField id='aaf-addressLine1' placeholder='Address Line 1'/>
                        <TextField id='aaf-addressLine2' placeholder='Address Line 2'/>
                        <TextField id='aaf-city' placeholder='City'/>
                        <TextField id='aaf-state' placeholder='State'/>
                        <TextField id='aaf-zip' placeholder='Zip'/>
                    </FormControl>
                </div>
            )
        }
    };
}