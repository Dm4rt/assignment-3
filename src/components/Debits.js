/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Debits = (props) => {
  console.log('Debit props:', props.debits);
  const {debits} = props; //We get the debitList from App.js
  console.log(debits);
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
  
  return (
    <div>
      <h1>Debits</h1>
      <br/>
      <ul>{allDebits}</ul> 
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;
