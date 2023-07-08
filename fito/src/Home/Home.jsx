import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '../Container/Container';
import Cart from '../Cart/Cart';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import Signin from '../Signin/Signin';


const Home = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const[selectcategory,setselectcategory]=useState(null)
  const[search,setsearch]=useState('');
  const [sort, setSort] = useState('relevance');
  const [productCount, setProductCount] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const handleRemoveProduct = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const handlesearch=(e)=>{
     setsearch(e.target.value)
     console.log(search)

  }
  const handleCategory =(e)=>{
    setselectcategory(e.target.value)
  }
  const handlePrice =(e)=>{
    setselectcategory(e.target.value)
  }
  const handleSort = (value) => {
    setSort(value);
    
  }
  

  return (
    <Router>
      
      <Routes>
        
        <Route
          path="/"
          element={<>
            <Header  
            cartItems={cartItems}
            handlesearch={handlesearch} 
            handleSort={handleSort}
            productCount={productCount} 
            isSignedIn={isSignedIn}
            setIsSignedIn={setIsSignedIn}
            userDetails={userDetails}/>
            <Container product={product} 
            handleAddProduct={handleAddProduct}
             handlesearch={handlesearch}
             search={search}
             handleCategory={handleCategory}
             handlePrice={handlePrice}
            selectcategory= {selectcategory}
            sort={sort}
            setProductCount={setProductCount}
            isSignedIn={isSignedIn}
            
            />
            
          </>}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin setIsSignedIn={setIsSignedIn} setUserDetails={setUserDetails} />} />
        <Route
          path="/cart"
          element={
           <>
             
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              isSignedIn={isSignedIn}
              userDetails={userDetails}
            />
           </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Home;
