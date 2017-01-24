import React, { Component } from 'react';
import Tappable from 'react-tappable';
import Listitem from './components/Listitem';
import Header from './components/Header';
import Footer from './components/Footer';
import Maps from './components/Map';
import AddDebt from './components/AddDebt';

import { geolocationFallback } from './api/maps';

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

  setUserPosition(position) {
    this.setState({ position });
  }

  calculateDistance(pos1, pos2) {
    const lat1 = pos1.lat;
    const lng1 = pos1.lng;
    const lat2 = pos2.lat;
    const lng2 = pos2.lng;
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
       0.5 - Math.cos(dLat)/2 +
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLng))/2;

    return R * 2 * Math.asin(Math.sqrt(a));
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position =>
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      () => geolocationFallback()
        .then(
          pos =>
            this.setUserPosition({
              lat: pos.location.lat,
              lng: pos.location.lng,
            }),
        )
        .catch(() => {
          this.setUserPosition({ lat: 59.334591, lng: 18.063240 })
        }),
    );
  }

  render() {
    return (
      <div>
        <Header />
        {
          this.state.position &&
          (
            <Maps
              width={'100vw'}
              height={'6rem'}
              center={this.state.position}
              markers={[ this.state.position ]}
            />
          )
        }
        {
          this.state.route === 'home' &&
          this.state.position &&
          this.state.data
          .map(entry => Object.assign({ distance: this.calculateDistance(this.state.position, entry.location) }, entry))
          .sort((a, b) => a.distance - b.distance)
          .map((list, i) => (
            <Tappable key={i}>
              <Listitem
                distance={`${list.distance.toFixed(2)}km`}
                address={list.address}
                price={`${list.price} kr`}
              />
            </Tappable>
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
