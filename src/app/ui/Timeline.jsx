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
    autoplay: true,     
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
       {timelineItems.map((item, index) => (
          <div className="flex flex-col justify-center items-center" key={index} 
            onClick={() => {
                setModelPath(item.model)  
                setIsOpen(true)
              }  
            }>
            <img src={item.img} alt={`Model for ${item.year}`} className="sm:w-64 sm:h-48 h-32 w-auto" />
            <h3 className="text-white font-tajawal font-light text-xs sm:text-base">{item.year}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default Timeline;