import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing




function ShopContent() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token'); // Extract token to a separate variable
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://ecoproject-backendd.onrender.com/allproducts`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [token]); // Use token in dependency array



 
  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div key={product._id} className="col-12 col-md-4 col-lg-3 mb-5">
              <Link to={`/product/${product.id}`}> {/* Use Link for routing */}
                <img alt="" src={product.image} className="img-fluid product-thumbnail" />
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">Rs{product.new_price}.00</strong>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopContent;