import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the payment details
    console.log('Payment Details:', {
      cardNumber,
      expiryDate,
      cvv,
      billingAddress,
    });
    alert('Payment submitted! (This is a placeholder)');
    // Reset form
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setBillingAddress('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label><br />
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            maxLength={16}
            pattern="\d{16}"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div>
          <label>Expiry Date (MM/YY):</label><br />
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVV:</label><br />
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            maxLength={3}
            pattern="\d{3}"
            placeholder="123"
          />
        </div>
        <div>
          <label>Billing Address:</label><br />
          <textarea
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
            rows={3}
            placeholder="Enter your billing address"
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
