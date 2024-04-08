/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
  console.log('Credit props:', props.credits);
  const {credits} = props; //We get the creditList from App.js
  console.log(credits);
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
  
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <ul>{allCredits}</ul> 
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
