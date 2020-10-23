import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';

import AddressService from '../services/address';


export default class AddressList extends Component {

    constructor(){
        super();

        this.state = {
            addresses: [],
            columns: [],
            rows: []  
        }

        this.getAllAddresses = this.getAllAddresses.bind(this);
    }

    componentDidMount(){
        this.getAllAddresses()
            .then(res => this.setState({
                addresses: res.data
            }))
            .then(() => {
                this.setState({
                    rows: this.formatAddressesForGrid(this.state.addresses)
                });
            });

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

    formatAddressesForGrid(addresses){
        let rows = [];
        addresses.forEach(address => {
            let row = {
                id: address._id,
                family: `${address.people[0].lastName}, ${address.people[0].firstName}`,
                address: `${address.addressLine1}\r${address.city} ${address.state}`,
                groups: address.groups
            };
            rows.push(row);
        })
        return rows;
    }

    getAllAddresses(){   
       return AddressService.prototype.getAllAddresses();
    }

    render() {
        return (
            <div id="address-grid" style={{ height: 300, width: '100%' }}>
                <DataGrid  rowHeight="100" rows={this.state.rows} columns={this.state.columns} />
            </div>
        )
    }
}
