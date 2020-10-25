import React from 'react'
import { fireEvent, cleanup } from '@testing-library/react';
import address from '../services/address';

require('dotenv').config();
//import renderer from 'react-test-renderer';


describe('<AddressList />', () => {
    afterEach(cleanup);

    describe('get addresses', () => {
        it('should return a list of addresses', () => {
            let addresses = [];
            address.prototype.getAllAddresses()
                .then(res => {
                    addresses = res.data
                })
                .then(() => {
                    expect(addresses).not.toBeUndefined();
                    expect(addresses.length).toBeGreaterThan(0);
                });
        });

        it('should find return a list of groups', async () => {
            let groups = [];
            address.prototype.getAllGroups()
                .then(res => {
                    groups = res.data
                })
                .then(() => {
                    expect(groups).not.toBeUndefined();
                    expect(groups.length).toBeGreaterThan(0);
                    expect(groups).toContain('Birthdays');
                });
                
        })
        
    })
})