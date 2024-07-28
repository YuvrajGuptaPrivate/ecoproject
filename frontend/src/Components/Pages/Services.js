import React from 'react'
import Navbar from '../Navbar'
import Productsection from '../Productsection'
import Footer from '../Footer'
import Whychooseus from '../Whychooseus'
import ServicesContent from '../ServicesContent'
const Services = () => {
  return (
    <div>
        <Navbar/>
        <ServicesContent/>
        
        <Whychooseus/>
        <Productsection/>
        <Footer/>
    </div>
  )
}

export default Services