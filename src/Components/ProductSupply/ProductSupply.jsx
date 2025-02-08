import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import styles from "./ProductSupply.module.css";
import productImage1 from "../../Assests/Images/imageproduct.jpg";
import productImage2 from "../../Assests/Images/imageproduct.jpg";
import productImage3 from "../../Assests/Images/imageproduct.jpg";
import Star from "../../Assests/icons/starRating.svg";
import heartIcon from "../../Assests/icons/white-heart.svg";
import arrowleft from "../../Assests/icons/leftArrow.svg";
import arrowright from "../../Assests/icons/rightArrow.svg";

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
  fontSize: "80px",
  cursor:"pointer"
};

const CustomRight = ({ onClick }) => (
  <button className={styles.arrowRight} onClick={onClick} style={arrowStyle}>
    <img src={arrowright} alt="Right Arrow" style={{ fontSize: "50px" }} />
  </button>
);

const CustomLeft = ({ onClick }) => (
  <button className={styles.arrowLeft} onClick={onClick} style={arrowStyle}>
    <img src={arrowleft} alt="Left Arrow" style={{ fontSize: "50px" }} />
  </button>
);

export default function ProductSupply() {
  const rating = 4.5;
  const hasHalfStar = rating % 1 !== 0;

  const dataRows = [
    { date: "March 16, 2024", ref: "REF001", product: "374364" },
    { date: "March 16, 2024", ref: "REF002", product: "487562" },
    { date: "March 16, 2024", ref: "REF003", product: "985632" },
    { date: "March 16, 2024", ref: "REF004", product: "446736" },
    { date: "March 16, 2024", ref: "REF005", product: "446873" },
  ];

  return (
    <div className={styles.productSupplySection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Product & Supply</h2>
        <div className={styles.lines}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.heroSection}>
        <Carousel
          responsive={responsive}
          autoPlay
          swipeable
          draggable
          infinite
          keyBoardControl
          arrows
          partialVisible={false}
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
          className={styles.carouselList}
        >
          {[productImage1, productImage2, productImage3].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={styles.heroImage}
            />
          ))}
        </Carousel>
      </div>

      <div className={styles.ratingSection}>
        <div className={styles.topRow}>
          <div className={styles.rating}>
            <img className={styles.star} src={Star} alt="" />
            <span className={styles.ratingValue}>4.5 </span>
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
      </div>

      <div className={styles.card}>
        <div className={styles.Section_heading}>Vehicle & Machinery</div>
        <div className={styles.paraContent}>
          We provide durable machinery and vehicles to enhance productivity,
          from site-ready equipment to specialized transport solutions.
        </div>
      </div>
      <hr />
      <div className={styles.card}>
        <div className={styles.Section_heading}>Our Key Offerings</div>
        <div className={styles.grid}>
          <div>
            <ul>
              <li>Commercial Vehicle</li>
              <li>Heavy Load Trucks</li>
              <li>Plant Equipment</li>
              <li>Construction Equipment</li>
              <li>Manufacturing Machinery</li>
            </ul>
          </div>
          <div>
            {/* <h3>Features</h3> */}
            <ul>
              <li>Spare Parts</li>
              <li>Machine Tools</li>
              <li>Molds and Molding Machines</li>
              <li>Plastic Machineries</li>
              <li>Machining Machinery</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className={styles.card}>
        <div className={styles.Section_heading}>Tabular Data Presentation</div>
        <div className={styles.tableSection}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference</th>
                <th>Product Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, i) => (
                <tr key={i}>
                  <td>{row.date}</td>
                  <td>{row.ref}</td>
                  <td>{row.product}</td>
                  <td>
                    <Link to="#" className={styles.link}>
                      Read more...
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
