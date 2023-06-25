import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [datas,setDatas]=useState([])
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((response)=>{
            setDatas(response.data)
        })
     })
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSignUpSubmit = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        
      }
        // Validation logic
      if (datas.some((user) => user.username === username )) {
        alert('Username already exists');
        
      }
      if(datas.some((user) =>  user.phoneNumber==phoneNumber)){
        alert('Phonenumber already exists');
      }
      if(datas.some((user) =>  user.email==email)){
        alert('Email Address already exists');
      }
      else{
        axios.post('http://localhost:3000/user', { username, name, phoneNumber, email, gender,password });
        // Sign up successful
        setUsername('');
        setName('');
        setPhoneNumber('');
        setEmail('');
        setGender('');
        setPassword('');
        setConfirmPassword('');

         navigate('/Signin')
      }
    
      
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          <br />
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="password">Create Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignUp;
  