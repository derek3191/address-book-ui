import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import AddressService from '../services/address';
import AddressRow from '../components/addressRow';
import PersonRow from '../components/personRow';




export default function PersonForm() {
    let { id } = useParams();
    
    const [address, setAddress] = useState();
    const [buttonText, setButtonText] = useState('Add');
    const [addPerson, setAddPerson] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAddress() {
            if (id !== undefined){
                const response = await AddressService.prototype.getAddressById(id);
                if (response.status === 500){
                    console.log('setting error')
                    setError(response.data.message);
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
        getAddress();
    }, [id]);
    
    
    return(
        <div>
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
                        
                        <Button color="primary" variant="contained">{buttonText} Address</Button>

                        <h2>People</h2>
                        {(address !== null && address !== undefined && address.people) && address.people.map((value) => 
                            <PersonRow key={value._id} person={value} />
                            )}
                        {addPerson && <PersonRow/>}

                        <Button color="primary" variant="contained" onClick={() => {setAddPerson(true); console.log(addPerson)}}>Add Person</Button>
                        </div>
            }
        </div>
    )
    
}

