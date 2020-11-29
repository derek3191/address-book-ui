import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import AddressService from '../services/address';
import AddressRow from '../components/addressRow';
import PersonRow from '../components/personRow';

function getOutput(slug){
    const output = slug ? `slug is ${slug}` : 'no slug found...';
    return(
        <h3>
            {output}
        </h3>
    )   
}

async function getAddressById(id){
    if (id){
        AddressService.prototype.getAddressById(id)
            .then((result) => {
                console.log(result);
                return result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return null;
}

function doSomething(people){
    // console.log(people);
}

function addPersonRecord(){


    
}

function getAddressText(address){
    const newPerson = {
        firstName: '',
        lastName: '',
        birthdate: '',
        email: '',
        phone: ''
    };
    
    if (address) {
        return (
            <div>
                Add a new address...
            </div>
        )
    } else {
        
        return (
            <div>
                <h2>Address</h2>
                <form>
                    <input type="text" value={address.addressLine1} onChange={doSomething(address.people)}/>
                    <input type="text" value={address.addressLine2} onChange={doSomething(address.people)}/>
                    <input type="text" value={address.city} onChange={doSomething(address.people)}/>
                    <input type="text" value={address.state} onChange={doSomething(address.people)}/>
                    <input type="text" value={address.zip} onChange={doSomething(address.people)}/>
                </form>

                <h2>People</h2>
                    {address.people && address.people.map((val) => 
                        <div>
                            <span>{val.firstName} {val.lastName}|{val.birthdate}
                                <Button color="secondary" >Edit</Button>
                            </span> 
                            <br/>
                        </div>
                    )}
                    <Button color="secondary" variant="contained" onClick={address.people.push(newPerson)} >Add Person</Button>
            </div>
        );
    }
}

export default function PersonForm() {
    let { id } = useParams();
        
    const [value, setValue] = useState();
    const [address, setAddress] = useState();
    const [buttonText, setButtonText] = useState('Add');
        
    useEffect(() => {
        async function getAddress() {
            if (id !== undefined){
                const response = await AddressService.prototype.getAddressById(id);
                if (response.data){
                    setAddress(response.data);
                    setButtonText('Edit');
                } else {
                    setAddress(null);
                }
            } else {
                setAddress(null);
            }

        }
        getAddress();
    }, []);


    return(
        <div>
            <h2>Address</h2>
            
            {(address !== null && address !== undefined)
               ? <AddressRow address={address} />
               : <AddressRow />
            }
            
            <Button color="primary" variant="contained">{buttonText} Address</Button>

            <h2>People</h2>
            {(address !== null && address !== undefined && address.people) && address.people.map((value) => 
                <PersonRow person={value} />
            )}

            {/* <PhoneInput placeholder="Enter Phone Number" value={value} onChange={setValue}/> */}
            <br/>
            <Button color="primary" variant="contained">Add Person</Button>

            {/* {getAddressText(address)} */}
        </div>
    )
    
}

