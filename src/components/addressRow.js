import React, {useState, useEffect} from 'react';


export default function AddressRow(props){
    const [address, setAddress] = useState(null);

    useEffect(() => {
        if (props.address !== undefined){
            setAddress(props.address);            
        }
    }, [props.address]);

    return(
        <div>
            {
                (address !== undefined && address !== null) &&
                    <div>
                        <span>{address.addressLine1}<br/></span>
                        {address.addressLine2 && <span>address.addressLine2<br/></span>}
                        <span>{address.city} {address.state} {address.zip}<br/></span>

                        <br/>   
                    </div>
            }
        </div>
    )
}