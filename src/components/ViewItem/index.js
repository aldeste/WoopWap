import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';

class ViewItem extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>{this.props.name}</h1>
        <p>{this.props.amount} kr</p>
        <p>You'll get {this.props.reward} kr</p>
        <p>phone: {this.props.phone}</p>
        <p>adress: {this.props.address}, {this.props.city}</p>
        <p>Loan expired: {this.props.dueDate}</p>
        <h2 className={style.subheader}>Mission given by</h2>
        <p>{this.props.givername} </p>
        <p>{this.props.email}</p>
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
