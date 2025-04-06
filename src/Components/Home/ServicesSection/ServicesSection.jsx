import React from "react";
import styles from "./ServicesSection.module.css";
import { Droplet, Truck, Factory, Heart, Zap } from "lucide-react";

import servicesbg1 from "../../../Assests/Images/servicesbg1.jpeg";
import servicesbg2 from "../../../Assests/Images/servicesbg2.jpeg";
import servicesbg3 from "../../../Assests/Images/servicesbg3.jpeg";
import servicesbg4 from '../../../Assests/Images/servicesbg4.jpeg'
import servicesbg5 from '../../../Assests/Images/servicesbg5.jpeg'

const industries = [
  {
    title: "Oil & Gas",
    description:
      "Optimized procurement processes ensuring safe, efficient, and reliable supply chains for high-value energy assets.",
    icon: <Droplet className={styles.icon} />,
    image: servicesbg1,
  },
  {
    title: "Mining",
    description:
      "Robust and reliable supply systems designed to withstand challenging conditions and ensure seamless operations in remote and difficult locations.",
    icon: <Truck className={styles.icon} />,
    image: servicesbg2,
  },
  {
    title: "Manufacturing",
    description:
      "Efficient sourcing solutions for streamlined production flow, minimizing costs and downtime while ensuring operations run seamlessly.",
    icon: <Factory className={styles.icon} />,
    image: servicesbg3,
  },
  {
    title: "International Aid",
    description:
      "Agile and efficient logistics delivery and sourcing of supplies for critical humanitarian missions.",
    icon: <Heart className={styles.icon} />,
    image: servicesbg4,
  },
  {
    title: "Utilities",
    description:
      "Dependable and scalable solutions ensuring seamless service delivery and long-term success of critical infrastructure.",
    icon: <Zap className={styles.icon} />,
    image: servicesbg5,
  },
];

export function ServicesSection() {
  return (
    <section className={styles.section}>
       {/* Heading and Description */}
       <div className={styles.header}>
        <h2 className={styles.heading}>Industries We Serve</h2>
        <p className={styles.subheading}>
          Expert Procurement Services for Critical Global Industries
        </p>
      </div>
    <div className={styles.container}>
      
     

      {/* Industry Cards */}
      {industries.map((industry, index) => (
        <div key={index} className={styles.card}>
          {/* Background Image */}
          <div className={styles.imageWrapper}>
            <img src={industry.image} alt={industry.title} className={styles.image} />
            <div className={styles.overlay}></div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.iconWrapper}>{industry.icon}</div>
            <h3 className={styles.title}>{industry.title}</h3>
            <p className={styles.description}>{industry.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}
