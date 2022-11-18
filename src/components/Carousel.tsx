import React, { Component, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "./Carousel.css";
import tw from "twin.macro";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { IconContext } from "react-icons";

type CarouselDataType = { CarouselData: { title: string; url: string }[] };

const Carousel = ({ CarouselData }: CarouselDataType) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "anticipated",
    prevArrow: (
      <IconContext.Provider value={{ color: "lightgray", size: "30px" }}>
        <div onClick={() => sliderRef?.current?.slickPrev()} tw="mr-5">
          <IoMdArrowDropleftCircle />
        </div>
      </IconContext.Provider>
    ),

    nextArrow: (
      <IconContext.Provider value={{ color: "lightgray", size: "30px" }}>
        <div onClick={() => sliderRef?.current?.slickNext()} tw="ml-5">
          <IoMdArrowDroprightCircle />
        </div>
      </IconContext.Provider>
    ),
  };

  const sliderRef = useRef<unknown>(null);

  return (
    <Slider {...settings} ref={sliderRef}>
      {CarouselData.map((slideItemData, idx) => (
        <div className="slideItem" key={slideItemData.title}>
          <h1 tw="h-12 flex items-center text-xl font-bold">
            📍 {slideItemData.title}
          </h1>
          <iframe
            width="700px"
            height="400px"
            src={slideItemData.url}
            title="YouTube video player"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;