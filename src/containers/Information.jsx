import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => (
  <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Contact Information:</h2>
      </div>
      <div className="Information-form">
        <form action="">
          <input type="text" placeholder="Full name" name="name" />
          <input type="text" placeholder="E-Mail" name="email" />
          <input type="text" placeholder="Address" name="address" />
          <input type="text" placeholder="Apartment" name="apartment" />
          <input type="text" placeholder="City" name="city" />
          <input type="text" placeholder="County" name="country" />
          <input type="text" placeholder="State" name="state" />
          <input type="text" placeholder="Postal Code" name="postalCode" />
          <input type="text" placeholder="Phone" name="phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">Back</div>
        <div className="Information-next">
          <Link to="/checkout/payment">Pay</Link>
        </div>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Order:</h3>
      <div className="Information-item">
        <div className="Information-element">
          <h4>Item name: </h4>
          <span>Price: $10</span>
        </div>
      </div>
    </div>
  </div>
);
export default Information;
