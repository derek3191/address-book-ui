import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

export default function PersonRow(props){
    const [person, setPerson] = useState(props.person);

    useEffect(() => {
        console.log(props.person);
        if (props.person !== undefined && props.person !== null){
            setPerson(props.person);
            //setButtonText('Edit');
        }
    });

    return(
        <div>
            {person && 
                <span>{person.firstName} {person.lastName}</span>
            }
        </div>
    )
}