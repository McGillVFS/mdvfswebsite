"use client";

import Slider from "react-slick";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; //use react-icons chevron arrows for left/right arrows

//custom components for left/right arrows
const PrevArrow = ({ className, style, onClick }) => (
  <FaChevronLeft
    className={className}
    style={{ ...style, display: "block", color: "white", fontSize: 24 }}
    onClick={onClick}
  />
);

const NextArrow = ({ className, style, onClick }) => (
  <FaChevronRight
    className={className}
    style={{ ...style, display: "block", color: "white", fontSize: 24 }}
    onClick={onClick}
  />
);

const Timeline = ({setIsOpen, setModelPath, timelineItems}) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
       {timelineItems.map((item, index) => (
          <div className="flex justify-center" key={index} 
            onClick={() => {
                setModelPath(item.model)  
                setIsOpen(true)
              }  
            }>
            <img src={item.img} alt={`Model for ${item.year}`} className="w-48 h-48" />
            <h3>{item.year}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default Timeline;