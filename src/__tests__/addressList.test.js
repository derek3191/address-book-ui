import React from 'react'
import { fireEvent, cleanup } from '@testing-library/react';
import AddressList from '../components/addressList';


require('dotenv').config();
//import renderer from 'react-test-renderer';


describe('<AddressList />', () => {
    afterEach(cleanup);

    describe('get addresses', () => {
        it('should return a list of addresses', () => {
            let addresses = AddressList.prototype.getAllAddresses();
            expect(addresses).not.toBeUndefined();
        });
        
    })
})