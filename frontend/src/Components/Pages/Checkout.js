import React, { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';
import '../Checkout.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'; // Import the useHistory hook



function Checkout() {

  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const { getTotalCartAmount, cartItems } = useContext(CartContext);
  const navigate = useNavigate(); // Create a navigate object


  const handleInputChange = (event) => {
    
    setBillingDetails({
      ...billingDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      billingDetails,
      cartData: cartItems,
      totalCartAmount: getTotalCartAmount(),
            
    };

    // Save data to backend server
    axios.post('https://ecoproject-backendd.onrender.com/save-orderinfo', data)
      .then((response) => {
        console.log(response);
        navigate('/OrderPayment'); // Redirect to the OrderPayment page

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div> <Navbar/>
    <div className="checkout-container">
      <h2 className="checkout-header">Checkout</h2>
      <form   onSubmit={handleSubmit} className="checkout-form">
        <div className="billing-details">
          <h3>Billing Details</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" value={billingDetails.fullName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" value={billingDetails.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={billingDetails.phoneNumber} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="streetAddress">Street Address:</label>
            <input type="text" id="streetAddress" name="streetAddress" value={billingDetails.streetAddress} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={billingDetails.city} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={billingDetails.state} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip/Pin Code:</label>
            <input type="text" id="zipCode" name="zipCode" value={billingDetails.zipCode} onChange={handleInputChange} />
          </div>
        </div>
        <div className="cart-data"></div>
        <p>Total Cart Amount: {getTotalCartAmount()}</p>
        <button  type="submit">Place Order</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default Checkout;