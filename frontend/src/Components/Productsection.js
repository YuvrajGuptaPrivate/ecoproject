import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing


function ProductSection() {
  const [newCollections, setNewCollections] = useState([]);
  

  useEffect(() => {
    fetch(`https://ecoproject-backendd.onrender.com/newcollections`)
      .then(response => response.json())
      .then(data => setNewCollections(data))
      .catch(error => console.error(error));
      
    
  }, []);

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Elevate Your Windows</h2>
            <p className="mb-4">Discover our exquisite collection of custom curtains, blinds, and shades. From modern to traditional, we have the perfect solution for your home.</p>
            <p><a href="/Shop" className="btn">Explore</a></p>
          </div>

          <div className="col-md-9">
            <ul className="product-list row">
              {newCollections.map((product, index) => (
                <li key={index} className="col-md-3 product-item">
                   <Link to={`/product/${product.id}`}> {/* Use Link for routing */}
                <img alt="" src={product.image} className="img-fluid product-thumbnail" style={{ width: 261, height: 261 }} />
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">Rs{product.new_price}.00</strong>
              </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
