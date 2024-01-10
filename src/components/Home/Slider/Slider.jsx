import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import  img1  from "../../../01.jpg";
import  img2  from "../../../02.jpg";
import  img3  from "../../../03.png";
import  img4  from "../../../04.jpg";
import  img5  from "../../../05.png";
import  img6  from "../../../06.png";

const Slider = () => {
  return (
    <Carousel autoPlay>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
      <div>
        <img src={img6} alt="" />
      </div>
    </Carousel>
  );
};

export default Slider;
