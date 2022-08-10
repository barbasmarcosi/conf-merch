import React from 'react';
import '../styles/components/Payment.css';

const Payment = () => (
  <div className="Payment">
    <div className="Payment-content">
        <h3>Order resume:</h3>
        <div className="Payment-button">
            Paypal pay button
        </div>
    </div>
    <div className="Payment-sidebar">Sidebar</div>
  </div>
);

export default Payment;
