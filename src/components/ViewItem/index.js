import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';

class ViewItem extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>{this.props.title}</h1>
        <p>{this.props.price}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.address}</p>
        <Tappable onTap={() => this.props.onDelete()}><button className={style.remove}>Remove</button></Tappable>
        <Tappable onTap={() => this.props.onCancel()}><button className={style.return}>Return</button></Tappable>
      </div>
    );
  }
}

export default ViewItem;
