import React from "react";
import './item.css'

function Item({url, src, title, currency_code, price, quantity}) {
  const getClassName = (quantity) => {
    let className = ''
    if (quantity <= 10) {
      className = 'low'
    } else if (quantity <= 20) {
      className = 'medium'
    } else {
      className = 'high'
    } 
    return className
  }
  
  return (
    
  <div className="item">
    <div className="item-image">
      <a href={url}>
        <img src={src}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{title.length > 50 ? title.slice(0, 51) + '...' : title}</p>
      <p className="item-price">{new Intl.NumberFormat("en", {
                style: "currency",
                currency: currency_code,
              }).format(price)}</p>
      <p className={`item-quantity level-${getClassName(quantity)}`}>{quantity} left</p>
    </div>
  </div>

  );
}

Item.defaultProps = {
  url: '',
  src: 'https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg',
  title: '',
  currency_code: 'GBP',
  price: '',
  quantity: 0
}

export default Item;
