import React, { useEffect } from 'react';
import './Cart.css'
import axios from 'axios';
import { BsArrowLeft } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = ({
  cartItems,
  setCartItems,
  handleRemoveProduct,
  isSignedIn,
  userDetails
}) => {
  const navigate = useNavigate()
  const handleIncrement = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const handleClear = () => {
    setCartItems([]);
  };

  
  useEffect(() => {
    if (!isSignedIn && userDetails.id) {
      axios.post(`http://localhost:3000/user/${userDetails.id}`, {cartdatas: cartItems})
        .then((res) => {
          console.log(res)
          console.log(userDetails.name)
          
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [isSignedIn]);

  // useEffect(() => {
  //   if (isSignedIn) {
  //     axios.get(`http://localhost:3000/user/${userDetails.id}`)
  //       .then((res) => {
  //         setCartItems(res.data.cartdatas)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }, [isSignedIn]);

  const gstRate = 0.18;
  const subTotal = Array.isArray(cartItems)
  ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  : 0;

  const gst = subTotal * gstRate;
  const grandTotal = subTotal + gst;

  return (
    <>
      <div className='cart_container'>
        <div className='cart_container1'>
        { cartItems.length > 0 &&(
          <div className="cart_left">
            <div className="cart_tittle">
              <div className="cart_tittle1">Shopping Cart</div>
              <div className="cart_tittle2">{cartItems.length} items</div>
            </div>
            {cartItems.map((product) => (
              <div className="cart_containeritems " key={product.id}>
                <div className="cart_image">
                  <img src={product.image} alt={product.name} className="cart_image1" />
                </div>
                <div className="cart_detials">
                  <div className="cart_productname">
                    <div className="cart_productname1">{product.name}</div>
                    <div className="cart_categoryname">{product.category}</div>
                  </div>
                  <div className="cart_count">
                    <button className="cart_btn" onClick={() => handleIncrement(product)}>+</button>
                    <div className="cart_count1">{product.quantity}</div>
                    <button className="cart_btn" onClick={() => handleDecrement(product)}>-</button>
                  </div>
                  <div className="cart_price">₹  {product.quantity * product.price}</div>
                  <button className="cart_btn" onClick={(() => handleRemoveProduct(product))}>x</button>
                </div>
              </div>
            ))}
              
          </div>)}
          { cartItems.length > 0 &&(
          <div className="cart_right">
            <div className="cart_summary">
              <div className="cart_tittle1"> Summary</div>
              <button className="cart_btn1 empty_cart1" onClick={handleClear}>clear cart</button>
            </div>
            <div className="cart_items">
              <div className="cart_items1">items {cartItems.length}</div>
              <div className="cart_items1">₹  {subTotal.toFixed(2)}</div>
            </div>
            <div className="cart_shipping">
              <div className="cart_delivery">
                <div className="cart_items1">GST ({gstRate * 100}%)</div>
                <div className="cart_items1">₹  {gst.toFixed(2)}</div>
              </div>
              <div className="cart_delivery">
                <div className="cart_items1">delivery <br/>Charge</div>
                <div className="cart_items1" style={{color:"green"}}><del style={{color:"red"}}>₹ 70.00</del><br/> free delivery</div>
              </div>
            </div>
            <div className="cart_items">
              <div className="cart_items1">TOTAL PRICE</div>
              <div className="cart_items1">₹ {grandTotal.toFixed(2)}</div>
            </div>
            <button className="cart_btn1">Buy Now</button>
            <button className='cart_btn2' onClick={()=>{navigate('/')}}><BsArrowLeft />  Back to shop</button>
          </div>)}
        </div>
      </div>
      {(!cartItems || cartItems.length === 0) && 
        <div className='cart_container'>
          <div className="cart_container1">
          <div className="cart_left cart_left1">
            <FaCartPlus className='empty_cart'/>
          <p>Your cart is empty</p>
          </div>
          <div className="cart_right">
          <button className='cart_btn2' onClick={()=>{navigate('/')}}><BsArrowLeft />  Back to shop</button>
          </div>
          </div>
        </div>
        
        
        }
    </>
  );
};

export default Cart;
