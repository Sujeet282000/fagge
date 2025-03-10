import styles from "./ProductSection.module.css";
import productImage1 from "../../../Assests/Images/product_image1.png";
import productImage2 from "../../../Assests/Images/product_image2.png";
import productImage3 from "../../../Assests/Images/product_image3.png";
import starRating from "../../../Assests/icons/starRating.svg";
import heartIcon from "../../../Assests/icons/heartIcon.svg";
import arrowleft from "../../../Assests/icons/leftArrow.svg";
import arrowright from "../../../Assests/icons/rightArrow.svg";
import Carousel from "react-multi-carousel";
import manualImage from '../../../Assests/Images/pro-man.jpg'

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
    description:["This space will be used for the clients testimonials for Hyproc. This space will be used for the clients testimonials for Hyproc." ,"This space will be used for the clients testimonials for Hyproc.This space will be used for the clients.","This space will be used for the clients testimonials for Hyproc. This space will be used for."]
  },
  {
    id: 2,
    name: "Safety Glasses Kit",
    rating: 5.0,
    price: 1250.0,
    image: productImage2,
    description:["This space will be used for the clients testimonials for Hyproc. This space will be used for the clients testimonials for Hyproc." ,"This space will be used for the clients testimonials for Hyproc.This space will be used for the clients.","This space will be used for the clients testimonials for Hyproc. This space will be used for."]
  },
  {
    id: 3,
    name: "Complete PPE Kit",
    rating: 4.5,
    price: 10500.0,
    image: productImage3,
    description:["This space will be used for the clients testimonials for Hyproc. This space will be used for the clients testimonials for Hyproc." ,"This space will be used for the clients testimonials for Hyproc.This space will be used for the clients.","This space will be used for the clients testimonials for Hyproc. This space will be used for."]
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
    <img src={arrowright} alt=""/>
  </button>
);
const CustomLeft = ({ onClick }) => (
  <button className={styles.arrowleft} onClick={onClick} style={arrowStyle}>
    <img src={arrowleft} alt="" />
  </button>
);



export function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Testimonial</h2>
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
        // autoPlay={true}
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
                <div >
                   <img className={styles.image} src={manualImage} alt="" />
                </div>
                <div className={styles.name}>Client’s Name</div>
                <div className={styles.designation}>Designation</div>
              </div>
              <div className={styles.content}>
                {product.description?.map((item) => (
                  <div className={styles.description}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
