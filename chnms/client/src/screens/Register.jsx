// src/components/RegisterPage.js
//import { Jwt } from 'jsonwebtoken';
import axios from 'axios';
import Logo from '../HomePage/components/Logo';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { token, role, setToken, setRole } = useAuth();
  const navigate = useNavigate();
console.log(token +"  " +role)
useEffect(() => {
  if (role !== 'admin' || !token) {
    return navigate('/login');
  }
}, [role, token, navigate]);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student', // Default role
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,                                              
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the server
      const response = await axios.post('http://localhost:4500/register', formData);

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error registering user:', error);
    }
  };
  const handleLogout=()=>{
    setToken(null)
    setRole(null)
    navigate('/login')
  }

  return (
    <div>
      <Logo/>
      <nav className='navbar'>
        <ul>
       
          <li onClick={handleLogout} >  <Link> Logout  </Link></li>
     <li>    <Link to='/changepassword' >ChangePassword</Link> </li> 
       <li>  <Link to='/adminpage'>Complaints</Link> </li>
        </ul>
      </nav>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
          />
        </label>
        <br />
        <label>
          Role:
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="technician">Technician</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
