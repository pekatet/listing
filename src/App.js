import './App.css';
import React from 'react';
import {itemsData} from './itemsData';
import Listing from './Listing';

function App() {
  return (
    <div className="App">
      <Listing items={itemsData}/>
    </div>
  );
}

export default App;
