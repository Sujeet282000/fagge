import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import hyproclogo from "../../../Assests/Images/hyproclog0.png";
import hamnburgerIcon from "../../../Assests/icons/ic-hamburg.svg";
import hamnburgeCrossIcon from "../../../Assests/icons/ic-cross-white.svg";
import searchIcon from "../../../Assests/icons/searchIcon.svg";

const Header = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Detect click outside the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMobileMenu && !event.target.closest(`.${styles.mobileMenu}`) && !event.target.closest(`.${styles.hamburger}`)) {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMobileMenu]);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      
      if (!isNowMobile) {
        setShowMobileMenu(false); // Close menu when switching to tablet/desktop
      } else {
        setShowMobileMenu(false); // Ensure it remains closed when resizing back to mobile
      }
  
      setIsMobile(isNowMobile);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  


  return (
    <header className={styles.header_section}>
      <div className={styles.topBar}>



{/*   for desktopand tab */}
      {!isMobile && (
        <h1 className={styles.logo}>
          <img src={hyproclogo} alt="Hyproc Logo"/>
        </h1>
          )}


{/* for mobile */}
        {isMobile && (
        <div className={styles.logoWithHamburger}>
          <h1 className={styles.logo}>
            <img src={hyproclogo} alt="Hyproc Logo"/>
          </h1>

          {/* Show hamburger only on mobile and when menu is closed */}
          {isMobile && !showMobileMenu && (
            <button className={styles.hamburger} onClick={toggleMobileMenu}>
              <img  src={hamnburgerIcon} alt="" />
            </button>
          )}
        </div>
          )}

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


      </div>

      {showMobileMenu &&  isMobile && <div className={`${styles.overlay} ${showMobileMenu ? styles.show : ""}`}></div>}

      {/* Desktop/Tablet Navigation */}
      {!isMobile && (
        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={location.pathname === "/" ? styles.navLinkActive : styles.navLink}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={location.pathname === "/about" ? styles.navLinkActive : styles.navLink}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/global" className={location.pathname === "/global" ? styles.navLinkActive : styles.navLink}>
                GLOBAL TECH
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className={location.pathname === "/product" ? styles.navLinkActive : styles.navLink}>
                PRODUCT & SUPPLY
              </NavLink>
            </li>
            <li>
              <NavLink to="/procurement" className={location.pathname === "/procurement" ? styles.navLinkActive : styles.navLink}>
                PROCUREMENT & SHIPPING
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={location.pathname === "/contact" ? styles.navLinkActive : styles.navLink}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <nav className={`${styles.mobileMenu} ${showMobileMenu ? styles.openMenu : ""}`}>
          <button className={styles.closeButton} onClick={toggleMobileMenu}>
            <img src={hamnburgeCrossIcon} alt="" />
          </button>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={location.pathname === "/" ? styles.navLinkActive : styles.navLink} onClick={toggleMobileMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={location.pathname === "/about" ? styles.navLinkActive : styles.navLink} onClick={toggleMobileMenu}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/global" className={location.pathname === "/global" ? styles.navLinkActive : styles.navLink} onClick={toggleMobileMenu}>
                GLOBAL TECH
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className={location.pathname === "/product" ? styles.navLinkActive : styles.navLink} onClick={toggleMobileMenu}>
                PRODUCT & SUPPLY
              </NavLink>
            </li>
            <li>
              <NavLink to="/procurement" className={location.pathname === "/procurement" ? styles.navLinkActive : styles.navLink} onClick={toggleMobileMenu}>
                PROCUREMENT & SHIPPING
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={location.pathname === "/contact" ? styles.navLinkActive : styles.navLink} onClick={toggleMobileMenu}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
