import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import AddressList from './components/addressList';
import PersonForm from './components/personForm';

require('dotenv').config();

function App() {
  return (
    // <div className="App">
    //   <header>
    //     Address Book
    //   </header>

    //   <AddressList />
    // </div>

    <Router>
      <header>
        Address Book
      </header>

      <Route path="/" exact component={AddressList} />
      <Route path="/person/:id?">
        <PersonForm />
      </Route>
    </Router>  
  );
}

export default App;
