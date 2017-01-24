import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';
import { fetchLocation } from '../../api/maps';

class Footer extends Component {
  render() {
    return (
      <footer className={style.nav}>
        {this.props.routes.map((c, i) => {
          if (this.props.hide !== c.route) {
            return (
              <Tappable
                key={i}
                className={style.tab}
                classes={{ active: style.active }}
                onTap={() => this.props.onTap(c.route)}
              >
                {c.text}
              </Tappable>
            );
          }
        })}
      </footer>
    );
  }
}

Footer.propTypes = { onTap: PropTypes.func.isRequired };

export default Footer;
