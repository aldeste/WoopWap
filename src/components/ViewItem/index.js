import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import style from './style.css';

class ViewItem extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>{this.props.title}</h1>
        <p>{this.props.amount} kr</p>
        <p>Telefon: {this.props.phone}</p>
        <p>Adress: {this.props.address}, {this.props.city}</p>
        <p>Loan provider: {this.props.debtGiver} </p>
        <p>Start datum: {this.props.loanDate}</p>
        <p>Slut datum: {this.props.dueDate}</p>
        {process.env !== 'production' && <p>Webpack will automatically remove this debug info in production. {JSON.stringify(this.props)}</p>}
        <Tappable onTap={() => this.props.onDelete()}><button className={style.remove}>Remove</button></Tappable>
        <Tappable onTap={() => this.props.onCancel()}><button className={style.return}>Return</button></Tappable>
      </div>
    );
  }
}

export default ViewItem;
