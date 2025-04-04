import styles from "./HeaderContentSection.module.css";
import React, { useState, useEffect } from "react";
// import ArrowRight from '../../../Assests/icons/arrowRight.svg'

import arrowleft from "../../../Assests/icons/leftArrow.svg";
import arrowright from "../../../Assests/icons/rightArrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Button } from "react-bootstrap";
import image from "../../../Assests/Images/image 2.png";
import { ArrowRight } from "lucide-react";

import homeAbout1 from "../../../Assests/Images/homeAbout1.png";
import homeAbout2 from "../../../Assests/Images/homeAbout2.png";
import homeAbout3 from "../../../Assests/Images/homeAbout3.png";
import imagebg from '../../../Assests/Images/homePagebg.png'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 480 },
    items: 2,
  },
  small: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#000000",
  fontSize: "80px",
  display: "none",
};
const CustomRight = ({ onClick }) => (
  <button className={styles.arrowright} onClick={onClick} style={arrowStyle}>
    <img src={arrowright} alt="" style={{ fontSize: "50px" }} />
  </button>
);
const CustomLeft = ({ onClick }) => (
  <button className={styles.arrowleft} onClick={onClick} style={arrowStyle}>
    <img src={arrowleft} alt="" style={{ fontSize: "50px" }} />
  </button>
);



export default function HeaderContentSection({ onImageClick }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [showBorder, setShowBorder] = useState(true);
    const [overlayActive, setOverlayActive] = useState(false);
  
    const images = [
        { url: imagebg, label: "HOME" },
        { url: homeAbout1, label: "About Hyproc" },
        { url: homeAbout2, label: "Our Global Team" },
        { url: homeAbout3, label: "Procurement & Shipping" },
      ];
      

      const imageContent = {
        "HOME": {
          subtitle: "Home",
          title: "Seamless Global Procurement &\nLogistics, Tailored for Your Success",
        },
        "About Hyproc": {
          subtitle: "About Hyproc",
          title: "About Hyproc and Global Procurement & Logistics, Redefined for Your Industry",
        },
        "Our Global Team": {
          subtitle: "Our Global Team",
          title: "Our Global Team and Emphasizes smooth supply chain movement.",
        },
        "Procurement & Shipping": {
          subtitle: "Procurement & Shipping",
          title: "Procurement & Shipping and Emphasizes smooth supply chain movement.",
        },
      };
  
    useEffect(() => {
        setOverlayActive(true); // Activate overlay when animation starts
        const interval = setInterval(() => {
          setShowBorder(false);
          setTimeout(() => {
            const nextIndex = (activeIndex + 1) % images.length;
            setActiveIndex(nextIndex);
            setShowBorder(true);
            onImageClick(images[nextIndex].url);
            setOverlayActive(true);
            setTimeout(() => {
              setOverlayActive(false); // Deactivate overlay after animation ends
            }, 4000);
          }, 1000);
        }, 4500);
    
        return () => clearInterval(interval);
      }, [activeIndex, images.length, onImageClick]);
  return (
    <>
      <section className={styles.Overview_section}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
          <span className={styles.subtitle}>
            {imageContent[images[activeIndex].label]?.subtitle}
          </span>
          <h1 className={styles.title}>
            {imageContent[images[activeIndex].label]?.title}
          </h1>
            <button className={styles.button}>
              Get a Quote <ArrowRight className={styles.arrow} />
            </button>
          </div>
        </div>
      </section>

      <div className={styles.container}>
      <Carousel responsive={responsive} infinite 
    //   autoPlay 
    //   autoPlaySpeed={5000}
            responsive={responsive}
            autoPlay={false}
            swipeable={false}
            draggable={false}
            infinite={true}
            keyBoardControl={true}
            stagePadding={'5'}
            className={styles.curoselList}
            arrows
            partialVisible={false}
            itemClass={styles.carouselItem}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}>
            {images.map((image, index) => (
           <div className={`${styles.gridItem}`}  onClick={() => {
            setActiveIndex(index);
            // setBgImage(image.url);
            onImageClick(image.url);
          }}>
           <div className={styles.borderWrapper}></div>  {/* Static white border */}
           
           <img
             src={image.url}
             alt={image.label}
             className={`${styles.image} ${index === activeIndex ? styles.active : styles.inactive}`}
           />
         
           {index === activeIndex && showBorder && (
             <div className={styles.borderAnimationWrapper}>
               <div className={`${styles.borderLine} ${styles.borderLeft}`} />
               <div className={`${styles.borderLine} ${styles.borderTop}`} />
               <div className={`${styles.borderLine} ${styles.borderRight}`} />
               <div className={`${styles.borderLine} ${styles.borderBottom}`} />
             </div>
           )}
         
           <div className={`${styles.overlay} ${index === activeIndex && overlayActive ? styles.overlayActive : ""}`}>
             <div className={styles.label}>{image.label}</div>
           </div>
         </div>
         
          ))}
      </Carousel>
    </div>
    </>
  );
}
