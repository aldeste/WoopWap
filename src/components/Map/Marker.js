import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Marker extends Component {
  render() {
    return (
      <div className={style.marker}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Marker;
