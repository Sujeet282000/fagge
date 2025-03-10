import styles from "./Footer.module.css";
import linkedIn from "../../../Assests/icons/ic-link (1).svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.footer_container}>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <NavLink to="/" className={styles.link}>
              HOME
            </NavLink>
            <NavLink to="/about" className={styles.link}>
              ABOUT US
            </NavLink>
            <NavLink to="/global" className={styles.link}>
            GLOBAL TECH
            </NavLink>
            <NavLink to="/product" className={styles.link}>
              PRODUCT & SUPPLY
            </NavLink>
            <NavLink to="/procurement" className={styles.link}>
              PROCUREMENT & SHIPPING
            </NavLink>
            <NavLink to="/contact" className={styles.link}>
              CONTACT US
            </NavLink>
          </nav>
          <div className={styles.right}>
            <span className={styles.copy}>© 2025 Hyproc International</span>
          </div>
          <div className={styles.linkedIn}>
            <img src={linkedIn} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
