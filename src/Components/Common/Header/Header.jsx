import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import hyproclogo from "../../../Assests/Images/hyproclog0.png";
import hamnburgerIcon from "../../../Assests/icons/ic-hamburg.svg";
import hamnburgeCrossIcon from "../../../Assests/icons/ic-cross-white.svg";
import searchIcon from "../../../Assests/icons/searchIcon.svg";
import HeaderContentSection from "./HeaderContentSection";

import globalTechbg from "../../../Assests/Images/homebgimage.png";
import headerLogo from '../../../Assests/icons/headerLogo.svg'
import imagebg from '../../../Assests/Images/homePagebg.png'
import { Search } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMobileMenu && !event.target.closest(`.${styles.mobileMenu}`) && !event.target.closest(`.${styles.hamburger}`)) {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMobileMenu]);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      if (!isNowMobile) {
        setShowMobileMenu(false);
      } else {
        setShowMobileMenu(false);
      }
      setIsMobile(isNowMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const [bgImage, setBgImage] = useState(imagebg);

   // Function to update the background image when an image is clicked
   const handleImageClick = (newImage) => {
    // debugger
     setBgImage(newImage);
     console.log("Image clicked:", newImage);
   };

  return (
    <div className={styles.mainHeader} style={{ backgroundImage: `url(${bgImage})` , transition: "0.5s ease-in-out" }}>
        <div className={styles.mainHeaderOverlay}>
      <header className={`${isHomePage ? styles.otherHeader : styles.header_section}`}>
        <div className={styles.topBar}>
          {/* Left Section - Navigation & Search Icon */}
          <div className={styles.leftSection}>

          <div aria-label="Search">
          <Search className={styles.searchIcon} />
            </div>
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
                      GLOBAL TEAM
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

            {/* Search Icon */}
          
          </div>

          {/* Right Section - Logo */}
          <div className={styles.rightSection}>
            <h1 className={styles.logo}>
              <img src={headerLogo} alt="Hyproc Logo" />
            </h1>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <div className={styles.mobileHeader}>
            <button className={styles.hamburger} onClick={toggleMobileMenu}>
              <img src={hamnburgerIcon} alt="Menu" />
            </button>
            <h1 className={styles.logo}>
              <img src={hyproclogo} alt="Hyproc Logo" />
            </h1>
          </div>
        )}

        {showMobileMenu && isMobile && <div className={`${styles.overlay} ${showMobileMenu ? styles.show : ""}`}></div>}

        {isMobile && (
          <nav className={`${styles.mobileMenu} ${showMobileMenu ? styles.openMenu : ""}`}>
            <button className={styles.closeButton} onClick={toggleMobileMenu}>
              <img src={hamnburgeCrossIcon} alt="Close" />
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
                  GLOBAL TEAM
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
      {/* {isHomePage && <HeroSection isHomePage={isHomePage} />} */}
      <HeaderContentSection onImageClick={handleImageClick}  ></HeaderContentSection>
    </div>
    </div>
  );
};

export default Header;
