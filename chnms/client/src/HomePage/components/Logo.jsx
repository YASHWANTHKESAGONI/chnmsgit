import React from 'react';
import myImage from './unnamed.png'; // Import the image
import './Logo.css'; // Import the CSS file for styling

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={myImage} alt="This is the image" className="logo-image" />
     {/* // <p>This is the image</p> */}
    </div>
  );
};

export default Logo;
