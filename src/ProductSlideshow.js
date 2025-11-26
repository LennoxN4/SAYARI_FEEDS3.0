import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "/Images/ARNSLIDESHOW.jpg",
  "/Images/BRACHIRIASLIDESHOW.jpg",
  "/Images/JUNCAOSLIDESHOW.jpg",
  "/Images/PAKCHONGSLIDESHOW.jpg",
  "/Images/SUPERKVINESLIDESHOW.jpg",
  "/Images/TRICHANTERASLIDESHOW.jpg",
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: false,
};

const ProductSlideshow = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Fade {...fadeProperties}>
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ProductSlideshow;
