import React, { useEffect, useState } from "react";
import './NewsEventsList.css';

const NewsEventsList = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:5000/images");
      const jsonData = await response.json();

      setImages(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="newsEventsList">
      {images.map(image => (
        <div className="newsEvents">
        <div className="newsEventsImg">
            <img className="newsImg" src={image.link}/>
        </div>
        <div className="newsEventsText">
          {image.title}
        </div>
      </div>
      ))}
    </div>
  );
};

export default NewsEventsList;