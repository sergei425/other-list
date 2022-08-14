import React from 'react';
import Listing from './Listing';
import items from './data/data'

function App() {
    return (
      <Listing items={items} />
    )
}

export default App;