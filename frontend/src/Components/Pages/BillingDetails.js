import React, { useState } from 'react';

const BillingDetails = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressLineChange = (e) => {
    setAddressLine(e.target.value);
  };

  const handleLandmarkChange = (e) => {
    setLandmark(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const billingDetails = {
      fullName,
      emailAddress,
      phoneNumber,
      address: `${addressLine}, ${landmark}, ${city}, ${state}, ${zipCode}`,
    };
    fetch('https://backendneelkanth-bdbxajfee8a6b7gw.eastus-01.azurewebsites.net/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(billingDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrderPlaced(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Billing Details</h2>
      {orderPlaced ? (
        <p>Order placed successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" value={fullName} onChange={handleFullNameChange} />
          </label>
          <br />
          <label>
            Email Address:
            <input type="email" value={emailAddress} onChange={handleEmailAddressChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </label>
          <br />
          <h3>Address:</h3>
          <label>
            Address Line:
            <input type="text" value={addressLine} onChange={handleAddressLineChange} />
          </label>
          <br />
          <label>
            Landmark:
            <input type="text" value={landmark} onChange={handleLandmarkChange} />
          </label>
          <br />
          <label>
            City:
            <input type="text" value={city} onChange={handleCityChange} />
          </label>
          <br />
          <label>
            State:
            <input type="text" value={state} onChange={handleStateChange} />
          </label>
          <br />
          <label>
            Zip Code:
            <input type="text" value={zipCode} onChange={handleZipCodeChange} />
          </label>
          <br />
          <br />
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default BillingDetails;