import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
const navigation = useNavigate()

const myfn=()=>{
  navigation("/Signup")
}
  return (
   <>
      <button onClick={myfn}>hi</button>
   </>
  )
}

export default Home;