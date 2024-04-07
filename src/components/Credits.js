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
  const testCredit = credits[0].id; //test credit
  
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <p>{testCredit}</p> 
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
