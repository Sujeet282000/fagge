import React from "react";
import styles from './OverviewSection.module.css';
import { Button } from 'react-bootstrap';
import image from '../../../Assests/Images/image 2.png'

export function OverviewSection() {
  return (
    <section className={styles.Overview_section}>
      <div className={styles.Overview_container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Fast, Reliable Solutions for Procurement & Supply Chain Success</h2>
          {/* <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
        </div>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={image}
              alt="Oil"
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
            At Hyproc International, we simplify procurement and logistics to help your business grow. With over 25 years of expertise and a global supplier network, we deliver tailored, cost-effective solutions delivered on time, every time </p>
            <p className={styles.paragraph}>
            Whether you're scaling operations or optimizing your supply chain, our services adapt to your unique needs. Let us handle the complexity so you can focus on what matters most: your success.
            </p>
            <div className={styles.buttons}>
            <Button className={styles.btn}>Explore Our Services</Button>
            {/* <Button className={styles.btn}>Contact Now</Button> */}
          </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
