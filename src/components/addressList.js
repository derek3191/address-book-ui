import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import AddressService from '../services/address';


export default class AddressList extends Component {

    constructor(){
        super();

        this.state = {
            addresses: [],
            columns: [],
            rows: [],
            selectedGroup: null,
            filteredName: '',
            allGroups: [] 
        }

        this.getAllAddresses = this.getAllAddresses.bind(this);
        this.getAllGroups = this.getAllGroups.bind(this);
    }

    componentDidMount(){
        this.getAllAddresses()
            .then(res => this.setState({
                addresses: res.data
            }))
            .then(() => {
                this.setState({
                    rows: this.formatAddressesForTable(this.state.addresses)
                });
            });

        this.getAllGroups()
            .then(res => this.setState({
                allGroups: res.data
            }));

        this.setState({
            columns: [
                { field: 'id', headerName: 'ID', width: 70 },
                { field: 'family', headerName: 'Family', width: 200 },
                { field: 'address', headerName: 'Address', width: 400 },
                {
                  field: 'groups',
                  headerName: 'Groups',
                  width: 300,
                }
            ]
        });
    }

    createData(address){
        return {
            id: address._id,
            family: `${address.people[0].lastName}, ${address.people[0].firstName}`,
            address: `${address.addressLine1} ${address.city} ${address.state}`,
            groups: address.groups
        }
    }
    formatAddressesForTable(addresses){
        let rows = [];
        addresses.forEach(a => {
            let familyName = a.people.length > 0 ? `${a.people[0].lastName}, ${a.people[0].firstName}` : "";
            rows.push({
                id: a._id,
                family: familyName,
                address: `${a.addressLine1} ${a.city} ${a.state}`,
                groups: a.groups
            });
        });
        return rows;
    }

    getAllAddresses(){   
       return AddressService.prototype.getAllAddresses();
    }

    getAllGroups(){
        return AddressService.prototype.getAllGroups();
    }

    onChangeGroup = (event) =>{
        this.setState({
            selectedGroup: event.target.value
        });
    };

    render() {
        return (
            <div id="address-grid" style={{ height: 300, width: '100%' }}>
                <TextField  id="standard-basic" label="Name" />
                <Select
                    native
                    value={this.state.selectedGroup}
                    onChange={this.onChangeGroup}
                >
                    
                    <option aria-label="None" value="" />
                    {this.state.allGroups.map(group => <option value={group}>{group}</option>)}
                </Select>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {this.state.rows.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return(
                                    <div>
                                        <TableRow>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                checked='false'
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button color="secondary" variant="contained" onClick="{() => { alert('clicked') }}">View People</Button>
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.family}
                                            </TableCell>
                                            <TableCell align="right">{row.address}</TableCell>
                                            <TableCell align="left">
                                                <ul>
                                                    {row.groups.map((group, index) => <li key={index}>{group}</li>)}
                                                </ul>
                                            </TableCell>
                                        </TableRow>
                                    </div>
                                )

                            })}
                        </TableBody>
                    </Table>
                </TableContainer>    
            </div>
        )
    }
}
