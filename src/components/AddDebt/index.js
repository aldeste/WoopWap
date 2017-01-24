import React, { Component } from 'react';
import style from './style.css';

class AddDebt extends Component {
  render() {
    return (
      <form className={style.form}>
        <p>
          Are you representing a person or an organization?
        </p>
        <div className={style.checkboxWrapper}>
          <div className={style.box}>
            <label for="com">Organisation</label>
            <input type="checkbox" name="company" id="com" value="Org" />
          </div>
          <div className={style.box}>
            <label for="per">Person</label>
            <input type="checkbox" name="person" id="per" value="Person" />
          </div>
        </div>

        <label className={style.label}>Org/Personal ID Number</label>
        <input className={style.input} type="text" name="idNumber" required />

        <label className={style.label}>Name</label>
        <input className={style.input} type="text" name="name" />

        <label className={style.label}>Email</label>
        <input className={style.input} type="email" name="email" required />

        <label className={style.label}>Borrowes Name</label>
        <input className={style.input} type="text" name="startDate" required />

        <label className={style.label}>Borrowes Adress</label>
        <input className={style.input} type="text" name="startDate" required />

        <label className={style.label}>Loan startdate</label>
        <input className={style.input} type="date" name="startDate" required />

        <label className={style.label}>Loan enddate</label>
        <input className={style.input} type="date" name="endDate" required />

        <label className={style.label}>Amount</label>
        <input className={style.input} type="text" name="amount" required />

        <label className={style.label}>Reward %</label>
        <input className={style.input} type="text" name="reward" required/>

        <input className={style.submit} type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddDebt;
