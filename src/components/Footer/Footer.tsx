import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lorem id dui placerat, nec dignissim urna sodales.</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Emergency Care</li>
            <li>Cardiology</li>
            <li>Orthopedics</li>
            <li>Radiology</li>
            <li>Maternity</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
