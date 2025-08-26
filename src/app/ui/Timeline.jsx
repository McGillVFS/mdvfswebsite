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

const Timeline = ({}) => {

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

  const timelineItems = [
    "2015: Built a drone",
    "2016: Built another drone",
    "2017: Built yet another drone",
    "2018: Built yet another drone",
    "2019: Didn't build a drone (ran out of time)",
    "2020: Didn't do anything because of COVID",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {timelineItems.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default Timeline;