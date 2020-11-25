import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

export default function Filter(props){
    const [filterData, setFilterData] = useState({
        name: '',
        address: ''//,
        //group: null
    });

    const handleChange = e => setFilterData({...filterData, [e.target.name]: e.target.value});
    

    useEffect(() => {
        if (props.onChange){
            props.onChange(filterData);
        }
    }, [filterData.name, filterData.address]);//, filterData.group]);

    return (
        <div>
            <TextField  id="standard-basic" name="name" label="Name" onChange={handleChange}/>
            <TextField id="standard-basic" name="address" label="Address" onChange={handleChange}/>
            <br/>
            <Select native onChange={handleChange}>
                <option aria-label="None" name="group" value="" />
                {props.allGroups.map(group => <option value={group}>{group}</option>)}
            </Select> 
        </div>  
    )
}
/*
useEffect:
linguinecode.com/post/get-child-component-state-from-parent-component
*/
