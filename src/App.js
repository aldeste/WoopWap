import React, { Component } from 'react';
import Listitem from './components/Listitem';

class App extends Component {
  state = {
    data: [
      { _id: 1, name: 'Mimi Lundberg', price: 334e4, address: 'Nybergsgatan 6B 1202, 11445 STOCKHOLM' },
      { _id: 2, name: 'Alexander Deste', price: 105e2, address: 'Kämnärsvägen 67Y, 22646 LUND' },
      { _id: 3, name: 'Patric Keisala', price: 196e4, address: 'Sävstaholmsgatan 15, 21224 MALMÖ' },
      { _id: 4, name: 'Sandra Filipsson', price: 137e5, address: 'Åkersnäsgatan 1B, 21236 MALMÖ' },
      ]
  }

  render() {
    return (
      <div>
        {
          this.state.data.map(list, i => (
            <Listitem
              key={i}
              name={list.name}
              address={list.address}
              price={`${list.price} kr`}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
