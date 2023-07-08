import React, { useState } from 'react';
import './Header.css';
import { BsPerson, BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Header = ({ cartItems, handlesearch, handleSort, productCount,isSignedIn,setIsSignedIn,userDetails }) => {
    const itemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const navigation = useNavigate()
  
    const signinbtn = () => {
      navigation("/Signin")
    }
    const signoutbtn=()=>{
       setIsSignedIn(false)
    }
    const tocart = () => {
      navigation("/cart")
    }
  
    const [display, setDisplay] = useState(false);
    const [display1, setDisplay1] = useState(false);
  
    const showContent = () => {
      setDisplay(true);
    };
    const hideContent = () => {
      setDisplay(false);
    };
    const showContent1 = () => {
      setDisplay1(true);
    };
    const hideContent1 = () => {
      setDisplay1(false);
    };
  
    return (
      <>
        <div className="header">
          <div className="head_1">
            <div className="head_2">
              <div className="left">
                <div className="text_1">
                  santhusuuu
                </div>
                <div className="inpbox">
                  <span><CiSearch style={{ height: "25px", width: "25px", color: "rgb(139, 139, 163)" }} /></span>
                  <input type="search" placeholder=" Search by Products" id='inpbox_1' onChange={handlesearch} />
                </div>
              </div>
              <div className="right">
                <div className="text_2" onMouseEnter={showContent} onMouseLeave={hideContent}>
                  <span><MdOutlinePhoneAndroid /></span>
                  <div style={{ textAlign: "center" }} >Download App</div>
                </div>
                <div className="text_4">
                  <div className="cart_1 cart_2" onMouseEnter={showContent1} onMouseLeave={hideContent1}>
                    <div className="cart ">
                      <span> <BsPerson /></span>
                      <div >Person</div>
                    </div>
                  </div>
                  <div className="cart_1 ">
                    <div className="cart" onClick={tocart}>
                      <span> <BsCart2 /></span>
                      <div >Cart({itemCount})</div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="head_1 header_1">
            <div className="header_2">
              <h2>{productCount} products</h2>
              <div className='header_btn' onClick={() => handleSort('relevance')}>Relevance</div>
              {' | '}
              <div className='header_btn' onClick={() => handleSort('freeDelivery')}>Free Delivery</div>
              {' | '}
              <div className='header_btn' onClick={() => handleSort('rating')}>Rating</div>
              {' | '}
              <div className='header_btn' onClick={() => handleSort('costLowToHigh')}>Cost : Low To High</div>
              {' | '}
              <div className='header_btn' onClick={() => handleSort('costHighToLow')}>Cost : High To Low</div>
            </div>
          </div>
        </div>
  

            {/* conditional rendering */}

            {display &&
                <div className="downloadapp"  onMouseEnter={showContent} onMouseLeave={hideContent}>
                    <div className="dwntxt">Download From</div>
                    <div className='dwntxt_1'>
                        <div className="applink">
                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" className='imglink' />
                        </div>
                        <div className="applink">
                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" className='imglink' />

                        </div>
                    </div>
                </div>
            }
            { display1 && 
                    <div className="sign_up"  onMouseEnter={showContent1} onMouseLeave={hideContent1}>
                       {isSignedIn ?
                       <div className='user_signin'>
                        <h2 className='signup_txt'> Hi   {userDetails.name}</h2>
                        <h3 className='signup_txt_1'>{userDetails.email}</h3>
                        <button onClick={signoutbtn} className='signin_btn'>Signout</button>
                       </div>
                      :
                      <div className='user_signin'>
                        <div className="signup_txt">Hello user</div>
                      <div className='signup_txt_1'>To access your Meesho account</div>
                      <button className='signin_btn' onClick={signinbtn}>Signin</button>
                     
                      </div>
                      }
                    </div>
            }
                   </>
    );
};
export default Header;



