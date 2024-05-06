
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true); // State for collapse

  const handleToggleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
    };  

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (scrollTop > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
    };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav style={{fontFamily: 'Gilroy Web, Arial, sans-serif' }} className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            simple hrm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded={isCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`}
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Applications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Consultancies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  User Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Resources
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className='btn' style={{backgroundColor: 'royal-blue',
               borderRadius: 40, outline:0, opacity:1, 
               fontWeight:500, fontSize: 13, letterSpacing: 2,  }}  type="submit" onClick={handleRegisterClick}>
                Register
              </button>
              <button className="btn" style={{backgroundColor: 'white-smoke', 
              borderRadius: 40, outline:0, opacity:1, 
              fontWeight:500, fontSize: 13, letterSpacing: 2, }} type="submit" onClick={handleLoginClick}>
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
