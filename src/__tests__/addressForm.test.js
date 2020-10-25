import { findAllByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, findAllInRenderedTree } from 'react-dom/test-utils';

import AddressForm from '../components/addressForm';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('<AddressForm />', () => {
    it('should load on dom', () => {
        act(() => {
            render(<AddressForm />, container);
        });
        
        findAllByPlaceholderText(container, 'Address Line 1')
            .then(result =>{
                expect(result.length).toBe(1);
                expect(result[0].getAttribute('id')).toBe('uaf-addressLine1');
            });
    });    
})
