import React from "react";
import styles from './OverviewSection.module.css';
import image from '../../../Assests/Images/image 2.png'

export function OverviewSection() {
  return (
    <section className={styles.Overview_section}>
      <div className={styles.Overview_container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Overview</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
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
            At Hyproc International Limited, we are a trusted global leader in procurement, supply chain management, and logistics, serving a wide range of industries including oil and gas, mining, manufacturing, international aid, and utilities. With an extensive network of reputable suppliers and strategic partners worldwide, we provide customized, end-to-end solutions that ensure seamless delivery and unparalleled service.
            </p>
            <p className={styles.paragraph}>
            Our proven track record, supported by decades of industry experience, has earned us credibility and a reputation for excellence in managing complex procurement challenges on a global scale. Whether you're looking for cost-effective sourcing or timely logistics, Hyproc International is your reliable partner for success in any region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
