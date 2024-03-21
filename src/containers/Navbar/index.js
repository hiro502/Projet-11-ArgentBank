import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/argentBankLogo.png';
import NavToggle from '../../components/NavToggle';
import './style.css';

const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavToggle />
    </nav>
  );
}

export default Navbar;
