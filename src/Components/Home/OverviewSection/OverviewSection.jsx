import React from "react";
import styles from "./OverviewSection.module.css";
import { Button } from "react-bootstrap";
import { User, Globe, Truck, ShoppingCart, Package } from "lucide-react";
import overviewbg1 from "../../../Assests/Images/overviewbg1.png";
import overviewbg2 from "../../../Assests/Images/overviewbg2.png";
import overviewbg3 from "../../../Assests/Images/overviewbg3.png";
import overviewbg4 from "../../../Assests/Images/overviewbg4.png";
import overviewbg5 from "../../../Assests/Images/overviewbg5.png";
const services = [
  {
    id: 1,
    title: "Dedicated Account Managers",
    description: "Personalized support tailored to your business needs.",
    icon: User,
    image: overviewbg1,  // Updated to imported image
  },
  {
    id: 2,
    title: "Global Sourcing Power",
    description: "Access to trusted suppliers worldwide.",
    icon: Globe,
    image: overviewbg2,
  },
  {
    id: 3,
    title: "Logistics Made Simple",
    description: "Effortless coordination to streamline operations.",
    icon: Truck,
    image: overviewbg3,
  },
  {
    id: 4,
    title: "Expert Procurement",
    description: "Cost-effective sourcing with a focus on quality and efficiency.",
    icon: ShoppingCart,
    image: overviewbg4,
  },
  {
    id: 5,
    title: "Flexible Shipping Solutions",
    description: "Custom air, sea, and land transport for seamless delivery.",
    icon: Package,
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
              { top: "25%", left: "8%" },
              { top: "0%", left: "50%", transform: "translateX(-50%)" },
              { top: "25%", right: "8%" },
              { bottom: "-5%", left: "20%" },
              { bottom: "-5%", right: "20%" },
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
                    <Icon className={styles.icon} />
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
