import React from "react";
import styles from "./GlobalTech.module.css";
import { Button } from "react-bootstrap";
import globalTechbg from "../../Assests/Images/newWorldMap.png";
import {  NavLink, useLocation, useNavigate } from 'react-router-dom';

function GlobalTech() {

  const navigate = useNavigate();

  const toggleDropdown = () => {
    navigate('/contact');
  }
  return (
    <div>
      <section className={styles.globalTechSectionContainer}>
        <div className={styles.globalTechOverviewSection}>
          <div
            className={styles.globalTechBackground}
            style={{ backgroundImage: `url(${globalTechbg})` }}
          >
            <div className={styles.globalTechOverlay}>
              <div className={styles.overlaySection}>
                <div className={styles.globalTechTitle}>Our Global Team </div>
                {/* <div className={styles.globalTechSubtitle}>
                Global Procurement & Logistics, Redefined for Your Industry
              </div> */}
                <div className={styles.globalTechText}>
                  Our team of experts combines years of experience in
                  procurement, logistics, and supply chain management. Led by
                  industry professionals, we bring a solutions-driven approach
                  to every client engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.ourAgentSection}>
        <section className={styles.ourAgentContainer}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Our agents, partners and offices are strategically located across various continents</h2>
            {/* <div className={styles.lines}>
              <div></div>
              <div></div>
              <div></div>
            </div> */}
          </div>
          <p className={styles.ourAgentDescription}>
          Hyproc International – Your global partner in procurement excellence Partner with us and experience streamlined global supply
          </p>

          <div>
            <div className={styles.authGroup}>
              <button onClick={toggleDropdown} className={styles.btn}>Contact Us</button>
              <button className={styles.btn}>Explore Our Services</button>
            </div>
          </div>
        </section>
      </div>

      
    </div>

    
  );
}

export default GlobalTech;
