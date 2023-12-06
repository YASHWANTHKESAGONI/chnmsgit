// // ChangePassword.js
// import { useAuth } from '../context/AuthContext';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Logo from '../HomePage/components/Logo';
// const ChangePassword = () => {
//     const { token,role,setToken,setRole } = useAuth();
//     const navigate = useNavigate();
//   const [password, setPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');


// useEffect(() => {
//     if ( !token) {
//       return navigate('/login');
//     }
//   }, [role, token, navigate]);

//   const handleChangePassword = async () => {
//     try {
//       if (newPassword !== confirmPassword) {
//         setError('Passwords do not match');
//         return;
//       }

//       const response = await axios.post(
//         'http://localhost:4500/changepassword',
//         {
//           newPassword
//         },
//         {
//           headers: {
//             'x-token': token,
//           },
//         }
//       );

//       console.log(response.data); // Log the response from the server
//     } catch (err) {
//       console.error('Error changing password:', err);
//       setError('Failed to change password');
//     }
//   };
//  const handleback=()=>{
//   navigate(-1)
//  }
//   return (
//     <div>
//       <Logo/>
//       <nav>
//         <div style={{ backgroundColor: "#385529", borderBottom: "5px solid #a16b15", padding: "10px", display: "flex", justifyContent: "space-between" }}>
//           <Link onClick={handleback}>Back</Link>
//         </div>
//       </nav>
//       <h2>Change Password</h2>
//       <div>
//         <label>Current Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <div>
//         <label>New Password:</label>
//         <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//       </div>
//       <div>
//         <label>Confirm Password:</label>
//         <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button onClick={handleChangePassword}>Change Password</button>
//     </div>
//   );
// };

// export default ChangePassword;

import { useAuth } from '../context/AuthContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../HomePage/components/Logo';
import './Changepassword.css'; // Import the CSS file

const ChangePassword = () => {
  const { token, role, setToken, setRole } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      return navigate('/login');
    }
  }, [role, token, navigate]);

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await axios.post(
        'http://localhost:4500/changepassword',
        {
          newPassword,
        },
        {
          headers: {
            'x-token': token,
          },
        }
      );

      console.log(response.data); // Log the response from the server
    } catch (err) {
      console.error('Error changing password:', err);
      setError('Failed to change password');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="change-password-container">
      <Logo />
      <nav>
        <div className="nav-bar">
          <Link className="back-link" onClick={handleBack}>
            Back
          </Link>
        </div>
      </nav>
      <h2>Change Password</h2>
      <div className="form-group">
        <label>Current Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="change-password-btn" onClick={handleChangePassword}>
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
