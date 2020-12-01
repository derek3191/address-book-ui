import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import AddressService from '../services/address';

export default function PersonRow(props){
    const [person, setPerson] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (props.person && !person){
            props.person._id !== undefined ? setDisabled(true) : setDisabled(false);
            setPerson(props.person);
            setDisabled(true);
            // person._id !== undefined ? setDisabled(true) : setDisabled(false);
        } 


        if (disabled && person) {
            props.onChange(person);
        }
        

        // if (props.person !== undefined && props.person !== null){
        //     setPerson(props.person);
        //     setDisabled(true);
        // } else {
        //     setPerson({
        //         firstName: '',
        //         lastName: '',
        //         birthday: '',
        //         email: '',
        //         phone: ''
        //     });
        // }

        // if (props.onChange && person !== null){
        //     console.log('hi there')
        //     setPerson(person);
        //     props.onChange(person);
        // }
    }, [props.person, disabled]);

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
          });
    }

    return(
        <div>
            {person
                && 
                <div>
                    <TextField key={`fn_${person._id}`} name='firstName' value={person.firstName} onChange={handleChange} disabled={disabled}/>        
                    <TextField key={`ln_${person._id}`} name='lastName' value={person.lastName} onChange={handleChange} disabled={disabled}/>
                    <Button color='secondary' onClick={() => {setDisabled(!disabled)}}>{disabled ? 'Edit' : 'Done'}</Button>
                </div>
                // :
                // <div>
                //     <TextField key={`fn_new`} name='firstName' onChange={handleChange} />        
                //     <TextField key={`ln_new`} name='lastName'  onChange={handleChange} />
                //     <Button color='secondary' onClick={() => {setDisabled(!disabled); console.log(disabled)}}>{disabled ? 'Edit' : 'Done'}</Button>
                // </div>
                

            }
        </div>
    )
}