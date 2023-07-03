import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const[datas,setDatas]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/user')
        .then((response)=>{
            setDatas(response.data)
        })
     })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');

        } 
        if(datas.some((data)=> data.username==formData.username || data.email==formData.email ||data.phone==formData.phone)){
            alert('User already exists');
        }
        else {
            axios.post('http://localhost:4000/user', formData)
                .then((res) => {
                    console.log(res)
                })
                .catch((res) => {
                    console.log(res)
                 });
                  
            navigate("/Signin")
        }

    };

    return (
        <form onSubmit={handleSubmit}>
           
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Confirm Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupPage;
