import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import styles from "./ProductSupply.module.css";
// import productImage1 from "../../Assests/Images/imageproduct.jpg";
import newProductShow from "../../Assests/Images/imageproduct22.jpeg";
// import productImage2 from "../../Assests/Images/imageproduct.jpg";
// import productImage3 from "../../Assests/Images/imageproduct.jpg";

import product1 from "../../Assests/Images/product1.png";
import product2 from "../../Assests/Images/product2.png";
import product3 from "../../Assests/Images/product3.png";
import product4 from "../../Assests/Images/product4.png";
import product5 from "../../Assests/Images/product5.png";
import product6 from "../../Assests/Images/product6.png";
import product7 from "../../Assests/Images/product7.png";
import product8 from "../../Assests/Images/product8.png";
import product9 from "../../Assests/Images/product9.png";
import Star from "../../Assests/icons/starRating.svg";
import heartIcon from "../../Assests/icons/white-heart.svg";
import arrowleft from "../../Assests/icons/leftArrow.svg";
import arrowright from "../../Assests/icons/rightArrow.svg";

// import industrialImg from "../../assets/industrial_tools.png";
// import logisticsImg from "../../assets/logistics_transport.png";
// import riggingImg from "../../assets/lifting_rigging.png";
// import rotaryImg from "../../assets/rotary_equipment.png";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 3000, min: 0 }, items: 1 },
  desktop: { breakpoint: { max: 2000, min: 0 }, items: 1 },
  tablet: { breakpoint: { max: 1400, min: 0 }, items: 1 },
  mobile: { breakpoint: { max: 940, min: 0 }, items: 1 },
  small: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#000000",
  cursor: "pointer",
};

const CustomRight = ({ onClick }) => (
  <button className={styles.arrowRight} onClick={onClick} style={arrowStyle}>
    <img src={arrowright} alt="Right Arrow" />
  </button>
);

const CustomLeft = ({ onClick }) => (
  <button className={styles.arrowLeft} onClick={onClick} style={arrowStyle}>
    <img src={arrowleft} alt="Left Arrow" />
  </button>
);

export default function ProductSupply({ heading, paraContent }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Safety & PPE",
      content: [
        {
          heading: "Personal Protective Equipment (PPE):",
          description:
            "Protect your team with our comprehensive range of high-quality PPE, from gloves to respiratory gear, designed for safety in any environment.",
          image: product1,
        },
      ],
    },
    {
      title: "Industrial Tools & Machinery",
      content: [
        {
          heading: "Industrial Tools & Contractor Equipment:",
          description:
            "Access a wide selection of reliable industrial tools and contractor equipment, tailored to meet the demands of heavy-duty operations.",
          image: product2,
        },
      ],
    },
    {
      title: "Logistics & Transport",
      content: [
        {
          heading: "Machinery & Vehicles:",
          description:
            "We provide durable machinery and vehicles to enhance productivity, from site-ready equipment to specialized transport solutions.",
          image: product3,
        },
        {
          heading: "Lifting & Rigging:",
          description:
            "Our robust lifting and rigging equipment ensures safe, reliable handling of heavy loads, meeting the highest safety and efficiency standards.",
          image: product4,
        },
        {
          heading: "Rotary Equipment:",
          description:
            "Durable, high-performance rotary equipment solutions that drive productivity across complex mechanical operations.",
          image: product5,
        },
      ],
    },
    {
      title: "Infrastructure & Utilities",
      content: [
        {
          heading: "Electrical & Lighting:",
          description:
            "Illuminate and power your operations with dependable electrical and lighting solutions, tailored for industrial environments.",
          image: product6,
        },
        {
          heading: "Industrial Valves:",
          description:
            "Precision-engineered industrial valves for effective control and regulation across diverse fluid and gas applications.",
          image: product7,
        },
      ],
    },
    {
      title: "Environmental & Maintenance",
      content: [
        {
          heading: "Water Treatment Equipment:",
          description:
            "Ensure water quality with our advanced water treatment solutions, designed for efficiency in industrial and environmental applications.",
          image: product8,
        },
        {
          heading: "Cleaning & Hygiene Supplies:",
          description:
            "Maintain a clean, safe workspace with our full line of cleaning and hygiene products, essential for operational health standards.",
          image: product9,
        },
      ],
    },
  ];

  return (
    <div className={styles.productSupplySection}>
      <div className={styles.container}>
        {/* <div className={styles.header}>
          <h2 className={styles.heading}>Product & Supply</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
        <div className={styles.heroSection}>
        <div
            className={styles.heroTechBackground}
            style={{ backgroundImage: `url(${newProductShow})` }}
          >
            <div className={styles.heroTechOverlay}>
              <div className={styles.overlaySection}>
                <div className={styles.heroTechTitle}>Product and Supply
                </div>
                {/* <div className={styles.heroTechSubtitle}>
                hero Procurement & Logistics, Redefined for Your Industry
              </div> */}
                <div className={styles.heroTechText}>
                We provide durable machinery and vehicles to enhance productivity, from site-ready equipment to specialized transport solutions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secondSection}>
          {/* <div className={styles.ratingSection}>
            <div className={styles.topRow}>
              <div className={styles.rating}>
                <img className={styles.star} src={Star} alt="" />
                <span className={styles.ratingValue}>4.5</span>
              </div>

              <button className={styles.heartButton}>
                <div className={styles.heartIcon}>
                  <img src={heartIcon} alt="" />
                </div>
              </button>
            </div>
            <div>
              <span className={styles.reviews}>236 Reviews</span>
            </div>
          </div> */}

          {/* <div className={styles.card}>
            <div className={styles.Section_heading}>Product and Supply</div>
            <div className={styles.paraContent}>
              We provide durable machinery and vehicles to enhance productivity,
              from site-ready equipment to specialized transport solutions.
            </div>
          </div> */}
          <hr />

          <div
            className={`accordion ${styles.accordion}`}
            id="accordionExample"
          >
            {sections.map((section, index) => (
              <div key={index} className={styles.accordionItem}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${
                      index === 0 ? "" : "collapsed"
                    } ${styles.accordionHeader}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {section.title}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {section.content.map((item, idx) => (
                      <div
                        key={idx}
                        className={`${styles.accordionDetails} ${
                          section.content.length === 1 || idx % 2 === 0
                            ? styles.contentLeft
                            : styles.contentRight
                        } ${
                          idx % 2 === 0
                            ? styles.largeContent
                            : styles.largeImage
                        }`}
                      >
                        <div className={styles.textContent}>
                          <h3 className={styles.accordionHeading}>
                            {item.heading}
                          </h3>
                          <p className={styles.accordionText}>
                            {item.description}
                          </p>
                        </div>
                        <div className={styles.imageContainer}>
                          <img src={item.image} alt={item.heading} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
