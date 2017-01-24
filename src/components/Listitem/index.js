import React, { Component } from 'react';
import style from './style.css';


class Listitem extends Component {
  render() {
    return (
      <div className={style.item}>
        <p>{this.props.adress}</p><p>{this.props.price}</p>
      </div>
      
    );
  }
}

export default Listitem;
