import React, { Component } from 'react';
import Tappable from 'react-tappable';
import Listitem from './components/Listitem';
import Header from './components/Header';
import Footer from './components/Footer';
import Maps from './components/Map';
import AddDebt from './components/AddDebt';
import data from './dummydata';

import { geolocationFallback } from './api/maps';

class App extends Component {
  state = {
    route: 'home',
    data,
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
