import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';

class Footer extends Component {
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

Footer.propTypes = {
  onTap: PropTypes.func.isRequired,
};


export default Footer;
