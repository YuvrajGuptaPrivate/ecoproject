import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import Productsection from '../Productsection';
import Whychooseus from '../Whychooseus';
import Wehelp from '../Wehelp';
import Popularproduct from '../Popularproduct';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Productsection />
      <Whychooseus />
      <Wehelp />
      <Popularproduct />
      <Footer />
    </div>
  )
}

export default Home
