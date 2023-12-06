import React from 'react';
import './Foot.css'
const Foot = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Your Foot Content Goes Here</span>
      </div>
    <div>
      <div className="footer">
        <div id="arrow" className="arrow up-arrow"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <div className="footer_address">
                <h1>Address</h1>
                <p>123 Main Street, Cityville, Country</p>
              </div>
              
              <div className="footer_links">
                <ul>
                    <h1>Useful Links</h1>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/team">Our Team</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer_social">
                <h1>Follow Us:</h1>
                <div className="social_icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    {/* <FontAwesomeIcon icon={faInstagram} /> */}
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>

    </footer>
  );
};

export default Foot;
