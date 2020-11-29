import React, {useState, useEffect} from 'react';

export default function PersonRow(props){
    const [person, setPerson] = useState(props.person);

    useEffect(() => {
        if (props.person !== undefined && props.person !== null){
            setPerson(props.person);
        }
    }, [props.person]);

    return(
        <div>
            {person && 
                <span>{person.firstName} {person.lastName}</span>
            }
        </div>
    )
}