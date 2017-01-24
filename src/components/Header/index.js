import React, { Component } from 'react';
import style from './style.css';
import Logo from '../Logo';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <Logo className={style.logo} />
      </header>
    );
  }
}

export default Header;
