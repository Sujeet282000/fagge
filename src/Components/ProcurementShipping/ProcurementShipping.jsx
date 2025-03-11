import React, { useRef, useEffect, useState } from "react";
import styles from "./ProcurementShipping.module.css";
import globalTechbg from "../../Assests/Images/hyprocAboutbg.png";
import shipping2 from "../../Assests/Images/shipping2.png";
import shipping3 from "../../Assests/Images/shipping3.png";
import { useNavigate } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrowleft from "../../Assests/icons/left-arr.svg";
import arrowright from "../../Assests/icons/right-arr.svg";

// Custom Navigation Arrows
const CustomRightArrow = ({ onClick }) => (
  <button className={styles.arrowRight} onClick={onClick}>
    <img src={arrowright} alt="Next" />
  </button>
);

const CustomLeftArrow = ({ onClick }) => (
  <button className={styles.arrowLeft} onClick={onClick}>
    <img src={arrowleft} alt="Previous" />
  </button>
);

// Responsive Settings
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
    partialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: 1250, min: 768 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

// Card Data with Additional Content
const initialCards  = [
  { title: "", description: "", bgImage: "" , bgColor: "#FFFFFF" },
  {
    title: "Seamless Global Procurement & Logistics Solutions",
    description:
      "At Hyproc International, we simplify procurement and shipping, ensuring efficiency, cost control, and reliability at every stage. Our expertise allows you to focus on your core operations while we manage the complexities of sourcing and logistics. ",
    highlights: [],
    bgImage: globalTechbg,
    bgColor: "rgb(89 0 0 / 76%)",
  },
  {
    title: "Procurement Excellence",
    description:
      "We source high-quality supplies and specialized equipment tailored to your business needs. Our approach prioritizes:",
    highlights: [
      {
        label: "Cost Efficiency",
        detail: "Competitive pricing through our extensive supplier network.",
      },
      {
        label: "Quality Assurance",
        detail:
          "Stringent vetting and compliance with international standards.",
      },
      {
        label: "Swift Turnaround",
        detail: "Streamlined procurement processes to meet tight deadlines.",
      },
    ],
    additionalContent: (
      <p className={styles.allDescription}>
        From essential consumables to complex machinery, we ensure on-time,
        on-budget delivery without compromising on quality.
      </p>
    ),
    bgImage: shipping2,
    bgColor: "rgb(2 2 100 / 76%)",
  },
  {
    title: "Global Shipping Expertise",
    description:
      "Navigating international logistics can be challenging but with Hyproc International, it’s effortless. Our shipping solutions are:",
    highlights: [
      {
        label: "Flexible",
        detail: "Air, sea, and land options customized for efficiency.",
      },
      { label: "Secure", detail: "End-to-end tracking for full visibility." },
      {
        label: "Reliable",
        detail: "Seamless delivery, even to remote locations.",
      },
    ],
    additionalContent: (
      <>
        <p className={styles.allDescription}>
          We handle all shipping logistics, including:
        </p>
        <ul className={styles.listglobalSection}>
          <li>
            Optimizing transport based on shipment size, weight, and
            destination.
          </li>
          <li>
            Managing customs paperwork and Incoterms compliance to prevent
            delays.
          </li>
          <li>
            Coordinating with a global network of carriers to ensure safe,
            timely delivery.
          </li>
        </ul>
        <p className={styles.allDescription}>
          With regular tracking updates, you stay informed at every stage from
          departure to final arrival.
        </p>
      </>
    ),
    bgImage: shipping3,
    bgColor: "rgb(0 41 0 / 76%)",
  },
];

const actualCards = initialCards.slice(1); // Removes the first empty card

export default function ProcurementShipping() {
  const carouselRef = useRef();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    navigate("/contact");
  };


  const [cards, setCards] = useState(initialCards);
  const [firstClick, setFirstClick] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(1); // Start from second card
    }
  }, []);

  const handleArrowClick = () => {
    if (!firstClick) {
      setFirstClick(true);
      setTimeout(() => {
        setCards(actualCards); // Remove the empty space after interaction
      }, 1); // Delay for smooth transition
    }
  };
  

  return (
    <div>
      {/* Header Section */}
      <div className={styles.expertiseSection}>
        <section className={styles.expertiseContainer}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Emphasizes smooth supply chain movement.
            </h2>
          </div>
        </section>
      </div>

      {/* Slider Section */}
      <section className={styles.sliderSection}>
        <div className={styles.arrowsContainer}>
        <CustomLeftArrow onClick={() => { handleArrowClick(); carouselRef.current.previous(); }} />
        <CustomRightArrow onClick={() => { handleArrowClick(); carouselRef.current.next(); }} />
      </div>

      <Carousel
        ref={(el) => (carouselRef.current = el)}
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        arrows={false}
        partialVisible={firstClick ? false: true}
        customTransition="transform 500ms ease-in-out"
      >
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                backgroundImage: card.bgImage ? `url(${card.bgImage})` : "none",
                visibility: index === 0 && !firstClick ? "hidden" : "visible",
              }}
            >

{index !== 0 || firstClick ? (
              <div
                className={styles.cardOverlay}
                style={{
                  background: card.bgColor,
                }}
               >
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardText}>{card.description}</p>

                {card?.highlights?.length > 0 && (
                  <ul className={styles.highlightList}>
                    {card.highlights.map((highlight, i) => (
                      <li key={i}>
                        <span className={styles.highlightLabel}>
                          {highlight.label}:
                        </span>{" "}
                        <span className={styles.highlightdetail}>
                          {highlight.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.additionalContent && card.additionalContent}
              </div>
               ) : null}
            </div>
          ))}
        </Carousel>
        <div className={styles.globallines}>
              <div></div>
              <div></div>
              <div></div>
            </div>
      </section>

      {/* Why Partner Section */}
      <div className={styles.whySection}>
        <section className={styles.whyContainer}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Why Partner with Hyproc International?
            </h2>
            {/* <div className={styles.lines}>
              <div></div>
              <div></div>
              <div></div>
            </div> */}
          </div>

          <div>
            <div className={styles.listSection}>
              <ul className={styles.list}>
                <li>
                  <strong className={styles.bold}>
                    🔹 End-to-End Supply Chain Expertise{" "}
                  </strong>
                  – Procurement, logistics, and compliance all in one place.
                </li>
                <li>
                  <strong className={styles.bold}>
                    🔹 Proven Reliability{" "}
                  </strong>
                  – Decades of experience delivering results across industries.
                </li>
                <li>
                  <strong className={styles.bold}>
                    🔹 Client-First Approach{" "}
                  </strong>
                  – Personalized service with a dedicated account manager.
                </li>
              </ul>
              <h2 className={styles.optimize}>
                Let’s Optimize Your Supply Chain
              </h2>
              <p className={styles.optimizedescription}>
                Looking for a procurement and logistics partner you can trust?{" "}
                <strong className={styles.bold} onClick={toggleDropdown}>
                  Contact us today
                </strong>{" "}
                to discuss your shipping and supply needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}