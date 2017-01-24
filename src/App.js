import React, { Component } from 'react';
import Listitem from './components/Listitem';
import Header from './components/Header';
import Footer from './components/Footer';
import Maps from './components/Map';
import AddDebt from './components/AddDebt';

class App extends Component {
  state = {
    route: 'home',
    data: [
      {
        _id: 1,
        name: 'Mimi Lundberg',
        price: 334e4,
        address: 'Nybergsgatan 6B 1202, 11445 STOCKHOLM',
        location: { lat: 59.33711599999999, lng: 18.0844779 },
      },
      {
        _id: 2,
        name: 'Alexander Deste',
        price: 105e2,
        address: 'Kämnärsvägen 67Y, 22646 LUND',
        location: { lat: 55.7229434, lng: 13.2209822 },
      },
      {
        _id: 3,
        name: 'Patric Keisala',
        price: 196e4,
        address: 'Sävstaholmsgatan 15, 21224 MALMÖ',
        location: { lat: 55.6133822, lng: 13.045723 },
      },
      {
        _id: 4,
        name: 'Sandra Filipsson',
        price: 137e5,
        address: 'Åkersnäsgatan 1B, 21236 MALMÖ',
        location: { lat: 55.5875923, lng: 13.0951409 },
      },
    ],
  };

  changeRoute(route) {
    this.setState({ route });
  }

  render() {
    return (
      <div>
        <Header />
        <Maps
          width={'100vw'}
          height={'6rem'}
          center={{ lat: 59.955413, lng: 30.337844 }}
          markers={[ { lat: 59.955413, lng: 30.337844 } ]}
        />
        {
          this.state.route === 'home' &&
          this.state.data.map((list, i) => (
            <Listitem
              key={i}
              name={list.name}
              address={list.address}
              price={`${list.price} kr`}
            />
          ))
        }
        {this.state.route === 'add' && <AddDebt />}
        <Footer
          onTap={route => this.changeRoute(route)}
          routes={[
            { text: 'Add stuff', route: 'add' },
            { text: 'Browse', route: 'home' },
          ]}
          hide={this.state.route}
        />
      </div>
    );
  }
}
export default App;
