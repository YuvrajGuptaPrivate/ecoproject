import { useParams , useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import Productinfo from './Productinfo';






async function fetchProduct(productId) {
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await fetch(`https://backendneelkanth-bdbxajfee8a6b7gw.eastus-01.azurewebsites.net/allproducts/${productId}`, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!response.headers.get('Content-Type').includes('application/json')) {
      throw new Error('Invalid response content type. Expected application/json');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}



function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetchProduct(productId)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        if (error.response) {
          console.error('Error fetching product:', error.response.data);
        } else {
          console.error('Error fetching product:', error);
        }
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  


  


  return (
    <div>
      <Navbar/>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <img alt="" src={product.image} className="img-fluid product-thumbnail" />
            </div>
            <div className="col-12 col-md-8 col-lg-9 mb-5">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <strong className="product-price">Rs{product.new_price}.00</strong>
              <div className="product-actions">                
                <button
                    className="btn btn-primary"
                    onClick={() => {
                      addToCart(productId);
                      console.log("Product added to cart:", productId);
                    }}  
                >
                  Add to Cart
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/Checkout', { state: { product: product } })}
                >
                  Buy Now
                </button>
              </div>
              <br/>
              <p>For Custom Size Please call/text us with your measurements.</p>
              <Productinfo/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductDetails;