/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import AccountBalance from './components/AccountBalance';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }
  
  addCredit = (credit) => {
    const newCreditList = [...this.state.creditList, credit];
    const newAccountBalance = this.calculateBalance(newCreditList, this.state.debitList); //we call this do update Balance
    this.setState({creditList: newCreditList, accountBalance: newAccountBalance});
     console.log('New Balance:', newAccountBalance); // Log new balance for testing purpoises
  }
  
  addDebit = (debit) => {
    const newDebitList = [...this.state.debitList, debit];
    const newAccountBalance = this.calculateBalance(this.state.creditList, newDebitList); //same as before, update balance
    this.setState({debitList: newDebitList, accountBalance: newAccountBalance});
  }
  //This function basically updates the balance using the credits-debits formula
  calculateBalance = (credits, debits) => {
    const totalCredits = credits.reduce((total, credit) => total + parseFloat(credit.amount), 0);
    const totalDebits = debits.reduce((total, debit) => total + parseFloat(debit.amount), 0);
    return totalCredits - totalDebits;
  }
  
  componentDidMount(){
  	
  	//fetch credit API
  	fetch('https://johnnylaicode.github.io/api/credits.json') 
  	.then(response => response.json())
  	.then(data => {
  		this.setState({ creditList: data});
  		console.log(data);
  	
  	});
  	
  	//fetch debits API
  	fetch('https://johnnylaicode.github.io/api/debits.json') 
  	.then(response => response.json())
  	.then(data => {
  		this.setState({ debitList: data }, () => {
        	  //We call a calucate after both API's load  to have an accurate starter balance
       		  const newAccountBalance = this.calculateBalance(this.state.creditList, this.state.debitList);
        	  this.setState({ accountBalance: newAccountBalance });
      		});
  	});
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (
 	 <div>
    		<AccountBalance accountBalance={this.state.accountBalance} />
   	 	<Credits credits={this.state.creditList} addCredit={this.addCredit} />
  	</div>
    );
    const DebitsComponent = () => (
    	<div>
    		<AccountBalance accountBalance={this.state.accountBalance} />
    		<Debits debits={this.state.debitList} addDebit = {this.addDebit} />
    	</div>
    );
    const AccountBalanceComponent = () => (<AccountBalance accountBalance={this.state.accountBalance} />) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/assignment-3">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/accountBalance" render={AccountBalanceComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
