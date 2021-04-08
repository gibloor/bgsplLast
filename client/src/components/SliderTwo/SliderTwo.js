import React, { Component } from "react";
import Slider from "react-slick";
import Slide from '../../img/Sitelogo.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderTwo.css';
const SliderOne = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false
  };
  return (
      <Slider {...settings}>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
      </Slider>
  );
};

export default SliderOne;