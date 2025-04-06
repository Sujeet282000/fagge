import React from "react";
import styles from "./OverviewSection.module.css";
import { Button } from "react-bootstrap";
import { User, Globe, Truck, ShoppingCart, Package } from "lucide-react";
import overviewbg1 from "../../../Assests/Images/overviewbg1.png";
import overviewbg2 from "../../../Assests/Images/overviewbg2.png";
import overviewbg3 from "../../../Assests/Images/overviewbg3.png";
import overviewbg4 from "../../../Assests/Images/overviewbg4.png";
import overviewbg5 from "../../../Assests/Images/overviewbg5.png";


import overviewsvg1 from "../../../Assests/icons/overviewsvg1.svg";
import overviewsvg2 from "../../../Assests/icons/overviewsvg2.svg";
import overviewsvg3 from "../../../Assests/icons/overviewsvg3.svg";
import overviewsvg4 from "../../../Assests/icons/overviewsvg4.svg";
import overviewsvg5 from "../../../Assests/icons/overviewsvg5.svg";


const services = [
  {
    id: 1,
    title: "Dedicated Account Managers",
    description: "Personalized support tailored to your business needs.",
    icon: overviewsvg1,
    image: overviewbg1,  // Updated to imported image
  },
  {
    id: 2,
    title: "Global Sourcing Power",
    description: "Access to trusted suppliers worldwide.",
    icon: overviewsvg2,
    image: overviewbg2,
  },
  {
    id: 3,
    title: "Logistics Made Simple",
    description: "Effortless coordination to streamline operations.",
    icon: overviewsvg3,
    image: overviewbg3,
  },
  {
    id: 4,
    title: "Expert Procurement",
    description: "Cost-effective sourcing with a focus on quality and efficiency.",
    icon: overviewsvg4,
    image: overviewbg4,
  },
  {
    id: 5,
    title: "Flexible Shipping Solutions",
    description: "Custom air, sea, and land transport for seamless delivery.",
    icon: overviewsvg5,
    image: overviewbg5,
  },
];


export function OverviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        

        <div className={styles.cardContainer}>
          {services.map((service, index) => {
            const Icon = service.icon; // Assigning the icon component
            const positions = [
              { top: "22%", left: "-5%" },
              { top: "-10%", left: "50%", transform: "translateX(-50%)" },
              { top: "22%", right: "-5%" },
              { bottom: "-15%", left: "15%" },
              { bottom: "-15%", right: "15%" },
            ];

            return (
              <div key={service.id} className={styles.cardWrapper} style={positions[index]}>
                {/* Background Image */}
                <div 
  className={styles.imageWrapper} 
  style={{ backgroundImage: `url(${service.image})` }}
>
                  <img src={''} alt={service.title} className={styles.imagesme} />
                  <div className={styles.overlay}></div>

                  {/* Rounded Card Inside */}
                  <div className={styles.roundedCard}>
                    {/* <Icon className={styles.icon} /> */}
                    <img className={styles.icon}  src={service.icon} alt="" />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>

            );
          })}
          <h2 className={styles.centerTitle}>What We Offer</h2>
        </div>

        <div className={styles.footer}>
  <p>
    <span>Discover how we can streamline your supply chain.</span> 
    <span> <a href="/learn-more" className={styles.learnMoreLink}>Learn More</a></span>
  </p>
</div>

      </div>
    </section>
  );
}
