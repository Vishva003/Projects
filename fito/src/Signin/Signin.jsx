import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BiRefresh } from "react-icons/bi";
import './Signin.css';


const Signin = ({setIsSignedIn,setUserDetails}) => {

  const [datas,setDatas]=useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [isRotating, setIsRotating] = useState(false);
  const data = datas.find((user) => user.username === username && user.password === password);
  const navigate =useNavigate()


 useEffect(()=>{
    axios.get('  http://localhost:3000/user')
    .then((response)=>{
        setDatas(response.data)
    })
 })
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(result);
  };
  const handleRefreshClick = () => {
    setIsRotating(true);
    generateCaptcha();
    setTimeout(() => setIsRotating(false), 1000);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCaptchaInputChange = (event) => {
    setCaptchaInput(event.target.value);
  };

  const handleSignInSubmit =  (event) => {
    event.preventDefault();
    if (captchaInput !== captcha) {
      alert('Invalid captcha');
      return;
    }
    if(data){
        alert('The given data is valid');
        // Sign in successful
        setIsSignedIn(true);
        setUserDetails(data)
        navigate("/")

    }
    else {
        alert('Invalid username or password');
        // Sign in failed
      }
  
    
  };
  

 return (
    <div>
      
      <form onSubmit={handleSignInSubmit}>
       <h2>SIGN IN</h2>
        <label htmlFor="username">UsernName :   
        <input placeholder='username' type="text" id="username" value={username} onChange={handleUsernameChange} required/>
        </label>
        <br />
        <label htmlFor="password">Password :   
        <input placeholder='password' type="password" id="password" value={password} onChange={handlePasswordChange} required/>
        </label>
        <br />
        {captcha && (
          <>
            <label htmlFor="captcha">Captcha :   
            <input placeholder='enter captcha' type="text" id="captcha" value={captchaInput} onChange={handleCaptchaInputChange} required />
            </label>
            <br />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className='_captcha'>{captcha}</div>
            <button  type="button" onClick={handleRefreshClick} style={{height:"20px",width:"20px"}}>
              <BiRefresh className={`_refreshicon ${isRotating ? 'rotate' : ''}`} />
            </button>
            </div>
            <br />
            
          </>
        )}
        <button type="submit" className='signinbtn'>Sign In</button><br />
      <a  href='http://localhost:3001/signup'>NewUser/Signup</a>
      </form>
    </div>
  );
};

export default Signin;
