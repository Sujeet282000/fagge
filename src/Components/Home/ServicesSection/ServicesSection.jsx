import styles from "./ServicesSection.module.css";
import ArrowRight from '../../../Assests/icons/arrowRight.svg'

const services = [
  {
    title: "Dedicated Account Managers",
    description:
      "Your needs come first. Every client receives a dedicated Account Manager, ensuring responsive, personalised service that gets results.",
  },
  {
    title: "Expert Procurement",
    description:
      "We handle every detail with precision from expert planning, cost control, and quality assurance. We manage the complexities of procurement so you can focus on your core business.",
  },
  {
    title: "Logistics Made Simple",
    description:
      "Our streamlined approach consolidates shipments, reduces delays, and optimises logistics to save you time and money.",
  },
  {
    title: "Global Sourcing Power",
    description:
      "Your needs come first. Every client receives a dedicated Account Manager, ensuring responsive, personalised service that gets results.",
  },
];

export function ServicesSection() {
  return (
    <section className={styles.Services_section}>
      <div className={styles.container}>

       <div className={styles.header}>
          <h2 className={styles.heading}>What we do</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (

            <div key={service.title} className={styles.card}>
              <div>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardDescription}>{service.description}</p>
                <p className={styles.cardDescription}>We handle every detail with precision from expert planning, cost control, and quality assurance.   We manage the complexities of procurement so you can focus on your core business.</p>
              </div>
              </div>
              <div className={styles.cardFooter}>
                <button className={styles.btn}>
                 <img src={ArrowRight} alt="Arrow Right" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
