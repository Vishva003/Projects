import React, {useEffect, useState}from 'react'
import './Container.css'
import { AiFillStar } from "react-icons/ai";
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';


const Container = ({ product, handleAddProduct, search, handleCategory, handlePrice, sort, setProductCount,isSignedIn }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isSignedIn) {
      navigate('/signin');
    }
  }, [isSignedIn,navigate]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    handleCategory(event);
  }

  const handlePriceChange = (event) => {
    setSelectedPriceRange(event.target.value);
    handlePrice(event);
  }

  let filteredProducts = product.filter((item) => {
    let categoryMatch = selectedCategory === '' || item.category.toLowerCase() === selectedCategory;
    let priceMatch = true;
    if (selectedPriceRange) {
      let [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
      priceMatch = item.price >= minPrice && item.price <= maxPrice;
    }
    let searchMatch = search.toLowerCase() === '' || item.category.toLowerCase().includes(search);
    return categoryMatch && priceMatch && searchMatch;
  });

  if (sort === 'relevance') {
    // Sort by relevance
  } else if (sort === 'freeDelivery') {
    filteredProducts = filteredProducts.filter(item => item.delivery);
  } else if (sort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'costLowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'costHighToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Update product count
  useEffect(() => {
    if (setProductCount) {
      setProductCount(filteredProducts.length);
    }
  }, [filteredProducts.length, setProductCount]);
  

  return (
    <>
   
      <div className="container_items">
        <div className='left_items'>
          <Sidebar handleCategory={handleCategoryChange} handlePrice={handlePriceChange} className="sidebar"/>
        </div>
        <div className="right_items">
          {filteredProducts.map((product) => {
            return (
              <div className="product_item1" key={product.id} >
                <div className="productimg">
                  <img src={product.image} alt="image" className='productimg_1'/>
                </div>
                <div className="product_detials">
                  <div className="product_name"> {product.name}</div>
                  <div className="productprice">
                    ₹  {product.price} <span className="onwards">onwards</span>
                  </div>
                  <div className="onwards">Free Delivery</div>
                  <div className="productrating">
                    <div className='spa' style={{ backgroundColor: product.rating > 4.0 ? "green" : product.rating < 3.0 ? "red" : "orange" }}> {product.rating}
                      <AiFillStar className='ratstr' />
                    </div>
                    <button onClick={() => handleAddProduct(product)} className='addcart'>Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Container;
