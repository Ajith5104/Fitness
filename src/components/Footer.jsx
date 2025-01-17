import React from 'react';

const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer">
      <div className="social">
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i class='bx bxl-whatsapp'></i>
        </a>
      </div>

      <p className="copyright">
        &copy; Shyam Fitness {year.getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
