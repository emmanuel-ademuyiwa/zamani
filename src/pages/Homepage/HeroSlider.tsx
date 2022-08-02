import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: require("../../images/sh.jpg"),
  },
  {
    url: require("../../images/sh2.jpg"),
  },
  {
    url: require("../../images/sh3.jpg"),
  },

];

const Slideshow = () => {
  return (
    <div className="container slidecontainer">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
