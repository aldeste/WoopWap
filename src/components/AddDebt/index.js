import React, { Component } from 'react';
import style from './style.css';

class AddDebt extends Component {
  state = {
    form: {
      idNumber: '',
      name: '',
      email: '',
      endDate: '',
      amount: '',
      reward: '',
    }
  }
  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className={style.form}>
        <p>
          Are you representing a person or an organization?
        </p>
        <div className={style.booleanWrapper}>
          <label htmlFor="com">Organisation</label>
          <input type="checkbox" name="company" id="com" value="Org" />
          <label htmlFor="per">Person</label>
          <input type="checkbox" name="person" id="per" value="Person" />
        </div>
        <input
          className={style.input}
          type="text"
          name="idNumber"
          placeholder="Org/Personal ID Number"
          value={this.state.idNumber}
          onChange={() => this.handleInputChange}
          required
        />
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={() => this.handleInputChange}
        />
        <input
          className={style.input}
          type="email"
          name="email"
          placeholder="Email"
          required
          value={this.state.email}
          onChange={() => this.handleInputChange}
        />
        <p>Debt</p>
        <input
          className={style.input}
          type="date"
          name="endDate"
          placeholder="Loan duedate"
          required
          value={this.state.endDate}
          onChange={() => this.handleInputChange}
        />
        <input
          className={style.input}
          type="text"
          name="amount"
          placeholder="Amount"
          required
          value={this.state.amount}
          onChange={() => this.handleInputChange}
        />
        <input
          className={style.input}
          type="text"
          name="reward"
          placeholder="Reward %"
          required
          value={this.state.reward}
          onChange={() => this.handleInputChange}
        />
        <input className={style.submit} type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddDebt;
