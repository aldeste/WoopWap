import React, { Component } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';

class Header extends Component {
  render() {
    return (
      <footer className={style.nav}>
        <Tappable
          className={style.tab}
          onTap={() => this.props.onTap('placeholder')}>
          This is placeholder
        </Tappable>
      </footer>
    );
  }
}

export default Header;
