import React from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


export default function AddressForm(props){
    if(props.address !== null){
        return (
            <div>
                <FormControl id='updateAddressForm'>
                    <TextField id='uaf-addressLine1' placeholder='Address Line 1' value={props.address.addressLine1}/>
                    <TextField id='uaf-addressLine2' placeholder='Address Line 2' value={props.address.addressLine2}/>
                    <TextField id='uaf-city' placeholder='City' value={props.address.city}/>
                    <TextField id='uaf-state' placeholder='State' value={props.address.state}/>
                    <TextField id='uaf-zip' placeholder='Zip' value={props.address.zip}/>
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
}