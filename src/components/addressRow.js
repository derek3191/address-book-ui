import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export default function AddressRow(props){
    const [address, setAddress] = useState(null);
    const [buttonText, setButtonText] = useState('Add');

    useEffect(() => {
        if (props.address !== undefined){
            console.log('deeep in dis bitch');
            setAddress(props.address);
            setButtonText('Edit');
            
        }
    });

    // for some reson address isn't getting set by the prop in the usestate or useeffect
    return(
        <div>
            {
                (props.address !== undefined && props.address !== null) &&
                    <div>
                        <span>{props.address.addressLine1}<br/></span>
                        {props.address.addressLine2 && <span>props.address.addressLine2<br/></span>}
                        <span>{props.address.city} {props.address.state} {props.address.zip}<br/></span>

                        <br/>   
                    </div>
            }
            {/* <Button color="primary" variant="contained">{buttonText} Address</Button> */}
        </div>
    )
}