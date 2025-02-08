
import { useState, useRef } from "react";
import {  NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Button } from 'react-bootstrap';
import hyproclogo from '../../../Assests/Images/hyproclog0.png';
import searchIcon from '../../../Assests/icons/searchIcon.svg';
import SidebarNavigation from './SidebarNavigation/SidebarNavigation';

const Header = () => {
  const [active, setActive] = useState("#home");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuClick = (menu) => {
    setActive(menu);
    if (menu === "#products") {
      setShowSidebar(true);
      // toggleDropdown()
    } else {
      setShowSidebar(false);
    }
  };

  const navigate = useNavigate();

  
  const toggleDropdown = () => {
     
      navigate('/product');
  };

  return (
    <header className={styles.header_section}>
      <div className={styles.topBar}>
        <h1 className={styles.logo}>
          <img src={hyproclogo} alt="Hyproc Logo" />
        </h1>
        
        <div className={styles.searchContainer}>
          <button className={styles.searchButton} aria-label="Submit search">
            <img src={searchIcon} alt="Search Icon" />
          </button>
          <input 
            type="search" 
            placeholder="Search our products" 
            className={styles.searchInput}
            aria-label="Search products"
          />
        </div>

        <div className={styles.authGroup}>
          <Button className={styles.btn}>Login</Button>
          <Button className={styles.btn}>Sign Up</Button>
        </div>
      </div>

      <nav className={styles.navBar} aria-label="Main navigation">
        <ul className={styles.navList}>
          <li><a href="/" onClick={() => handleMenuClick("#home")} className={`${styles.navLink} ${active === "#home" ? styles.navLinkActive : ""}`}>HOME</a></li>
          <li><a href="/" onClick={() => handleMenuClick("#about")} className={`${styles.navLink} ${active === "#about" ? styles.navLinkActive : ""}`}>ABOUT US</a></li>
          <li 
            onMouseEnter={() => setShowSidebar(true)}
            onMouseLeave={() => setShowSidebar(false)}
            onClick={toggleDropdown}
          >
            <a 
              href="/product" 
              onClick={() => handleMenuClick("#products")} 
              className={`${styles.navLink} ${active === "#products" ? styles.navLinkActive : ""}`}
            >
              PRODUCT & SUPPLY
            </a>

            {/* Sidebar Navigation - Absolute Position */}
            {showSidebar && (
              <div className={styles.sidebarContainer}>
                <SidebarNavigation />
              </div>
            )}
          </li>
          <li><a href="/" onClick={() => handleMenuClick("#procurement")} className={`${styles.navLink} ${active === "#procurement" ? styles.navLinkActive : ""}`}>PROCUREMENT & SHIPPING</a></li>
          <li><a href="/" onClick={() => handleMenuClick("#contact")} className={`${styles.navLink} ${active === "#contact" ? styles.navLinkActive : ""}`}>CONTACT US</a></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
