// src/components/Navbar/Navbar.js

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartIcon from '../CartIcon/CartIcon.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">Khareedo</Link>
      <div className="navbar__links">
        <Link to="/men" className="navbar__link">Men</Link>
        <Link to="/women" className="navbar__link">Women</Link>
        <Link to="/children" className="navbar__link">Children</Link>
      </div>
      <div className="navbar-search">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="navbar__cart">
        <CartIcon />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
