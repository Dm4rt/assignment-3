/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

const Credits = (props) => {
  console.log('Credit props:', props.credits);
  const {credits} = props; //We get the creditList from App.js
  console.log(credits);
  const [description, updateDescription] = useState('');
  const [amount, updateAmount] = useState(0);
  
  const listSize = credits.length;
  const allCredits = [];
  //Iterate through the credit list and push to a new allCredits array we will display
  for(let i=0; i<listSize; i++){
  	const curCredit = credits[i];
  	allCredits.push(
  		<li key={curCredit.id}>
  		<h3>ID:</h3> {curCredit.id} <br />
  		<h3>Description:</h3> {curCredit.description} <br />
  		<h3>Amount:</h3> ${curCredit.amount} <br />
  		<h3>Date:</h3> {curCredit.date} <br />
  		<hr /> {/* I added this line to seperate between the credit entries */}
  		</li>
  	);
  }
  
  const changeDescription = (event) =>{
  	updateDescription(event.target.value); //sets the global description to new description
  };
  
  const changeAmount = (event) =>{
  	updateAmount(event.target.value); //sets the global amount to new description
  };
  
  const addCredit = (event) => {
  	event.preventDefault(); //This apparently stops form submission which we don't want
  	
  	//we then create a new credit with the information we got from form
  	const newCredit = {
  		id: credits.length,
  		description: description,
  		amount: parseFloat(amount).toFixed(2), //This makes sure that we only get up to 2 decimals
  		date: new Date().toISOString().slice(0,10),//This just gets the current system time and formats it correctly
  	};
  	
  	props.updateCredits([...credits, newCredit]); //This essentially updates the creditList to add the new credit
  	updateDescription('');
    	updateAmount(0);
    	//we reset Description and Amount and clear the form
  };
  
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      {/* add a form to take user input for new credits*/}
      <h2>Add Credit: </h2>
      <label htmlFor="description">Description</label>
      <input type="text" id="description" value = {description} onChange= {changeDescription} />
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" value = {amount} onChange= {changeAmount} step= "0.01" /> 
      <button onSubmit={addCredit}>Add</button>
      
      <ul>{allCredits}</ul> 
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
