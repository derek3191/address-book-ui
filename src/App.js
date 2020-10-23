import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddressList from './components/addressList';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <header>
        Address Book
      </header>

      <AddressList />
    </div>
  );
}

export default App;
