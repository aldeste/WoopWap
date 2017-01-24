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

        <div className={style.checkboxWrapper}>
          <div className={style.box}>
            <label htmlFor="com">Organisation</label>
            <input type="checkbox" name="company" id="com" value="Org" />
          </div>
          <div className={style.box}>
            <label htmlFor="per">Person</label>
            <input type="checkbox" name="person" id="per" value="Person" />
          </div>
        </div>

        <label className={style.label}>Org/Personal ID Number</label>
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
          name="name"
          value={this.state.name}
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

        <label className={style.label}>Borrowers Name</label>
        <input
          className={style.input}
          type="text"
          name="borrowersName"
          required
          value={this.state.borrowersName}
          onChange={event => this.handleInputChange(event)}
        />

        <label className={style.label}>Borrowers Adress</label>
        <input
          className={style.input}
          type="text"
          name="borrowersAdress"
          required
          value={this.state.borrowersAdress}
          onChange={event => this.handleInputChange(event)}
        />

        <label className={style.label}>Loan expired</label>
        <input
          className={style.input}
          type="date"
          name="endDate"
          required
          value={this.state.endDate}
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

        <input className={style.submit} type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddDebt;
