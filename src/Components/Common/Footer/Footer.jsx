import styles from "./Footer.module.css";
import linkedIn from "../../../Assests/icons/ic-link (1).svg";

export default function Footer() {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.footer_container}>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <a href="/" className={styles.link}>
              HOME
            </a>
            <a href="/about" className={styles.link}>
              ABOUT US
            </a>
            <a href="/products" className={styles.link}>
              PRODUCT & SUPPLY
            </a>
            <a href="/procurement" className={styles.link}>
              PROCUREMENT & SHIPPING
            </a>
            <a href="/contact" className={styles.link}>
              CONTACT US
            </a>
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
