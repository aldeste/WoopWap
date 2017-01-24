import React, { Component } from 'react';
import style from './style.css';

class AddDebt extends Component {
  render() {
    return (
      <form className={style.form}>
        <p>
          Are you representing a person or an organization?
        </p>
        <div className={style.booleanWrapper}>
            <label for="com">Organisation</label>
            <input type="checkbox" name="company" id="com" value="Org" />
            <label for="per">Person</label>
            <input type="checkbox" name="person" id="per" value="Person" />
        </div>
        <input className={style.input} type="text" name="idNumber" placeholder="Org/Personal ID Number" required />
        <input className={style.input} type="text" name="name" placeholder="Name" />
        <input className={style.input} type="email" name="email" placeholder="Email" required />

        <p>Debt</p>
        <input className={style.input} type="date" name="startDate" placeholder="Loan startdate" required />
        <input className={style.input} type="date" name="endDate" placeholder="Loan duedate" required />
        <input className={style.input} type="text" name="amount" placeholder="Amount" required />
        <input className={style.input} type="text" name="reward" placeholder="Reward %" required/>
        <input className={style.submit} type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddDebt;
