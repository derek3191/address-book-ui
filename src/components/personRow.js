import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';

export default function PersonRow(props){
    const [person, setPerson] = useState(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (props.person !== undefined && props.person !== null){
            setPerson(props.person);
        } else {
            setPerson({
                firstName: '',
                lastName: '',
                birthday: '',
                email: '',
                phone: ''
            });
            setDisabled(false);
        }
    }, [props.person]);

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
          });
    }

    return(
        <div>
            {person
                ? 
                <div>
                    <TextField key={`fn_${person._id}`} name='firstName' value={person.firstName} onChange={handleChange} disabled={disabled}/>        
                    <TextField key={`ln_${person._id}`} name='lastName' value={person.lastName} onChange={handleChange} disabled={disabled}/>
                    <Button color='secondary' onClick={() => {setDisabled(!disabled)}}>{disabled ? 'Edit' : 'Save'}</Button>
                </div>
                :
                <div>
                    <TextField key={`fn_new`} name='firstName' onChange={handleChange} />        
                    <TextField key={`ln_new`} name='lastName'  onChange={handleChange} />
                    <Button color='secondary' >Save</Button>
                </div>
                

            }
        </div>
    )
}