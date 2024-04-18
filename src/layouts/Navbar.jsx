
import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import ExploreLogo from '../assets/ExploreLogo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Button  from '../components/Button';

export default function Navbar() {
  const location = useLocation();

  return (
    <header id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink to="/">
            <img src={ExploreLogo} className="logo" alt="Koshish Logo" />
          </NavLink>
          <button
            className="navbar-toggler ml-auto custom-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Home <HomeOutlinedIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/aboutus' ? 'active' : ''}`} to="/aboutus">
                  About Us <Groups2OutlinedIcon />
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/explore">
                  <div style={{ marginTop: '0.5rem', paddingLeft: '0.8rem', paddingRight: '2rem' }}>
                    <Button label="Start" c="login-btn" type="start" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
