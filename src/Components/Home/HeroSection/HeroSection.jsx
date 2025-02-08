import React from "react";
import { Button } from 'react-bootstrap';
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1 className={styles.heading}>
            Trusted global leader in procurement, supply chain management, and logistics
          </h1>
          <div className={styles.buttons}>
            <Button className={styles.btn}>Our Services</Button>
            <Button className={styles.btn}>Contact Now</Button>
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
