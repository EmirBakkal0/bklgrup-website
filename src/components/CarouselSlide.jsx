import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function CarouselSlide(props) {
  return (
    <SplideSlide>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-full"
          style={{
            minHeight: "75vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${props.img})`
            }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-35 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className=" flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    {props.header}
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                        {props.p}
                  </p>
                  <button className='cursor-pointer p-2 shadow-lg bg-gray-400 text-white rounded-lg mt-2 bg-opacity-35' onClick={() => window.location.href = props.link}>
                        Siteye git
                    </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SplideSlide>
  )
}

export default CarouselSlide