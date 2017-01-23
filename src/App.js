import React, { Component } from 'react';
import Listitem from './components/Listitem';

class App extends Component {
 state = {
   data: [
     { _id: 1, name: 'Mimi', price: 32e3 },
     { _id: 2, name: 'Alexander', price: 6222.50 },
     ]
 }
  render() {
    return (
      <div>
        {state.data.map(list => <Listitem name={list.name} price={`${list.price} kr`}/>)}
      </div>
    );
  }
}

export default App;
