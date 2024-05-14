import React, { useState } from "react";
import Card1 from "../components/organizma/Card1";
import Card2 from "../components/organizma/Card2";
import Card3 from "../components/organizma/Card3";
import Card4 from "../components/organizma/Card4";
import CommentSection from "../components/organizma/CommentSection"; 


import './HomeDemo.css'

const Landingpage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [<Card1 />, <Card2 />, <Card3 />, <Card4 />];

  const handleNavClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  return (
    <div className="landingpage">
      <div className="navbarcss">
        <ul className="nav justify-content-center nav-underline">
          <li className="nav-item">
            <a className="nav-link me-5" href="#" style={{ color: 'white', fontSize: 30 }} onClick={() => handleNavClick(0)}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-5" href="#" style={{ color: 'white', fontSize: 30 }} onClick={() => handleNavClick(1)}>Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-5" href="#" style={{ color: 'white', fontSize: 30 }} onClick={() => handleNavClick(2)}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-5" href="#" style={{ color: 'white', fontSize: 30 }} onClick={() => handleNavClick(3)}>Comments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-5" href="/login" style={{ color: 'white', fontSize: 30 }}>Login</a>
          </li>
        </ul>
      </div>

      <div>
      {pages[currentPage]}

      </div>

      <div className="navigation-buttons">
        <a className="navigations" onClick={handlePrevClick}>&#8249;</a>
        <a onClick={handleNextClick}>&#8250;</a>
      </div>

    </div>
  );
};

export default Landingpage;
