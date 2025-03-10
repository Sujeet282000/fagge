import React from "react";
import { Button } from 'react-bootstrap';
import styles from "./HeroSection.module.css";

import {  useNavigate } from 'react-router-dom';

export function HeroSection() {

  const navigate = useNavigate();

  const toggleDropdown = () => {
    navigate('/contact');
  }

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div>
            <div className={styles.heading}>
            Seamless Global Procurement & Logistics, Tailored for Your Success
            </div>
            <div className={styles.contentpart}>
            Delivering Reliable, Cost-Effective Solutions for Global Supply Chains
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={toggleDropdown} className={styles.bttn}>Get a Quote</button>
            {/* <Button className={styles.bttn}>Contact Now</Button> */}
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.stat}>
            <div className={styles.statValue}>$100 Million</div>
            <div className={styles.statDescription}>Overall Business Turnover</div>
          </div>
            <hr />
          <div className={styles.stat}>
            <div className={styles.statValue}>79 Offices</div>
            <div className={styles.statDescription}>Our Infrastructure</div>
          </div>
            <hr />
          <div className={styles.stat}>
            <div className={styles.statValue}>38 Countries</div>
            <div className={styles.statDescription}>Global Presence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
