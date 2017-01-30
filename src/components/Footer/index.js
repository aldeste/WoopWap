import React, { Component, PropTypes } from 'react';
import style from './style.css';
import { fetchLocation } from '../../api/maps';
import { BrowserRouter, Link, Match } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer className={style.nav}>
        {
          this.props.hide !== 'add' && (
              <Link
                className={style.tab}
                to="/add"
                onClick={() => this.props.onTap('add')}
              >
                Add stuff
              </Link>
            )
        }
        {
          this.props.hide !== 'home' && (
              <Link
                className={style.tab}
                to="/"
                onClick={() => this.props.onTap('home')}
              >
                Browse
              </Link>
            )
        }
      </footer>
    );
  }
}

Footer.propTypes = { onTap: PropTypes.func.isRequired };

export default Footer;
