import styles from "./ServicesSection.module.css";
import ArrowRight from '../../../Assests/icons/arrowRight.svg'
import Offer1 from '../../../Assests/icons/offer1.svg'
import Offer2 from '../../../Assests/icons/offer2.svg'
import Offer3 from '../../../Assests/icons/offer3.svg'
import Offer4 from '../../../Assests/icons/offer4.svg'
import Offer5 from '../../../Assests/icons/offer5.svg'

import arrowleft from "../../../Assests/icons/leftArrow.svg";
import arrowright from "../../../Assests/icons/rightArrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const services = [
  {
    title: "Dedicated Account Managers",
    img : Offer1,
    description:
      "Personalized support tailored to your business needs.",
  },
  {
    title: "Expert Procurement",
    img : Offer2,
    description:
     "Cost-effective sourcing with a focus on quality and efficiency.",
  },
  {
    title: "Global Sourcing Power",
    img : Offer3,
    description:
      "Access to trusted suppliers worldwide.",
  },
  {
    title: "Logistics Made Simple",
    img : Offer4,
    description:
      "Effortless coordination to streamline operations.",
  },
  {
    title: "Flexible Shipping Solutions",
    img : Offer5,
    description:
      "Custom air, sea, and land transport for seamless delivery.",
  },
];


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
  display:"none"
};
const CustomRight = ({ onClick }) => (
  <button className={styles.arrowright} onClick={onClick} style={arrowStyle}>
    <img src={arrowright} alt="" style={{ fontSize: "50px" }}/>
  </button>
);
const CustomLeft = ({ onClick }) => (
  <button className={styles.arrowleft} onClick={onClick} style={arrowStyle}>
    <img src={arrowleft} alt=""  style={{ fontSize: "50px" }} />
  </button>
);


export function ServicesSection() {
  return (
    <section className={styles.Services_section}>
      <div className={styles.container}>

       <div className={styles.header}>
          <h2 className={styles.heading}>What we offer</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.grid}>

        <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        keyBoardControl={true}
        stagePadding={'5'}
        className={styles.curoselList}
        arrows
        partialVisible={false}
        itemClass={styles.carouselItem}
        customRightArrow={<CustomRight />}
        customLeftArrow={<CustomLeft />}
      >
          {services.map((service) => (

            <div key={service.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className="text-center"><img src={service.img} alt="" /></div>
                <div className={styles.cardTitle}>{service.title}</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardDescription}>{service.description}</div>
              </div>
              {/* <div className={styles.cardFooter}>
                <button className={styles.btn}>
                 <img src={ArrowRight} alt="Arrow Right" />
                </button>
              </div> */}
            </div>
          ))}
                    </Carousel>
        </div>
        <div className={styles.seperatorLine}>
           <span className={styles.supplyChain}>Discover how we can streamline your supply chain.</span> <span className={styles.learnMore}>Learn More</span> 
        </div>
      </div>
    </section>
  );
}
