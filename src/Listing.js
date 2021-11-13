import './App.css';
import React from 'react';
import Item from './Item';

function Listing({items}){
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <div>
            {item.state === 'active' && <Item item={item} key={item.listing_id}/>}
          </div>
        )
      })}
    </div>
  )
}

export default Listing;