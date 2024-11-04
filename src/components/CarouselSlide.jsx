import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function CarouselSlide(props) {
  return (
    <SplideSlide>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center h-full"
        style={{
          minHeight: "75vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${props.img})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-35 bg-black"
          ></span>
        </div>
        <div className="absolute bottom-0 left-0" >
        <div className="z-10 flex flex-col justify-end w-full h-full ">
          <div className=" w-full lg:w-5/12  bg-gray-700 bg-opacity-55 rounded-md px-3 py-2 text-center">
            <h1 className="text-white font-semibold text-2xl md:text-3xl items-end">
              {props.header}
            </h1>
            <p className="mt-4 text-md md:text-lg text-gray-300 ">{props.p}</p>
          </div>
        </div>
        </div>
        
      </div>
    </SplideSlide>
  );
}

export default CarouselSlide;
