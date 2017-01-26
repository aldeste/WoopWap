import React, { Component } from 'react';
import style from './style.css';
import Tappable from 'react-tappable';

class AddDebt extends Component {
  state = {
    loanDate: new Date(),
    dueDate: '',
    amount: '',
    reward: '',
    borrower: '',
    debtGiver: '',
    email: '',
    address: '',
    city: '',
    phone: '',
    personnr: '',
    nameOrCompany: 'person',
  };
  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className={style.form}>
        <h2>My information</h2>
        <p className={style.p}>
          Are you representing a person or an organization?
        </p>
        <div className={style.checkboxWrapper}>
          <div className={style.box}>
            <label htmlFor="per">Person</label>
            <input
              type="radio"
              name="nameOrCompany"
              id="per"
              value="person"
              checked={this.state.nameOrCompany === 'person'}
              onChange={event => this.handleInputChange(event)}
            />
          </div>
          <div className={style.box}>
            <label htmlFor="com">Organisation</label>
            <input
              type="radio"
              name="nameOrCompany"
              id="com"
              value="company"
              checked={this.state.nameOrCompany === 'company'}
              onChange={event => this.handleInputChange(event)}
            />
          </div>
        </div>
        <label className={style.label}>{this.state.nameOrCompany === 'company' ? 'Org' : 'Personal'} ID Number</label>
        <input
          className={style.input}
          type="text"
          name="idNumber"
          value={this.state.idNumber}
          onChange={event => this.handleInputChange(event)}
          required
        />
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          name="debtGiver"
          value={this.state.debtGiver}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Email</label>
        <input
          className={style.input}
          type="email"
          name="email"
          required
          value={this.state.email}
          onChange={event => this.handleInputChange(event)}
        />

        <h2>Debt information</h2>
        <label className={style.label}>Borrowers Name</label>
        <input
          className={style.input}
          type="text"
          name="borrower"
          required
          value={this.state.borrower}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Borrowers Adress</label>
        <input
          className={style.input}
          type="text"
          name="address"
          required
          value={this.state.address}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Borrower City</label>
        <input
          className={style.input}
          type="text"
          name="city"
          required
          value={this.state.city}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Borrower Phone</label>
        <input
          className={style.input}
          type="text"
          name="phone"
          required
          value={this.state.phone}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Loan expired</label>
        <input
          className={style.input}
          type="date"
          name="dueDate"
          required
          value={this.state.dueDate}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Amount</label>
        <input
          className={style.input}
          type="text"
          name="amount"
          required
          value={this.state.amount}
          onChange={event => this.handleInputChange(event)}
        />
        <label className={style.label}>Reward</label>
        <input
          className={style.input}
          type="text"
          name="reward"
          required
          value={this.state.reward}
          onChange={event => this.handleInputChange(event)}
        />
        <input className={style.submit} type="submit" value="Add debt" />
      </form>
    );
  }
}

export default AddDebt;
