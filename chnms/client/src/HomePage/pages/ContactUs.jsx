import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const ContactUs = () => {
  return (
    <>
      <Logo/>
      <Navbar/>
  
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    
    
</>
  );
};

export default ContactUs;
