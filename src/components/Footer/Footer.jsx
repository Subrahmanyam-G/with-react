import React from 'react';
import { FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>Ganisetti Subrahmanyam</h4>
          <p>Technology Analyst | React Developer</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Me</h4>
          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 8106687158</span>
          </div>
        </div>
        <div className="footer-social">
          <h4>Follow Me</h4>
          <a href="https://www.linkedin.com/in/subrahmanyam-ganisetti?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_s_u_b_r_a_h_m_a_n_y_a_m_?igsh=MW5zNWJja2QwdHh1dA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {year} Ganisetti Subrahmanyam. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;