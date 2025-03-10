import React from "react";
import styles from "./productandSupply.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    title: "Personal Protective Equipment (PPE)",
    description:
      "Protect your team with our comprehensive range of high-quality PPE, from gloves to respiratory gear, designed for safety in any environment.",
  },
  {
    title: "Industrial Tools & Contractor Equipment",
    description:
      "Access a wide selection of reliable industrial tools and contractor equipment, tailored to meet the demands of heavy-duty operations.",
  },
  {
    title: "Machinery & Vehicles",
    description:
      "We provide durable machinery and vehicles to enhance productivity, from site-ready equipment to specialized transport solutions.",
  },
  {
    title: "Cleaning & Hygiene Supplies",
    description:
      "Maintain a clean, safe workspace with our full line of cleaning and hygiene products, essential for operational health standards.",
  },
  {
    title: "Water Treatment Equipment",
    description:
      "Ensure water quality with our advanced water treatment solutions, designed for efficiency in industrial and environmental applications.",
  },
  {
    title: "Lifting & Rigging",
    description:
      "Our robust lifting and rigging equipment ensures safe, reliable handling of heavy loads, meeting the highest safety and efficiency standards.",
  },
  {
    title: "Industrial Oil & Chemicals",
    description:
      "Enhance machinery performance with our range of specialized industrial oils and chemicals, formulated for various industrial applications.",
  },
  {
    title: "Electrical & Lighting",
    description:
      "Illuminate and power your operations with dependable electrical and lighting solutions, tailored for industrial environments.",
  },
  {
    title: "Industrial Valves",
    description:
      "Precision-engineered industrial valves for effective control and regulation across diverse fluid and gas applications.",
  },
  {
    title: "Rotary Equipment",
    description:
      "Durable, high-performance rotary equipment solutions that drive productivity across complex mechanical operations.",
  },
];

const ProductandSupply = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product and Supply</h2>
      <div className="accordion" id="productAccordion">
        {products.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button collapsed ${styles.accordionButton}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#productAccordion"
            >
              <div className={`accordion-body ${styles.accordionBody}`}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductandSupply;
