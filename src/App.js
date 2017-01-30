import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddDebt from './components/AddDebt';
import ViewItem from './components/ViewItem';
import Home from './components/Home';
import Mission from './components/Home/Mission';
import data from './dummydata';
import { getDebts, postDebt, destroyDebt } from './api/db';
import { geolocationFallback, fetchLocation } from './api/maps';
import style from './style.css';
import { BrowserRouter, Link, Match } from 'react-router';

class App extends Component {
  state = { route: 'home', data };

  changeRoute(route) {
    this.setState({ route });
  }

  setUserPosition(position) {
    this.setState({ position });
  }

  addDebt(obj) {
    fetchLocation(`${obj.address},+${obj.city}`).then(position => {
      const { lat, lng } = position;

      this.setState({
        route: 'home',
        data: this.state.data.concat([
          Object.assign(obj, {
            id: this.state.data.length,
            lat,
            lng,
            givername: obj.debtGiver,
            name: obj.borrower,
          }),
        ]),
      });
    });
    postDebt(obj);
  }

  removeDebt(id) {
    destroyDebt(id).catch(err => console.err(err));
    this.setState({ data: this.state.data.filter(item => item.id !== id) });
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

    getDebts().then(data => this.setState({ data }));
  }

  render() {
    const Main = () => (
      <Home
        data={this.state.data}
        position={this.state.position}
        onDelete={id => this.removeDebt(id)}
      />
    );
    const addDebt = () => <AddDebt onAdd={obj => this.addDebt(obj)} />;

    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={style.container}>
            <Match exactly pattern="/" component={Main} />
            <Match exactly pattern="/home" component={Main} />
            <Match exactly pattern="/add" component={addDebt} />
            <Match pattern="/mission" component={Mission} />
          </div>
          <Footer
            onTap={route => this.changeRoute(route)}
            hide={this.state.route}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
