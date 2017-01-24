import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Listitem extends Component {
  render() {
    return (
      <div className={style.item}>
        <p>{this.props.address}</p><p>{this.props.price}</p>
      </div>
    );
  }
}

Listitem.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Listitem;
