import { createContext, useState, useEffect } from 'react';




const CartContext = createContext();

const getDefaultCart = ()=>{
  let cart = {};
  for (let index = 0;index<300+1;index++){
    cart[index]=0;
  }
  return cart;
}

const CartProvider = ({ children }) => {
  const [cartItems,setCartItems]=useState(getDefaultCart());
  const [isCartDataFetched, setIsCartDataFetched] = useState(false);
  const [products, setProducts] = useState([]);


useEffect(() => {
    if (!isCartDataFetched) {
      fetchCartData().then(data => {
        setCartItems(data);
        setIsCartDataFetched(true);
        fetchProducts();
      });
    }
  }, [isCartDataFetched])





  const fetchCartData = async () => {
    const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await fetch(`https://ecoproject-backendd.onrender.com/getcart`, {
        method:'POST',
        headers: {
          Accept: 'application/json',
          token:localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const cartItems = await response.json();
      return cartItems;
    } catch (error) {
      console.error('Failed to fetch cart data:', error);
    }
  }
}


  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}));
    if(localStorage.getItem('token')){
      fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/json',
          token:localStorage.getItem('token'),
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.text())
      .then((data)=>console.log(data));
    }
 }

  const removefromcart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId]; // Remove the item from the cart if quantity reaches 0
      }
      return newCartItems;
    });

    if(localStorage.getItem('token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          token:localStorage.getItem('token'),
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }
 }

 

  const getTotalCartAmount = () => {
    let total = 0;
    Object.keys(cartItems).forEach((key) => {
      if (products[key] && products[key].new_price) {
        total += products[key].new_price * cartItems[key];
      }
    });
    return total;
  };


const getTotalCartitems=()=>{
  let totalitems=0;
  for(const item in cartItems)
  {
    if(cartItems[item]>0)
    {
      totalitems+= cartItems[item];
    }
  }
  return totalitems;
}





  return (
    <CartContext.Provider value={{ getTotalCartitems, getTotalCartAmount,cartItems,products, addToCart, removefromcart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
