import './App.css';
import React from 'react';

function Item ({item}) {
  const title = (item.title.length < 50) ? item.title : item.title.substring(0, 50) + "...";
  let price;
  switch (item.currency_code) {
    case 'USD':
      price = '$' + item.price;
      break;
    case 'EUR':
      price = '€' + item.price;
      break;
    default:
      price = item.price + ' ' + item.currency_code;
  }
  let level;
  if (item.quantity < 10){
    if (item.quantity < 20){
      level = 'level-medium';
    }
    else level = 'level-high';
  }
  else level = 'level-low';

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="item"/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={"item-quantity "+level}>12 left</p>
      </div>
    </div>
  )
}

export default Item;