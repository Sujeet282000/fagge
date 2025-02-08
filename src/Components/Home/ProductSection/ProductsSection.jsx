import styles from "./ProductSection.module.css";
import productImage1 from "../../../Assests/Images/product_image1.png";
import productImage2 from "../../../Assests/Images/product_image2.png";
import productImage3 from "../../../Assests/Images/product_image3.png";
import starRating from "../../../Assests/icons/starRating.svg";
import heartIcon from "../../../Assests/icons/heartIcon.svg";
import arrowleft from "../../../Assests/icons/leftArrow.svg";
import arrowright from "../../../Assests/icons/rightArrow.svg";
import Carousel from "react-multi-carousel";

import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const products = [
  {
    id: 1,
    name: "Safety Equipment Set",
    rating: 4.8,
    price: 150.0,
    image: productImage1,
    description:
      "Protect your team with our comprehensive range of high-quality PPE, from gloves to respiratory gear, designed for safety in any environment.",
  },
  {
    id: 2,
    name: "Safety Glasses Kit",
    rating: 5.0,
    price: 1250.0,
    image: productImage2,
    description:
      "Protect your team with our comprehensive range of high-quality PPE, from gloves to respiratory gear, designed for safety in any environment.",
  },
  {
    id: 3,
    name: "Complete PPE Kit",
    rating: 4.5,
    price: 10500.0,
    image: productImage3,
    description:
      "Protect your team with our comprehensive range of high-quality PPE, from gloves to respiratory gear, designed for safety in any environment.",
  },
];


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1400 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1400, min: 940 },
    items:3,
  },
  mobile: {
    breakpoint: { max: 940, min: 600 },
    items: 2,
  },
  small: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};


const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#000000",
  fontSize: "80px"
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



export function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Products</h2>
          <div className={styles.lines}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* <h2 className={styles.heading}></h2> */}
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
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div>
                  <div className={styles.topRow}>
                    <div className={styles.rating}>
                        <img className={styles.star} src={starRating} alt="" />
                      <span className={styles.ratingValue}>
                        {product.rating}
                      </span>
                    </div>
                    <div className={styles.slideImages}>
                      <span className={styles.imageCount}>1</span>
                      <span className={styles.imageCount}>2</span>
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
                <div>
                  <div className={styles.title}>{product.name}</div>
                  <div className={styles.description}>
                    {product.description}
                    <p className="mt-3">Protect your team with our protect your team with our comprehensive range of high-quality PPE, from gloves to respiratory gear, designed. 
                    </p>
                  </div>
                </div>
                <div  className={styles.footer_card}>
                  <div className={styles.price}>
                    ${product.price.toFixed(2)}
                  </div>
                  <div>
                    <button className={styles.addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
