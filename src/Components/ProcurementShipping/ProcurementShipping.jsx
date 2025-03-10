import React from "react";
import styles from "./ProcurementShipping.module.css";
import { Button } from "react-bootstrap";
// import Seamlessbg from "../../Assests/Images/Seamlessbg.png";
import globalTechbg from "../../Assests/Images/hyprocAboutbg.png";

function ProcurementShipping() {
  return (
    <div>
      <div>
        <section className={styles.SeamlessSectionContainer}>
          <div className={styles.SeamlessOverviewSection}>
            <div
              className={styles.SeamlessBackground}
              style={{ backgroundImage: `url(${globalTechbg})` }}
            >
              <div className={styles.SeamlessOverlay}>
                <div className={styles.overlaySection}>
                  <div className={styles.SeamlessTitle}>
                    Seamless Global Procurement & Logistics Solutions
                  </div>
                  {/* <div className={styles.SeamlessSubtitle}>
                Global Procurement & Logistics, Redefined for Your Industry
              </div> */}
                  <div className={styles.SeamlessText}>
                    At Hyproc International, we simplify procurement and
                    shipping, ensuring efficiency, cost control, and reliability
                    at every stage. Our expertise allows you to focus on your
                    core operations while we manage the complexities of sourcing
                    and logistics.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.excellenceSection}>
          <section className={styles.excellenceContainer}>
            <div className={styles.header}>
              <h2 className={styles.heading}>Procurement Excellence</h2>
              <div className={styles.lines}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <p className={styles.excellenceDescription}>
              We source high-quality supplies and specialized equipment tailored
              to your business needs. Our approach prioritizes:
            </p>
            <div>
              <div className={styles.listSection}>
                <ul className={styles.list}>
                  <li>
                    <strong className={styles.bold}>✅ Cost Efficiency</strong> –
                    Competitive pricing through our extensive supplier network.
                  </li>
                  <li>
                    <strong className={styles.bold}>✅ Quality Assurance</strong> –
                    Stringent vetting and compliance with international
                    standards.
                  </li>
                  <li>
                    <strong className={styles.bold}>✅ Swift Turnaround</strong> –
                    Streamlined procurement processes to meet tight deadlines.
                  </li>
                </ul>
                <p className={styles.description}>
                  From essential consumables to complex machinery, we ensure
                  on-time, on-budget delivery without compromising on quality.
                </p>
                
              </div>
            </div>
          </section>
        </div>


        <div className={styles.expertiseSection}>
          <section className={styles.expertiseContainer}>
            <div className={styles.header}>
              <h2 className={styles.heading}>Global Shipping Expertise</h2>
              <div className={styles.lines}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <p className={styles.expertiseDescription}>
            Navigating international logistics can be challenging but with Hyproc International, it’s effortless. Our shipping solutions are:
            </p>
            <div>
              <div className={styles.expertiselistSection}>
                <ul className={styles.list}>
                  <li>
                    <strong className={styles.bold}>🚛 Flexible</strong> –
                    Air, sea, and land options customized for efficiency.
                  </li>
                  <li>
                    <strong className={styles.bold}>📦 Secure </strong> –
                    End-to-end tracking for full visibility.
                  </li>
                  <li>
                    <strong className={styles.bold}>🌎 Reliable</strong> –
                    Seamless delivery, even to remote locations.
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.expertiseDescription}>
            We handle all shipping logistics, including:
            </p>
            <div>
              <div className={styles.expertiselistSection}>
                <ul className={styles.list}>
                  <li class>
                    {/* <strong className={styles.bold}>Flexible</strong> – */}
                     ◽ Optimizing transport based on shipment size, weight, and destination.
                  </li>
                  <li>
                    {/* <strong className={styles.bold}>Secure</strong> – */}
                    ◽ Managing customs paperwork and Incoterms compliance to prevent delays.
                  </li>
                  <li>
                    {/* <strong className={styles.bold}>Reliable</strong> – */}
                    ◽ Coordinating with a global network of carriers to ensure safe, timely delivery
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.expertiseDescription}>
            With regular tracking updates, you stay informed at every stage from departure to final arrival.
            </p>
          </section>
        </div>


        <div className={styles.whySection}>
          <section className={styles.whyContainer}>
            <div className={styles.header}>
              <h2 className={styles.heading}>Why Partner with Hyproc International? </h2>
              <div className={styles.lines}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
           
            <div>
              <div className={styles.listSection}>
                <ul className={styles.list}>
                  <li>
                    <strong className={styles.bold}>🔹 End-to-End Supply Chain Expertise </strong> –
                    Procurement, logistics, and compliance all in one place. 

                  </li>
                  <li>
                    <strong className={styles.bold}>🔹 Proven Reliability </strong> –
                    Decades of experience delivering results across industries. 

                  </li>
                  <li>
                    <strong className={styles.bold}>🔹 Client-First Approach </strong> –
                    Personalized service with a dedicated account manager. 
                  </li>
                </ul>
                <h2 className={styles.optimize}>Let’s Optimize Your Supply Chain </h2>
                <p className={styles.optimizedescription}>

                 Looking for a procurement and logistics partner you can trust? <strong className={styles.bold}>Contact us today</strong> to discuss your shipping and supply needs. 
                </p>
                
              </div>
            </div>
          </section>
        </div>



      </div>
    </div>
  );
}

export default ProcurementShipping;
