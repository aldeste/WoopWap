import React, { Component } from 'react';
import Listitem from './components/Listitem';

class App extends Component {
 state = {
   data: [
     { _id: 1, name: 'Mimi Lundberg', price: 33400, adress: 'Nybergsgatan 6B 1202, 11445 STOCKHOLM' },
     { _id: 2, name: 'Alexander Deste', price: 10500, adress: 'Kämnärsvägen 67Y, 22646 LUND' },
     { _id: 3, name: 'Patric Keisala', price: 19600, adress: 'Sävstaholmsgatan 15, 21224 MALMÖ' },
     { _id: 4, name: 'Sandra Filipsson', price: 13700, adress: 'Åkersnäsgatan 1B, 21236 MALMÖ' },
     ]
 }
  render() {
    return (
      <div>
        {this.state.data.map(list => <Listitem name={list.name} adress={list.adress} price={`${list.price} kr`}/>)}
      </div>
    );
  }
}

export default App;
