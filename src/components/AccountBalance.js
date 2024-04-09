/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, { Component } from 'react';

class AccountBalance extends Component {
  render() {
    const { accountBalance } = this.props; // Access accountBalance from props
    const balanceStyle = {
      position: 'fixed',
      top: '10px',
      right: '10px',
      backgroundColor: '#fff',
      padding: '5px 10px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
    //trying to fix bug
    // First we check if accountBalance is a number before calling toFixed
    const balance = typeof accountBalance === 'number' ? accountBalance.toFixed(2) : "Loading...";
    return (
      <div style={balanceStyle}>
        Balance: {balance}
      </div>
    );
  }
}

export default AccountBalance;

