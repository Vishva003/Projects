import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Container.css'
import { CiSearch } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Container = () => {


  const [selectedValue, setSelectedValue] = useState('');
  const [checkedItems, setCheckedItems] = useState({});
  const [display, setdisplay] = useState(false)
  const [products, setproducts] = useState([])
  function handledisplay() {
    setdisplay(!display);
  }
  const items = ['Analog Watches',
    'Bangles & Bracelets',
    ' Bedsheets',
    ' Bike Covers',
    ' Blouses',
    'Bluetooth Headphones',
    'Bra',
    'Car Covers',
    'Cups & Mugs',
    'Dresses',
    'Dupatta Sets',
    'Dupattas',
    'Earrings & Studs',
    'Flipflops & Slippers',
    'Gowns',
    ' Hair Oil',
    'Handbags',
    'Idols & Figurines',
    'Jeans',
    'Jewellery Set',
    'Kitchen Storage',
    'Kitchen Tools',
    ' Kurta Sets',
    'Kurtis',
    'Lehengas',
    'Lipsticks',
    'Lunchbox & Bottles',
    'Mangalsutras',
    'Men Jewellery',
    'Mobile Accessories',
    ' Mobile Cases & Covers',
    'Motorcycle Covers',
    'Nighties',
    'Panty',
    'Pendants & Lockets',
    'Puja Articles',
    'Rings',
    'Sarees',
    'Shirts',
    'Shoes',
    'Shorts',
    'Socks',
    'Suits & Dress Materials',
    'Sunglasses',
    'Sweater and Sweatshirts',
    ' T-shirts',
    'Tops and Bottom sets',
    'Tops And Tunics',
    'Wall Stickers & Murals',
    'Women Lehengas'];
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCheck = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  useEffect(() => {
    axios.get('http://localhost:3000/storedetials')
      .then((response) => {
        setproducts(response.data)
        console.log(response.data)
      })
      .catch((res) => {
        console.log(res)
      })
  })



  return (
    <>
      <div className="container_items">
        <div className="left_items">
          <div className="products_head">Products For You</div>
          <div className="sort_by">
            <select value={selectedValue} onChange={handleChange}>
              <option value="" disabled>
                Sort By : {selectedValue || ''}
              </option>
              <option value="Relevance">Relevance</option>
              <option value="New Arrivals">New Arrivals</option>
              <option value="Price (High To Low)">Price (High To Low)</option>
              <option value="Price (Low To High)">Price (Low To High)</option>
              <option value="Ratings">Ratings</option>
              <option value="Discount">Discount</option>
            </select>
          </div>
          <div className="filters">
            <div className="filter_name">FILTERS</div>
            <div className="filter_items">1000+ Products</div>
          </div>
          <div className="category">
            <div className="catg_name" onClick={handledisplay}>Category</div>
            {display &&
              <div className="catg_items">
                <div className="search_inp">
                  <span><CiSearch className='search_icon' /></span>
                  <input type="search" placeholder='search' ></input>
                </div>
                {items.map((item) => (
                  <div className="label_data">
                    <label key={item} style={{ color: checkedItems[item] ? 'blue' : '' }}>
                      <input
                        type="checkbox"
                        name={item}
                        checked={checkedItems[item]}
                        onChange={handleCheck}
                      />
                      {item}
                    </label>
                  </div>
                ))}
              </div>


            }
          </div>
        </div>
        <div className="right_items">
          {
            products.map((product) => {
              return (
                <div className="product_item1" key={product.id}>
                  <div className="productimg">
                    <img src={product.image} alt="" height={"100%"} width={"100%"} />
                  </div>
                  <div className="product_detials">
                    <div className="product_name"> {product.name}</div>
                    <div className="productprice">
                      ₹  {product.price} <span className="onwards">onwards</span>
                    </div>
                    <div className="onwards">Free Delivery</div>
                    <div className="productrating">
                      <span className='spa'> {product.rating}
                        <AiFillStar className='ratstr' />
                      </span>
                      
                    </div>
                  </div>
                  <Link to={`/cart`}>devv</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Container;