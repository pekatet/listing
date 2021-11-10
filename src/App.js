import './App.css';
import React from 'react';
import {itemsDataA} from './itemsData';
import Listing from './Listing'

function App() {
  return (
    <div className="App">
      <Listing items={itemsDataA}/>
    </div>
  );
}

export default App;
