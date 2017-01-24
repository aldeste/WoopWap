import React, { Component } from 'react';
import style from './style.css';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <img src={logo} className={style.logo}/>
      </header>
    );
  }
}

export default Header;
