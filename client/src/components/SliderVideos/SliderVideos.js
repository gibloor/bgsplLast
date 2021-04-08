import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderVideos.css';
import Video from '../../video/videoplayback.mp4'

const menu = [
  { title: 123, video: Video },
  { title: 124, video: Video },
  { title: 125, video: Video },
  { title: 126, video: Video },
  { title: 127, video: Video },
] 

const SliderOne = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
  };
  return (
      <Slider {...settings}>
        {menu.map(item => (
          <div>
            <div className="videoAtSlider">
              <video controls="controls" src={item.video}/>
            </div>
            <div className="textAboutVideo">{item.title}</div>
          </div>
        ))}
      </Slider>
  );
};

export default SliderOne;