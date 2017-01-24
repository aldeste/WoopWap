import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddDebt from './components/AddDebt';
import Home from './components/Home';
import data from './dummydata';

import { geolocationFallback } from './api/maps';

class App extends Component {
  state = { route: 'home', data };

  changeRoute(route) {
    this.setState({ route });
  }

  setUserPosition(position) {
    this.setState({ position });
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
          this.setUserPosition({ lat: 59.334591, lng: 18.063240 });
        }),
    );
  }

  render() {
    return (
      <div>
        <Header />
        {
          this.state.route === 'home' &&
            <Home data={this.state.data} position={this.state.position} />
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
//   (
//     <Maps
//       width={'100vw'}
//       height={'6rem'}
//       center={this.state.position}
//       markers={[ this.state.position ]}
//     />
//   )
// }
// {
//   this.state.position &&
//   this.state.data
//   .map(entry => Object.assign({ distance: this.calculateDistance(this.state.position, entry.location) }, entry))
//   .sort((a, b) => a.distance - b.distance)
//   .map((list, i) => (
//     <Tappable key={i}>
//       <Listitem
//         distance={`${list.distance.toFixed(2)}km`}
//         address={list.address}
//         price={`${list.price} kr`}
//       />
//     </Tappable>
//   ))
// }
