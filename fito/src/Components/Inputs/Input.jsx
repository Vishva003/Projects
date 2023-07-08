const Input = ({ handleCategory, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleCategory} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;

//   {display2 &&
//     <div className="items" onMouseEnter={showContent2} onMouseLeave={hideContent2} >
//         <div className="items_1"> All Women Ethnic
//             <div className="items_2">
//                 <div className="items_3"> View All</div>  
//             </div>
//         </div>
//         <div className="items_1"> Sarees
//             <div className="items_2">
//                 <div className="items_3"> All Sarees</div>  
//                 <div className="items_3"> Silk Sarees</div>  
//                 <div className="items_3"> Cotton Silk Sarees</div>  
//                 <div className="items_3"> Cotton Sarees</div>  
//                 <div className="items_3"> Georgetee Sarees</div>  
//                 <div className="items_3"> Chiffon Sarees</div>  
//                 <div className="items_3"> Satin Sarees</div>  
//                 <div className="items_3"> Embroidered Sarees</div>    
//             </div>
//         </div>
//         <div className="items_1"> Kurtis
//             <div className="items_2">
//                 <div className="items_3"> All Kurtis</div>  
//                 <div className="items_3"> Anarkali Kurtis</div>  
//                 <div className="items_3"> Rayon Kurtis</div>  
//                 <div className="items_3"> Cotton Kurtis</div>  
//                 <div className="items_3"> Embroidered Kurtis</div>  
//             </div>
//         </div>
//         <div className="items_1"> Kurta Sets
//             <div className="items_2">
//                 <div className="items_3"> All Kurta Sets</div>  
//             </div>
//         </div>
//         <div className="items_1"> Suits & Dress Material
//             <div className="items_2">
//                 <div className="items_3"> All Suits & Dress Material</div>  
//                 <div className="items_3"> Cotton Suits</div>  
//                 <div className="items_3"> Embroidered Suits </div>  
//                 <div className="items_3"> Chanderi Suits </div>  
//             </div>
//         </div>
//         <div className="items_1"> Other Ethnic
//             <div className="items_2">
//                 <div className="items_3">Blouses</div>  
//                 <div className="items_3">Dupattas</div>  
//                 <div className="items_3">Lehanga</div>  
//                 <div className="items_3">Gown</div>  
//                 <div className="items_3">Ethnic Bottomwear</div>  
//             </div>
//         </div>
//     </div>
// }
//  {display3 &&
//     <div className="items"  onMouseEnter={showContent3} onMouseLeave={hideContent3} >
//         <div className="items_1"> Top Wear
//             <div className="items_2">
//                 <div className="items_3"> Tops</div>  
//                 <div className="items_3"> Dresses</div>  
//                 <div className="items_3"> Sweaters</div>  
//                 <div className="items_3"> Jumpsuits</div>  
//             </div>
//         </div>
//         <div className="items_1">Bottom Wear
//             <div className="items_2">
//                 <div className="items_3">Jeans</div>  
//                 <div className="items_3"> Jeggings</div>  
//                 <div className="items_3"> Plazzos</div>  
//                 <div className="items_3"> Shorts</div>  
//                 <div className="items_3"> Skirts</div>  
//             </div>
//         </div>
//         <div className="items_1"> Inner Wear
//             <div className="items_2">
//                 <div className="items_3"> Bra</div>  
//                 <div className="items_3"> Briefs</div>    
//             </div>
//         </div>
//         <div className="items_1"> Sleep Wear
//             <div className="items_2">
//                 <div className="items_3">Night Suits</div>  
//                 <div className="items_3">Babydolls</div>  
//             </div>
//         </div>
       
//     </div>
// }
// {display4 &&
//     <div className="items" onMouseEnter={showContent4} onMouseLeave={hideContent4} >
//         <div className="items_1"> Top Wear
//             <div className="items_2">
//                 <div className="items_3"> All Top Wear</div>  
//                 <div className="items_3"> Tshirts</div>  
//                 <div className="items_3"> Shirts</div>  
//             </div>
//         </div>
//         <div className="items_1"> Bottom Wear
//             <div className="items_2">
//                 <div className="items_3"> Track Pants</div>  
//                 <div className="items_3"> Jeans</div>  
//                 <div className="items_3"> Trousers</div>    
//             </div>
//         </div>
//         <div className="items_1"> Men Accessories
//             <div className="items_2">
//                 <div className="items_3"> All Men Accessories</div>  
//                 <div className="items_3"> Watches</div>  
//                 <div className="items_3"> Belts</div>  
//                 <div className="items_3"> Wallets</div>  
//                 <div className="items_3"> Jewellery</div>  
//                 <div className="items_3"> Sunglasses</div>  
//                 <div className="items_3"> Bags</div>  
//             </div>
//         </div>
//         <div className="items_1"> Men Footwear
//             <div className="items_2">
//                 <div className="items_3"> Casuals Shoes</div>  
//                 <div className="items_3"> Sports Shoes</div>  
//                 <div className="items_3"> Sandals</div>  
//                 <div className="items_3"> Formal Shoes</div>  
//             </div>
//         </div>
//         <div className="items_1"> Ethnic Wear
//             <div className="items_2">
//                 <div className="items_3">Men Kurtas</div>  
//                 <div className="items_3"> Ethnic Jackets</div>  
//             </div>
//         </div>
//         <div className="items_1"> Inner & Sleep Wear
//             <div className="items_2">
//                 <div className="items_3">All Inner & Sleep Wear</div>  
//                 <div className="items_3">Vests</div>  
//             </div>
//         </div>
//     </div>
// }{display5 &&
//     <div className="items" onMouseEnter={showContent5} onMouseLeave={hideContent5} >
//         <div className="items_1"> Boys & Girls 2+ Years
//             <div className="items_2">
//                 <div className="items_3"> Dresses</div>  
//             </div>
//         </div>
//         <div className="items_1">Infant 0-2 Years
//             <div className="items_2">
//                 <div className="items_3"> Rompers</div>     
//             </div>
//         </div>
//         <div className="items_1"> Toys & Accessories
//             <div className="items_2">
//                 <div className="items_3">Soft Toys</div>  
//                 <div className="items_3"> FootWear</div>  
//                 <div className="items_3"> Stationery</div>  
//                 <div className="items_3"> Watches</div>  
//                 <div className="items_3"> Bags & Backpacks</div>   
//             </div>
//         </div>
//         <div className="items_1"> Baby Care
//             <div className="items_2">
//                 <div className="items_3"> All baby Care</div>  
//             </div>
//         </div>
      
//     </div>
// }
// {display6 &&
//     <div className="items"  onMouseEnter={showContent6} onMouseLeave={hideContent6} >
//         <div className="items_1"> Home Furnishing
//             <div className="items_2">
//                 <div className="items_3"> Bedsheets</div>  
//                 <div className="items_3"> Doormats</div>  
//                 <div className="items_3"> Curtians & Sheers</div>  
//                 <div className="items_3"> Cushions & Cushion Covers</div>  
//                 <div className="items_3"> Mattress Protectors</div>  
//             </div>
//         </div>
//         <div className="items_1">Home Decor
//             <div className="items_2">
//                 <div className="items_3">All Home Decor</div>  
//                 <div className="items_3"> Stickers</div>  
//                 <div className="items_3"> Clocks</div>  
//                 <div className="items_3"> Showpieces</div>  
//             </div>
//         </div>
//         <div className="items_1"> Kitchen & Dining
//             <div className="items_2">
//                 <div className="items_3"> Kitchen Storage</div>  
//                 <div className="items_3"> Cookware & Bakeware</div>    
//             </div>
//         </div>
//     </div>
// }
// {display7 &&
//     <div className="items"  onMouseEnter={showContent7} onMouseLeave={hideContent7} >
//         <div className="items_1"> Make Up
//             <div className="items_2">
//                 <div className="items_3"> Face</div>  
//                 <div className="items_3"> Eyes</div>  
//                 <div className="items_3"> Lips</div>  
//                 <div className="items_3"> Nails</div>  
//             </div>
//         </div>
//         <div className="items_1">Wellness
//             <div className="items_2">
//                 <div className="items_3">Sanitizers</div>  
//                 <div className="items_3"> Oral Care</div>  
//                 <div className="items_3"> Feminine Hygiene</div>    
//             </div>
//         </div>
//         <div className="items_1"> Skincare
//             <div className="items_2">
//                 <div className="items_3"> Deodorants</div>     
//             </div>
//         </div>
//     </div>
// }
// {display8 &&
//     <div className="items"  onMouseEnter={showContent8} onMouseLeave={hideContent8} >
//         <div className="items_1">Jewellery
//             <div className="items_2">
//                 <div className="items_3"> Jewellery Set</div>  
//                 <div className="items_3"> Earings</div>  
//                 <div className="items_3"> Mangalsutras</div>  
//                 <div className="items_3"> Studs</div>  
//                 <div className="items_3"> Bangles</div>  
//                 <div className="items_3"> Necklaces</div>  
//                 <div className="items_3"> Rings</div>  
//                 <div className="items_3"> Anklets</div>  
//             </div>
//         </div>
//         <div className="items_1">Women Accessory
//             <div className="items_2">
//                 <div className="items_3">Bags</div>  
//                 <div className="items_3"> Watches </div>  
//                 <div className="items_3"> Hair Accessories</div>    
//                 <div className="items_3"> Sunglasses</div>    
//                 <div className="items_3"> Socks</div>    
//             </div>
//         </div>
//     </div>
// }
// {display9 &&
//     <div className="items"  onMouseEnter={showContent9} onMouseLeave={hideContent9} >
//         <div className="items_1">Women Bags
//             <div className="items_2">
//                 <div className="items_3"> All Women Bags</div>  
//                 <div className="items_3"> Handbags</div>  
//                 <div className="items_3"> Clutches</div>  
//                 <div className="items_3"> Slingbags</div>  
//             </div>
//         </div>
//         <div className="items_1">Men Bags
//             <div className="items_2">
//                 <div className="items_3">All Men Bags</div>  
//                 <div className="items_3"> Men Wallets</div>    
//             </div>
//         </div>
//         <div className="items_1"> Men Footwear
//             <div className="items_2">
//                 <div className="items_3"> Sports Shoes</div>     
//                 <div className="items_3"> Casual Shoes</div>     
//                 <div className="items_3"> Formal Shoes</div>     
//                 <div className="items_3"> Sandals</div>     
//             </div>
//         </div>
//         <div className="items_1">Women Footwear
//             <div className="items_2">
//                 <div className="items_3">Flats</div>  
//                 <div className="items_3">Bellies</div>    
//                 <div className="items_3">Juttis</div>    
//             </div>
//         </div>
//     </div>
// }
// {display10 &&
//     <div className="items"  onMouseEnter={showContent10} onMouseLeave={hideContent10} >
//         <div className="items_1"> Mobile & Accessories
//             <div className="items_2">
//                 <div className="items_3"> All Mobile & Accessories</div>  
//                 <div className="items_3"> Smartwatches</div>  
//                 <div className="items_3"> Mobile Holders</div>  
//                 <div className="items_3"> Mobile cases and covers</div>  
//             </div>
//         </div>
//         <div className="items_1"> Appliances
//             <div className="items_2">
//                 <div className="items_3">All Appliances</div>  
//                 <div className="items_3"> Grooming</div>  
//                 <div className="items_3"> Home Appliances</div>    
//             </div>
//         </div>
//     </div>
// }
