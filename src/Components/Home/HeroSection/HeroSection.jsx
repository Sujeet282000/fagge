import React from "react";
import styles from './HeroSection.module.css';

import heroBg from "../../../Assests/Images/herobg.png";

export function HeroSection() {
  return (
    <section className={styles.Overview_section}>
      <div className={styles.Overview_container}>
        <div className={styles.grid}>
          {/* Left: Text Content */}
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Fast, Reliable Solutions for Procurement & Supply Chain Success
            </h2>
            <p className={styles.paragraph}>
              At Hyproc International, we simplify procurement and logistics to help your business grow. With over 25 years of expertise and a global supplier network, we deliver tailored, cost-effective solutions delivered on time, every time.
            </p>
            <p className={styles.paragraph}>
              Whether you're scaling operations or optimizing your supply chain, our services adapt to your unique needs. Let us handle the complexity so you can focus on what matters most: your success.
            </p>
            <div className={styles.buttons}>
              <a href="/services" className={styles.btn}>Explore Our Services</a>
            </div>
          </div>

          {/* Right: Image */}
          <div className={styles.imageWrapper}>
            <img src={heroBg} alt="Containers" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
