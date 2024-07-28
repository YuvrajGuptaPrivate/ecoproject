import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';

const Navbar = () => {
  const {getTotalCartitems} = useContext(CartContext);
  return (
      <div className="nav custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Neelkanth Curtain Store navigation bar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Neelkanth Curtain Store<span>.</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-link"><Link to='/Shop'>Shop</Link>
              </li>
            <li className="nav-link"><Link to='/About'>About us</Link>
              </li>

              <li className="nav-link"><Link to='/Services'> Services</Link>
              </li>
            <li className="nav-link"><Link to='/Contact'>Contact us</Link>
              </li>
              {localStorage.getItem('token')?<li className="nav-link" onClick={()=>{localStorage.removeItem('token');window.location.replace('/')}}>Logout</li>
              :<li className="nav-link"><Link to='/Login'>Login</Link>
              </li>}
            
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-link"><Link to="/Cart"><img alt="Cart" src="images/cart.svg" /></Link>
            <div className="nav-cart-count">{getTotalCartitems()}</div>
            </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
