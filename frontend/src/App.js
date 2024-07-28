import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import Cart from "./Components/Pages/Cart";
import Shop from "./Components/Pages/Shop";
import ProductDetails from "./Components/ProductDetails";
import { CartProvider } from "../src/Components/CartContext";
import { ErrorBoundary } from 'react-error-boundary';
import Cartitems from "./Components/Cartitems";
import Checkout from "./Components/Pages/Checkout";
import TermsAndConditions from "./Components/Pages/TermAndConditions";
import PolicyPages from "./Components/Pages/PolicyPages";
import Info from "./Components/Pages/Info";
import Productinfo from "./Components/Productinfo";
import OrderPayment from "./Components/Pages/OrderPayment";
function App() {
  return (
	<ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => console.log('Resetting...')}
    >
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cartitems" element={<Cartitems />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> 
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/PolicyPages" element={<PolicyPages />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Productinfo" element={<Productinfo />} />
          <Route path="/OrderPayment" element={<OrderPayment />} />







          

        </Routes>
      </BrowserRouter>
    </CartProvider>
	</ErrorBoundary>
  );
}
const ErrorFallback = () => {
	return (
	  <div>
		<h1>Something went wrong</h1>
		<button onClick={() => console.log('Resetting...')}>Reset</button>
	  </div>
	);
  };

export default App;