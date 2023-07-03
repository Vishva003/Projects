import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './Signin.css';


const Signin = () => {

  const [datas,setDatas]=useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const data = datas.find((user) => user.username === username && user.password === password);
  const navigate =useNavigate()
 useEffect(()=>{
    axios.get('http://localhost:4000/user')
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
        navigate("/")
    }
    else {
        alert('Invalid username or password');
        // Sign in failed
      }
  
    
  };

 return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignInSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} required/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
        <br />
        {captcha && (
          <>
            <span>{captcha}</span>
            <button type="button" onClick={generateCaptcha}>Refresh Captcha</button>
            <br />
            <label htmlFor="captcha">Enter Captcha:</label>
            <input type="text" id="captcha" value={captchaInput} onChange={handleCaptchaInputChange} required />
            <br />
          </>
        )}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
