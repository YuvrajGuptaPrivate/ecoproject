import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext';
import { useEffect } from 'react'


const OrderPayment = () => {
        const [name, setName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [amount, setAmount] = useState(0);
        const { getTotalCartAmount} = useContext(CartContext);
        const currency = "INR";
        const receiptId = "qwes1";
   
        useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            document.body.appendChild(script);
          }, []);

        const paymenthandler = async()=>{
            const response = await fetch("http://localhost:4000/order",{
                method:"POST",
                body: JSON.stringify({
                    amount,
                    currency,
                    receipt:receiptId,
                }),
                headers:{
                    "Content-Type": "application/json",
                },
            });
            const order = await response.json();
            console.log(order); 

            const options = {
                "key": 'rzp_test_4RyEDdONxA2DvJ', // Enter the Key ID generated from the Dashboard
                 "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                  "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                receiptId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": async function (response){
                    const body = {
                        ...response,
                    }
                    const validateRes = await fetch("http://localhost:4000/order/validate",{
                        method:"POST",
                        body: JSON.stringify(body),
                        headers:{
                            "Content-Type": "application/json",
                        },
                    });
                    const jsonRes  = await validateRes.json();
                    console.log(jsonRes);



                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
            rzp1.open();
            
    };








        const handleSubmit = (event) => {
            event.preventDefault();
            // Add your payment logic here
            console.log('Payment submitted:', name, phoneNumber, amount);
          };

          useEffect(() => {
            setAmount(getTotalCartAmount());
          }, [getTotalCartAmount]);

  return (
    <div>
        <Navbar/>
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Payment Form</h2>
          <form id="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="font-weight-bold">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="font-weight-bold">Phone Number</label>
              <input
                type="tel"
                className="form-control form-control-lg"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount" className="font-weight-bold">Amount to be Paid</label>
              <p className="text-muted">Amount: {amount}</p>
              <p className="text-muted">Total Cart Amount: {getTotalCartAmount()}</p>
            </div>
            <button type="submit"  onClick={(event) => paymenthandler(event)} className="btn btn-primary btn-lg btn-block">
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        <Footer/>
    </div>
  )
}

export default OrderPayment