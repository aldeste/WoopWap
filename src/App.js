import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddDebt from './components/AddDebt';
import ViewItem from './components/ViewItem';
import Home from './components/Home';
import data from './dummydata';
import {getDebts} from './api/db';


import { geolocationFallback } from './api/maps';

class App extends Component {
  state = { route: 'home', data };

  changeRoute(route) {
    this.setState({ route });
  }

  setUserPosition(position) {
    this.setState({ position });
  }

  addDebt(obj) {
    postDebt(obj).then(data => this.setState({data}));
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position =>
        this.setUserPosition({
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

    getDebts().then(data => this.setState({data}));
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
