import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Button, Snackbar} from '@material-ui/core';

import AddressService from '../services/address';
import AddressRow from '../components/addressRow';
import PersonRow from '../components/personRow';




export default function PersonForm() {
    let { id } = useParams();
    
    const [address, setAddress] = useState();
    const [buttonText, setButtonText] = useState('Add');
    const [addPerson, setAddPerson] = useState(false);
    const [error, setError] = useState(null);
    const [toast, setToast] = useState(null);
    const [open, setOpen] = useState(false);

    const emptyPerson = {
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        phone: ''
    };
    
    useEffect(() => {
        async function getAddress() {
            if (id !== undefined){
                const response = await AddressService.prototype.getAddressById(id);
                if (response.status === 500){
                    console.log('setting error')
                    setToast(response.data.message);
                } else {
                    if (response !== null){
                        setAddress(response.data);
                        setButtonText('Edit');
                    } else {
                        setAddress(null);
                    }
                }
            } else {
                setAddress(null);
            }
            
        }
        
        if (!address){
            getAddress();
        }

        if(addPerson){
            address.people.push(emptyPerson);
            setAddPerson(false);
            console.log(address.people);
            
        }
    }, [id, addPerson]);
    

    function personEventHandler(data){
        console.log(data);
        if (data !== null){
            let found = false;
            if (address.people.map((p) => {
                if (p._id === data._id){
                    found = true;
                    p = Object.assign(p, data);
                };
            }));

            if (!found){
                address.people.push(data);
            }
        }
    }

    async function saveAddress(){
        const response = await AddressService.prototype.updateAddress(address);
        if (response.status === 500){
            setToast(response.data.message);
            setOpen(true);
        } else {
            if (response !== null){
                setAddress(response.data);
                setToast('Address Saved!')
                setOpen(true);
            } else {
                setAddress(null);
            }
        }
    }


    return(
        <div>
            <Button href="/">List</Button>
            {
                error !== null
                    ? 
                        <div>{error}</div>
                    :
                        <div>
                        <h2>Address</h2>
                        
                        {(address !== null && address !== undefined)
                            ? <AddressRow address={address} />
                            : <AddressRow />
                        }
                        
                        <Button color="primary">{buttonText} Address</Button>

                        <h2>People</h2>
                        {(address && address.people && address.people.map((person) =>
                            <PersonRow key={person._id} person={person} onChange={personEventHandler} />
                        ))}
                        <Button onClick={() => {
                            setAddPerson(true);
                            // setAddress(Object.assign(address, address.people.push(emptyPerson)));
                        }}>
                            Add person
                        </Button>
                        </div>
            }
            <Button color="primary" variant="contained" onClick={saveAddress}>Save Address</Button>
            {open && <h1>{toast}</h1>}
        </div>
    )
    
}

