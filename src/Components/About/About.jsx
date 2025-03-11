import React from "react";
import {  NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from "./About.module.css";
import aboutHyprocBack from "../../Assests/Images/hyprocAboutbg.png";
import mining from "../../Assests/Images/mining.png";
import manufacturing from "../../Assests/Images/manufacturing.png";
import Gas from "../../Assests/Images/Gas.png";
import ourValues1 from "../../Assests/icons/ourValues1.svg";
import ourValues2 from "../../Assests/icons/ourValues2.svg";
import ourValues3 from "../../Assests/icons/ourValues3.svg";
import ourValues4 from "../../Assests/icons/ourValues4.svg";
import offerNewImage from "../../Assests/Images/offerNewImage.png";
import newAboutPagebg from "../../Assests/Images/newAboutPagebg.png";
import { Button } from "react-bootstrap";


import worldMap from "../../Assests/Images/worldMap.jpg";
import globalPartner from "../../Assests/Images/globalPartner.png";

const valuesData = [
  {
    icon: ourValues1,
    title: "Commitment to Quality",
    description:
      "We uphold the highest standards in every product and service, ensuring consistent reliability and excellence.",
  },
  {
    icon: ourValues2,
    title: "Client-Centric Service",
    description:
      "We build long-term partnerships with a focus on personalized, results-driven solutions.",
  },
  {
    icon: ourValues3,
    title: "Transparency & Integrity",
    description:
      "We operate with honesty, accountability, and clear communication, fostering trust with every client and supplier.",
  },
  {
    icon: ourValues4,
    title: "Innovation in Supply Chain",
    description:
      "We continuously explore new technologies and strategies to enhance efficiency and cost savings.",
  },
];

const expertiseData = [
  {
    image: Gas,
    title: "Oil & Gas",
    description: "Procurement for high-stakes energy operations.",
  },
  {
    image: mining,
    title: "Mining",
    description: "Reliable supply solutions for challenging environments.",
  },
  {
    image: manufacturing,
    title: "Manufacturing",
    description: "Scalable sourcing for uninterrupted production.",
  },
];

function About() {

  const navigate = useNavigate();

  const toggleDropdown = () => {
    navigate('/contact');
};

  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.aboutOverviewSection}>
        <div
          className={styles.aboutBackground}
          style={{ backgroundImage: `url(${newAboutPagebg})` }}
        >
          <div className={styles.aboutOverlay}>
            <div className={styles.overlaySection}>
              <div className={styles.aboutTitle}>About Hyproc</div>
              <div className={styles.aboutSubtitle}>
                Global Procurement & Logistics, Redefined for Your Industry
              </div>
              <div className={styles.aboutText}>
                At Hyproc International, we don’t just manage supply chains we
                optimize them for success. With a global reach and local
                expertise, we provide tailored procurement and logistics
                solutions that keep industries moving forward. From oil & gas to
                manufacturing, utilities, and international aid, we deliver with
                precision, efficiency, and reliability.
              </div>
              <div className={styles.aboutText}>
                Whether sourcing critical equipment or streamlining global
                logistics, we simplify the complexities so you can focus on
                what matters most: growing your business.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whatWeOfferSection}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What we offer</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={styles.offerContainer}>
          {/* <h2 className={styles.offerHeading}>What we offer</h2> */}

          <div  className={`${styles.offerContent}`}>
            <div className={` ${styles.offerSection}`}>
              <h3 className={styles.offerSubheading}>
                Global Reach. Local Expertise.
              </h3>
              <p className={styles.offerText}>
                With an extensive supplier network spanning North America,
                Europe, the Middle East, Africa, and Asia, we ensure access to
                high quality products from industrial tools to specialized
                equipment. Our strategic partnerships guarantee competitive
                pricing and seamless delivery, wherever you operate.
              </p>
              <ul className={styles.offerList}>
                <li>🌍 Worldwide sourcing capabilities</li>
                <li>🤝 Trusted supplier partnerships</li>
                <li>🏭 Industry-specific solutions</li>
              </ul>
            </div>

            <div className={`${styles.offerSection}`}>
              <h3 className={styles.offerSubheading}>
                End-to-End Procurement Solutions
              </h3>
              <p className={styles.offerText}>
                We handle every stage of the procurement process from sourcing
                and purchasing to logistics and distribution so you can stay
                focused on your core business priorities.
              </p>
              <ul className={styles.offerList}>
                <li>
                 <strong>💰 Cost Efficiency:</strong> <span className={styles.leftAlign}>Optimize spending and
                  eliminate excess stockholding</span> 
                </li>
                <li>
                <strong>🚚 Reliable Distribution:</strong> <span className={styles.leftAlign}> Minimize delays and improve operational efficiency</span>
      
                </li>
                <li>
                ⚙️<span> <strong>Customized Supply Chain Management:</strong></span>
                 <span className={styles.leftAlign}> Solutions tailored to your industry’s unique demands</span>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className={styles.offerImageWrapper}>
            <img src={offerNewImage} alt="Offer" className={styles.offerImage} />
          </div> */}
        </div>
      </div>

      <div className={styles.industryExpertiseSection}>
        <section className={styles.expertiseSection}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Industry Expertise</h2>
            <div className={styles.lines}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p className={styles.description}>
            Our team brings deep industry knowledge across critical global
            sectors, ensuring precision, compliance, and efficiency in every
            transaction.
          </p>
          <div className={styles.expertiseList}>
            {expertiseData.map((item, index) => (
              <div key={index} className={styles.expertiseItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.textContent}>
                  <h3 className={styles.expertiseTitle}>{item.title}</h3>
                  <p className={styles.expertiseDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.ourValuesSection}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Values</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.valuesSection}>
          <div className={styles.valuesList}>
            {valuesData.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <span className={styles.icon}>
                  <img src={value.icon} alt="" />
                </span>
                <div className={styles.valueContent}>
                  <div className={styles.valueTitle}>{value.title}</div>
                  <div className={styles.valueDescription}>
                    {value.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.globalPartnerSection}>
        <section className={styles.globalPartnerContainer}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              A Global Partner. Committed to Excellence.
            </h2>
            {/* <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
          </div>
          {/* Global Partner Section */}
          <div className={styles.globalSection}>
            <div className={styles.globalContent}>
              <div className={styles.globalImageWrapper}>
                <img
                  src={globalPartner}
                  alt=""
                  className={styles.globalImage}
                />
              </div>
              <p className={styles.globalText}>
                At Hyproc International, we don’t just supply products we build
                solutions that drive efficiency, cost savings, and operational
                success. Whether handling small-scale orders or complex,
                large-scale projects, we deliver with precision and expertise.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className={styles.globalSection}>
            {/* <h2 className={styles.globalHeading}>Our Mission</h2> */}
            <div className={styles.header}>
              <h2 className={styles.heading}>Our Mission</h2>
              {/* <div className={styles.lines}>
                <div></div>
                <div></div>
                <div></div>
              </div> */}
            </div>
            <div className={styles.globalContent}>
              <p className={styles.globalText}>
                To simplify and optimize global supply chains, enhancing
                operational efficiency and driving sustainable growth through
                smart procurement, streamlined logistics, and tailored supply
                chain solutions.
              </p>
              <div className={styles.globalImageWrapper}>
                <img
                  src={worldMap}
                  alt="Global Reach"
                  className={styles.globalImage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.letsPartnerSection}>
        <section className={styles.letsPartnerContainer}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Let’s Partner for Success</h2>
            <div className={styles.lines}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p className={styles.letsdescription}>
            At Hyproc International, you gain more than just a supplier you gain
            a strategic partner dedicated to optimizing your supply chain and
            helping your business thrive.
          </p>

          <div>
            <div className={styles.authGroup}>
              <button onClick={toggleDropdown} className={styles.bttn}>Get a Quote</button>
              <button onClick={toggleDropdown} className={styles.bttn}>Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
