// src/components/LoginPage.js
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Navbar from "../HomePage/components/Navbar";
import Logo from '../HomePage/components/Logo'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const{token,role,setToken,setRole}=useAuth()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Use the effect to perform actions after state updates
    if (role) {
      // Perform any other actions you need after the role is updated
      console.log("in login page")
      console.log(token);
      console.log(role);
      console.log("in localstroga",role,token)
      localStorage.setItem('lr',role);
      localStorage.setItem('lt',token)
      switch (role) {
        case "student":
          navigate("/userpage");
          break;
        case "technician":
          navigate("/technician");
          break;
        case "admin":
          navigate("/adminpage");
          break;
        default:
          console.error("Unknown user role.");
      }
    }
  }, [role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the server
      const response = await axios.post(
        "http://localhost:4500/login",
        formData
      );

      // Update the state with the received token and role
      setToken(response.data.token);
      setRole(response.data.role);
      
    } catch (error) {
      // Handle login error
      console.error("Error logging in:", error);
    }
  };

  return (

    <div>
      <Logo/>
      <Navbar/>
      {/* <nav>
        {/* <div style={{ backgroundColor: "#385529", borderBottom: "5px solid #a16b15", padding: "10px", display: "flex", justifyContent: "space-between"  }}>
        <Link to="/">  Home  </Link>  
        </div>
      </nav> */} 
      <h2>Login Page</h2>
      <div className="login-container">

  
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
        <button type="submit">Login</button>
      </form>
    </div>
    <style>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f0f0f0;
        }

        .login-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          animation: fadeIn 0.5s ease-in-out;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 8px;
        }

        input {
          padding: 8px;
          margin-bottom: 16px;
        }

        button {
          background-color: #385529;
          color: #fff;
          padding: 10px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #a16b15;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    
  );
};

export default LoginPage;
