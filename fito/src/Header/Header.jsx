import React, { useState } from 'react';
import './Header.css';
import { BsPerson, BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SlBag } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigation = useNavigate()

    const signupbtn=()=>{
      navigation("/Signup")}
      const tocart=()=>{
        navigation("/cart")}
    const [display, setDisplay] = useState(false);
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);
    const [display3, setDisplay3] = useState(false);
    const [display4, setDisplay4] = useState(false);
    const [display5, setDisplay5] = useState(false);
    const [display6, setDisplay6] = useState(false);
    const [display7, setDisplay7] = useState(false);
    const [display8, setDisplay8] = useState(false);
    const [display9, setDisplay9] = useState(false);
    const [display10, setDisplay10] = useState(false);

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
    const showContent2 = () => {
        setDisplay2(true);
    };
    const hideContent2 = () => {
        setDisplay2(false);
    };
    const showContent3 = () => {
        setDisplay3(true);
    };
    const hideContent3 = () => {
        setDisplay3(false);
    };
    const showContent4 = () => {
        setDisplay4(true);
    };
    const hideContent4 = () => {
        setDisplay4(false);
    };
    const showContent5 = () => {
        setDisplay5(true);
    };
    const hideContent5 = () => {
        setDisplay5(false);
    };
    const showContent6 = () => {
        setDisplay6(true);
    };
    const hideContent6 = () => {
        setDisplay6(false);
    };
     const showContent7 = () => {
        setDisplay7(true);
    };
    const hideContent7 = () => {
        setDisplay7(false);
    };
    const showContent8 = () => {
        setDisplay8(true);
    };
    const hideContent8 = () => {
        setDisplay8(false);
    };
    const showContent9 = () => {
        setDisplay9(true);
    };
    const hideContent9 = () => {
        setDisplay9(false);
    };
    const showContent10 = () => {
        setDisplay10(true);
    };
    const hideContent10 = () => {
        setDisplay10(false);
    };


    return (
        <>
            <div className="header">
                <div className="head_1">
                    <div className="head_2">
                        <div className="left">
                            <div className="text_1">
                                meesho
                            </div>
                            <div className="inpbox">
                                <span><CiSearch style={{ height: "25px", width: "25px", color: "rgb(139, 139, 163)" }} /></span>
                                <input type="search" placeholder="Try Saree ,Kurti or Search by Products" id='inpbox_1' />
                            </div>
                        </div>
                        <div className="right">
                            <div className="text_2"  onMouseEnter={showContent} onMouseLeave={hideContent}>
                                <span><MdOutlinePhoneAndroid /></span>
                                <div style={{ textAlign: "center" }} >Download App</div>
                            </div>
                            <div className="text_3" onClick={()=>{navigation("/supplier")}}> Become a Supplier</div>
                            <div className="text_4">
                                <div className="cart_1 cart_2"  onMouseEnter={showContent1} onMouseLeave={hideContent1}>
                                    <div className="cart ">
                                    <span> <BsPerson /></span>
                                    <div >Person</div>
                                </div>
                                </div>
                                <div className="cart_1 ">
                                <div className="cart" onClick={tocart}>
                                    <span> <BsCart2 /></span>
                                    <div >Cart</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head_1 header_1">
                    <div className="header_2">
                        <div className="h2txt" onMouseEnter={showContent2} onMouseLeave={hideContent2}>Women Ethnic</div>
                        <div className="h2txt" onMouseEnter={showContent3} onMouseLeave={hideContent3}>Women Western</div>
                        <div className="h2txt" onMouseEnter={showContent4} onMouseLeave={hideContent4}>Mens</div>
                        <div className="h2txt" onMouseEnter={showContent5} onMouseLeave={hideContent5}>Kids</div>
                        <div className="h2txt" onMouseEnter={showContent6} onMouseLeave={hideContent6}>Home & Kitchen</div>
                        <div className="h2txt" onMouseEnter={showContent7} onMouseLeave={hideContent7}>Beauty & Health</div>
                        <div className="h2txt" onMouseEnter={showContent8} onMouseLeave={hideContent8}>Jewellery & Accessories</div>
                        <div className="h2txt" onMouseEnter={showContent9} onMouseLeave={hideContent9}>Bags & Footwear</div>
                        <div className="h2txt" onMouseEnter={showContent10} onMouseLeave={hideContent10}>Electronics</div>
                    </div>
                </div>
            </div>

            {/* conditional rendering */}

            {display &&
                <div className="downloadapp"  onMouseEnter={showContent} onMouseLeave={hideContent}>
                    <div className="dwntxt">Download From</div>
                    <div className='dwntxt_1'>
                        <div className="applink">
                            <a href="https://app.meesho.com/2yoV?pid=pow_website&c=pow&af_dp=supply%3A%2F%2Fopen&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.meesho.supply" target='blank'>
                                <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" className='imglink' />
                            </a>
                        </div>
                        <div className="applink">
                            <a href="https://apps.apple.com/us/app/meesho/id1457958492" target='blank'>
                                <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" className='imglink' />
                            </a>

                        </div>
                    </div>
                </div>
            }
            { display1 &&
                    <div className="sign_up"  onMouseEnter={showContent1} onMouseLeave={hideContent1}>
                        <div className="signup_txt">Hello User</div>
                        <div className='signup_txt_1'>To access your Meesho account</div>
                        <button className='signup_btn' onClick={signupbtn}>Sign Up</button>
                        <div className="orders">
                            <div className="orders_1">
                            <span><SlBag/></span>
                            <div>My Orders</div>
                            </div>
                        </div>
                    </div>
            }
            {display2 &&
                <div className="items" onMouseEnter={showContent2} onMouseLeave={hideContent2} >
                    <div className="items_1"> All Women Ethnic
                        <div className="items_2">
                            <div className="items_3"> View All</div>  
                        </div>
                    </div>
                    <div className="items_1"> Sarees
                        <div className="items_2">
                            <div className="items_3"> All Sarees</div>  
                            <div className="items_3"> Silk Sarees</div>  
                            <div className="items_3"> Cotton Silk Sarees</div>  
                            <div className="items_3"> Cotton Sarees</div>  
                            <div className="items_3"> Georgetee Sarees</div>  
                            <div className="items_3"> Chiffon Sarees</div>  
                            <div className="items_3"> Satin Sarees</div>  
                            <div className="items_3"> Embroidered Sarees</div>    
                        </div>
                    </div>
                    <div className="items_1"> Kurtis
                        <div className="items_2">
                            <div className="items_3"> All Kurtis</div>  
                            <div className="items_3"> Anarkali Kurtis</div>  
                            <div className="items_3"> Rayon Kurtis</div>  
                            <div className="items_3"> Cotton Kurtis</div>  
                            <div className="items_3"> Embroidered Kurtis</div>  
                        </div>
                    </div>
                    <div className="items_1"> Kurta Sets
                        <div className="items_2">
                            <div className="items_3"> All Kurta Sets</div>  
                        </div>
                    </div>
                    <div className="items_1"> Suits & Dress Material
                        <div className="items_2">
                            <div className="items_3"> All Suits & Dress Material</div>  
                            <div className="items_3"> Cotton Suits</div>  
                            <div className="items_3"> Embroidered Suits </div>  
                            <div className="items_3"> Chanderi Suits </div>  
                        </div>
                    </div>
                    <div className="items_1"> Other Ethnic
                        <div className="items_2">
                            <div className="items_3">Blouses</div>  
                            <div className="items_3">Dupattas</div>  
                            <div className="items_3">Lehanga</div>  
                            <div className="items_3">Gown</div>  
                            <div className="items_3">Ethnic Bottomwear</div>  
                        </div>
                    </div>
                </div>
            }
             {display3 &&
                <div className="items"  onMouseEnter={showContent3} onMouseLeave={hideContent3} >
                    <div className="items_1"> Top Wear
                        <div className="items_2">
                            <div className="items_3"> Tops</div>  
                            <div className="items_3"> Dresses</div>  
                            <div className="items_3"> Sweaters</div>  
                            <div className="items_3"> Jumpsuits</div>  
                        </div>
                    </div>
                    <div className="items_1">Bottom Wear
                        <div className="items_2">
                            <div className="items_3">Jeans</div>  
                            <div className="items_3"> Jeggings</div>  
                            <div className="items_3"> Plazzos</div>  
                            <div className="items_3"> Shorts</div>  
                            <div className="items_3"> Skirts</div>  
                        </div>
                    </div>
                    <div className="items_1"> Inner Wear
                        <div className="items_2">
                            <div className="items_3"> Bra</div>  
                            <div className="items_3"> Briefs</div>    
                        </div>
                    </div>
                    <div className="items_1"> Sleep Wear
                        <div className="items_2">
                            <div className="items_3">Night Suits</div>  
                            <div className="items_3">Babydolls</div>  
                        </div>
                    </div>
                   
                </div>
            }
            {display4 &&
                <div className="items" onMouseEnter={showContent4} onMouseLeave={hideContent4} >
                    <div className="items_1"> Top Wear
                        <div className="items_2">
                            <div className="items_3"> All Top Wear</div>  
                            <div className="items_3"> Tshirts</div>  
                            <div className="items_3"> Shirts</div>  
                        </div>
                    </div>
                    <div className="items_1"> Bottom Wear
                        <div className="items_2">
                            <div className="items_3"> Track Pants</div>  
                            <div className="items_3"> Jeans</div>  
                            <div className="items_3"> Trousers</div>    
                        </div>
                    </div>
                    <div className="items_1"> Men Accessories
                        <div className="items_2">
                            <div className="items_3"> All Men Accessories</div>  
                            <div className="items_3"> Watches</div>  
                            <div className="items_3"> Belts</div>  
                            <div className="items_3"> Wallets</div>  
                            <div className="items_3"> Jewellery</div>  
                            <div className="items_3"> Sunglasses</div>  
                            <div className="items_3"> Bags</div>  
                        </div>
                    </div>
                    <div className="items_1"> Men Footwear
                        <div className="items_2">
                            <div className="items_3"> Casuals Shoes</div>  
                            <div className="items_3"> Sports Shoes</div>  
                            <div className="items_3"> Sandals</div>  
                            <div className="items_3"> Formal Shoes</div>  
                        </div>
                    </div>
                    <div className="items_1"> Ethnic Wear
                        <div className="items_2">
                            <div className="items_3">Men Kurtas</div>  
                            <div className="items_3"> Ethnic Jackets</div>  
                        </div>
                    </div>
                    <div className="items_1"> Inner & Sleep Wear
                        <div className="items_2">
                            <div className="items_3">All Inner & Sleep Wear</div>  
                            <div className="items_3">Vests</div>  
                        </div>
                    </div>
                </div>
            }{display5 &&
                <div className="items" onMouseEnter={showContent5} onMouseLeave={hideContent5} >
                    <div className="items_1"> Boys & Girls 2+ Years
                        <div className="items_2">
                            <div className="items_3"> Dresses</div>  
                        </div>
                    </div>
                    <div className="items_1">Infant 0-2 Years
                        <div className="items_2">
                            <div className="items_3"> Rompers</div>     
                        </div>
                    </div>
                    <div className="items_1"> Toys & Accessories
                        <div className="items_2">
                            <div className="items_3">Soft Toys</div>  
                            <div className="items_3"> FootWear</div>  
                            <div className="items_3"> Stationery</div>  
                            <div className="items_3"> Watches</div>  
                            <div className="items_3"> Bags & Backpacks</div>   
                        </div>
                    </div>
                    <div className="items_1"> Baby Care
                        <div className="items_2">
                            <div className="items_3"> All baby Care</div>  
                        </div>
                    </div>
                  
                </div>
            }
            {display6 &&
                <div className="items"  onMouseEnter={showContent6} onMouseLeave={hideContent6} >
                    <div className="items_1"> Home Furnishing
                        <div className="items_2">
                            <div className="items_3"> Bedsheets</div>  
                            <div className="items_3"> Doormats</div>  
                            <div className="items_3"> Curtians & Sheers</div>  
                            <div className="items_3"> Cushions & Cushion Covers</div>  
                            <div className="items_3"> Mattress Protectors</div>  
                        </div>
                    </div>
                    <div className="items_1">Home Decor
                        <div className="items_2">
                            <div className="items_3">All Home Decor</div>  
                            <div className="items_3"> Stickers</div>  
                            <div className="items_3"> Clocks</div>  
                            <div className="items_3"> Showpieces</div>  
                        </div>
                    </div>
                    <div className="items_1"> Kitchen & Dining
                        <div className="items_2">
                            <div className="items_3"> Kitchen Storage</div>  
                            <div className="items_3"> Cookware & Bakeware</div>    
                        </div>
                    </div>
                </div>
            }
            {display7 &&
                <div className="items"  onMouseEnter={showContent7} onMouseLeave={hideContent7} >
                    <div className="items_1"> Make Up
                        <div className="items_2">
                            <div className="items_3"> Face</div>  
                            <div className="items_3"> Eyes</div>  
                            <div className="items_3"> Lips</div>  
                            <div className="items_3"> Nails</div>  
                        </div>
                    </div>
                    <div className="items_1">Wellness
                        <div className="items_2">
                            <div className="items_3">Sanitizers</div>  
                            <div className="items_3"> Oral Care</div>  
                            <div className="items_3"> Feminine Hygiene</div>    
                        </div>
                    </div>
                    <div className="items_1"> Skincare
                        <div className="items_2">
                            <div className="items_3"> Deodorants</div>     
                        </div>
                    </div>
                </div>
            }
            {display8 &&
                <div className="items"  onMouseEnter={showContent8} onMouseLeave={hideContent8} >
                    <div className="items_1">Jewellery
                        <div className="items_2">
                            <div className="items_3"> Jewellery Set</div>  
                            <div className="items_3"> Earings</div>  
                            <div className="items_3"> Mangalsutras</div>  
                            <div className="items_3"> Studs</div>  
                            <div className="items_3"> Bangles</div>  
                            <div className="items_3"> Necklaces</div>  
                            <div className="items_3"> Rings</div>  
                            <div className="items_3"> Anklets</div>  
                        </div>
                    </div>
                    <div className="items_1">Women Accessory
                        <div className="items_2">
                            <div className="items_3">Bags</div>  
                            <div className="items_3"> Watches </div>  
                            <div className="items_3"> Hair Accessories</div>    
                            <div className="items_3"> Sunglasses</div>    
                            <div className="items_3"> Socks</div>    
                        </div>
                    </div>
                </div>
            }
            {display9 &&
                <div className="items"  onMouseEnter={showContent9} onMouseLeave={hideContent9} >
                    <div className="items_1">Women Bags
                        <div className="items_2">
                            <div className="items_3"> All Women Bags</div>  
                            <div className="items_3"> Handbags</div>  
                            <div className="items_3"> Clutches</div>  
                            <div className="items_3"> Slingbags</div>  
                        </div>
                    </div>
                    <div className="items_1">Men Bags
                        <div className="items_2">
                            <div className="items_3">All Men Bags</div>  
                            <div className="items_3"> Men Wallets</div>    
                        </div>
                    </div>
                    <div className="items_1"> Men Footwear
                        <div className="items_2">
                            <div className="items_3"> Sports Shoes</div>     
                            <div className="items_3"> Casual Shoes</div>     
                            <div className="items_3"> Formal Shoes</div>     
                            <div className="items_3"> Sandals</div>     
                        </div>
                    </div>
                    <div className="items_1">Women Footwear
                        <div className="items_2">
                            <div className="items_3">Flats</div>  
                            <div className="items_3">Bellies</div>    
                            <div className="items_3">Juttis</div>    
                        </div>
                    </div>
                </div>
            }
            {display10 &&
                <div className="items"  onMouseEnter={showContent10} onMouseLeave={hideContent10} >
                    <div className="items_1"> Mobile & Accessories
                        <div className="items_2">
                            <div className="items_3"> All Mobile & Accessories</div>  
                            <div className="items_3"> Smartwatches</div>  
                            <div className="items_3"> Mobile Holders</div>  
                            <div className="items_3"> Mobile cases and covers</div>  
                        </div>
                    </div>
                    <div className="items_1"> Appliances
                        <div className="items_2">
                            <div className="items_3">All Appliances</div>  
                            <div className="items_3"> Grooming</div>  
                            <div className="items_3"> Home Appliances</div>    
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
export default Header;



