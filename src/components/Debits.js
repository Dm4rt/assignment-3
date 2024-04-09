/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

const Debits = (props) => {
  console.log('Debit props:', props.debits);
  const {debits} = props; //We get the debitList from App.js
  const [description, updateDescription] = useState('');
  const [amount, updateAmount] = useState(0);
  
  const listSize = debits.length;
  const allDebits = [];
  //Iterate through the debit list and push to a new allDebits array we will display
  for(let i=0; i<listSize; i++){
  	const curDebit = debits[i];
  	allDebits.push(
  		<li key={curDebit.id}>
  		<h3>ID:</h3> {curDebit.id} <br />
  		<h3>Description:</h3> {curDebit.description} <br />
  		<h3>Amount:</h3> ${curDebit.amount} <br />
  		<h3>Date:</h3> {curDebit.date.slice(0,10)} <br />
  		<hr /> {/* I added this way of rendering so it resembles the credits page */}
  		</li>
  	);
  }
  
  //Functions to handle input from the form
  const changeDescription = (event) =>{
  	updateDescription(event.target.value); //sets the global description to new description
  };
  
  const changeAmount = (event) =>{
  	updateAmount(event.target.value); //sets the global amount to new description
  };
  
  const pushDebit = (event) => {
  	event.preventDefault(); //This apparently stops form submission which we don't want
  	
  	//we then create a new debit const with the information we got from form
  	const newDebit = {
  		id: allDebits.length +1,
  		description: description,
  		amount: parseFloat(amount).toFixed(2), //This makes sure that we only get up to 2 decimals
  		date: new Date().toISOString(),//This just gets the current system time and formats it correctly
  	};
  	
  	props.addDebit(newDebit);//This updates the list of debits to add the new debit
  	updateDescription('');
    	updateAmount(0);
    	//we reset Description and Amount and clear the form
  };
  
  return (
    <div>
      <h1>Debits</h1>
      <br/>
      {/* add a form similar to the credits page form to take user input for new debits*/}
      <h2>Add Debit: </h2>
      	<form onSubmit={pushDebit}>
 	<label htmlFor="description">Description</label>
  	<input type="text" id="description" value={description} onChange={changeDescription} />
  	<label htmlFor="amount">Amount</label>
 	<input type="number" id="amount" value={amount} onChange={changeAmount} step="0.01" />
 	<button type="submit">Add</button>
	</form>
      <ul>{allDebits}</ul> 
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;
