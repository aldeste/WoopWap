import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';

class ViewItem extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>{this.props.name}</h1>
        <p>{this.props.amount} kr</p>
        <p>phone: {this.props.phone}</p>
        <p>adress: {this.props.address}, {this.props.city}</p>
        <h2>Mission given by</h2>
        <p>{this.props.givername} </p>
        <p>{this.props.email}</p>
        <p>Start date: {this.props.loanDate}</p>
        <p>Due date: {this.props.dueDate}</p>
        <Tappable onTap={() => this.props.onDelete()}>
          <button className={style.remove}>Remove</button>
        </Tappable>
        <Tappable onTap={() => this.props.onCancel()}>
          <button className={style.return}>Return</button>
        </Tappable>
      </div>
    );
  }
}

export default ViewItem;
