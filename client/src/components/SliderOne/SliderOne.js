import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderOne.css';
const SliderOne = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
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