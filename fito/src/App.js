
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home/Home';



const App = () => {
 const [products,setproducts]=useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/storedetials')
      .then((response) => {
        setproducts(response.data)
       
      })
      .catch((res) => {
        console.log(res)
      })

      
  },[]);

  
  return (
    <>
       
      <Home product={products} />
       
    </>
  )
}

export default App;


