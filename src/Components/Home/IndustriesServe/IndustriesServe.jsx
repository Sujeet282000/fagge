import styles from "./IndustriesServe.module.css";
import ArrowRight from '../../../Assests/icons/arrowRight.svg'
import serve1 from '../../../Assests/icons/serve1.svg'
import serve2 from '../../../Assests/icons/serve2.svg'
import serve3 from '../../../Assests/icons/serve3.svg'
import serve4 from '../../../Assests/icons/serve4.svg'
import serve5 from '../../../Assests/icons/serve5.svg'

import arrowleft from "../../../Assests/icons/leftArrow.svg";
import arrowright from "../../../Assests/icons/rightArrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const services = [
  {
    title: "Oil & Gas",
    img : serve1,
    description:
      "Efficient procurement for high-value energy operations.",
  },
  {
    title: "Mining",
    img : serve2,
    description:
     "Dependable supply chains for tough environments and remote sites.",
  },
  {
    title: "Manufacturing",
    img : serve3,
    description:
      "Optimized sourcing to keep production running smoothly.",
  },
  {
    title: "International Aid",
    img : serve4,
    description:
      "Rapid-response logistics for humanitarian missions.",
  },
  {
    title: "Utilities",
    img : serve5,
    description:
      "Reliable solutions for critical infrastructure projects.",
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


export function IndustriesServe() {
  return (
    <section className={styles.Services_section}>
      <div className={styles.container}>

       <div className={styles.header}>
          <h2 className={styles.heading}>Industries We Serve</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.subHeading}> 
           Expert Procurement Services for Critical Global Industries
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
               
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{service.title}</div>
                <div className={styles.cardDescription}>{service.description}</div>
              </div>
            </div>
          ))}
                    </Carousel>
        </div>
      </div>
    </section>
  );
}
