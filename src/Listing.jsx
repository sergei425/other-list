import React from "react";
import Item from "./Item";

function Listing({ items }) {
  console.log(items);
  return (
    <div className="item-list">
      {items.map((item) => <Item key={item.listing_id} url={item.url} src={item.MainImage?.url_570xN} title={item.title} currency_code={item.currency_code} price={item.price} quantity={item.quantity}/>)}
    </div>
    )
  
}

Listing.defaultProps = {
  items: [],
}

export default Listing;
