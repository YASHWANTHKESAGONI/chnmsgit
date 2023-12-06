// src/pages/Userpage.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../HomePage/components/Logo';

const Userpage = () => {

  const { token, role, setToken, setRole } = useAuth();
  const navigate = useNavigate();
 console.log("in userpage"+token+" "+role)
//  localStorage.setItem('token',token)
//  localStorage.setItem('role',role);
 useEffect(() => {
    // Use useEffect to conditionally navigate when the component mounts
     const lr=localStorage.getItem('lr')
     const lt=localStorage.getItem('lt')
     console.log("in userpage"+lr+" "+lt)
    if (lr !== 'student' || !lt) {
      navigate('/login');
    }
  }, [role, token, navigate]);

  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLabname,setSelectedLabname]=useState('')
  const [selectedExplainissue,setSlectedExplainissue]=useState('')
  const handleLogout = () => {
    // Perform any additional cleanup or API calls if needed
    setToken(null);
    setRole(null);
    localStorage.removeItem('lr',role)
    localStorage.removeItem('lt',token)
    navigate('/login');
  };

  const handleChangePassword = () => {
    // Handle change password logic, navigate to change password page
    console.log('Navigate to Change Password');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send selectedBranch, selectedBlock, and selectedCategory to the server
    console.log('Selected Branch:', selectedBranch);
    console.log('Selected Block:', selectedBlock);
    console.log('Selected Category:', selectedCategory);
    console.log('Selected LabName:',selectedLabname)
     console.log('Selected ExplainIssue',selectedExplainissue)
      console.log("in userpage"+token+" "+role)
    // Assuming you have an API endpoint for raising an issue
    axios.post('http://localhost:4500/raiseanissue', {
    branch: selectedBranch,
    block: selectedBlock,
    category: selectedCategory,
    labname:selectedLabname,
    explainissue:selectedExplainissue
  }, {
    headers: {
      'x-token': token,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.data)
    .then((data) => {
      console.log('Issue raised successfully:', data);
    })
    .catch((error) => {
      console.error('Error raising issue:', error);
    });
  };

  return (
    <div>
      <Logo/>
      <nav className='navbar'>
        <ul>
          <li onClick={handleLogout}>Logout</li>
          <Link to='/changepassword'>Change Password</Link>
          <li>  <Link to='/pastissue'>  Past Issue   </Link> </li>
        </ul>
      </nav>
      
      <div className='user-container'>
        <h2>Raise an issue</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Branch:
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              <option value="IT">Branch IT</option>
              <option value="CSE">Branch CSE</option>
              <option value="MECH">Branch MECH</option>
              <option value="AIDS">Branch AIDS</option>
            </select>
          </label>
          <label>
            Block:
            <select
              value={selectedBlock}
              onChange={(e) => setSelectedBlock(e.target.value)}
            >
              <option value="">Select Block</option>
              <option value="L">Block L</option>
              <option value="A">Block A</option>
              <option value="B">Block B</option>
              <option value="K">Block K</option>
            </select>
          </label>
          <label>
            Category:
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Category3">Category 3</option>
              <option value="Category4">Category 4</option>
            </select>
          </label>
          <label>
  LabName:
  <input
    type="text"
    value={selectedLabname}
    onChange={(e) => setSelectedLabname(e.target.value)}
    placeholder="Enter LabName"
  />
</label>

<label>
  Explain Issue:
  <input
    type="text"
    value={selectedExplainissue}
    onChange={(e) => setSlectedExplainissue(e.target.value)}
    placeholder="Explain the issue"
  />
</label>

 
          <button type="submit">Submit</button>
        </form>
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f0f0f0;
        }

        .navbar {
          background-color: #385529;
          padding: 10px;
          border-bottom: 5px solid #a16b15; 
          animation: fadeIn 0.5s ease-in-out;
        }

        .navbar ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end;
        }

        .navbar li {
          margin-right: 20px;
          color: #fff;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .navbar li:hover {
          color: #a16b15;
        }

        .user-container {
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

export default Userpage;
