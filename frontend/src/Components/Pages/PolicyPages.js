import React from 'react'
import CancellationAndRefundPolicy from '../CancellationAndRefundPolicy';
import ShippingAndDeliveryPolicy from '../ShippingAndDeliveryPolicy';
import Footer from '../Footer';
import Navbar from '../Navbar'

const PolicyPages = () => {
  return (
    <div>
      <Navbar/>
      <CancellationAndRefundPolicy />
      <ShippingAndDeliveryPolicy />
      <Footer/>
    </div>
  )
}

export default PolicyPages