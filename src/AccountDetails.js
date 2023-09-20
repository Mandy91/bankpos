
import React from 'react';

function AccountDetails() {
  // Replace these sample values with actual data from your application
  const accountBalance = "$5,000.00";
  const accountNumber = "1234567890";
  const accountHolder = "John Doe";

  return (
    <div className="account-details">
      <h2>Welcome, {accountHolder}!</h2>
      <p>Account Number: {accountNumber}</p>
      <p>Account Balance: {accountBalance}</p>
      
      {/* Buttons for services and offers */}
      <button onClick={() => window.location.href = '/services'}>Services</button>
      <button onClick={() => window.location.href = '/offers'}>Offers</button>
    </div>
  );
}

export default AccountDetails;
