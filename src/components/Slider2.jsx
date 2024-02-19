import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import slider2 from "../assets/slider2.png";
function Slider2() {
  const slides = [
    {
      bgcolor: "#23856D",
      image: slider2,
    },
    {
      bgcolor: "#E77C40",
      image: slider2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-[#23856d] relative group">
      <div className="custom container relative">
        <div
          style={{ background: `${slides[currentIndex].bgcolor}` }}
          className="w-full h-full bg-cover object-cover duration-500 flex justify-around items-center "
        >
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2  text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2  text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={60} />
          </div>
          <div className="flex flex-col gap-9 ">
            <h5 className="font-mont font-bold text-base text-white">
              SUMMER 2020
            </h5>
            <h1 className="font-mont font-bold text-6xl text-white">
              Vita Classic
              <br /> Product
            </h1>
            <h4 className="font-mont font-normal text-xl text-white">
              We know how large objects will act, We know
              <br /> how are objects will act, We know
            </h4>
            <div className="flex gap-9">
              <h3 className="font-mont font-bold text-2xl text-white">
                $16.48
              </h3>
              <button className="w-fit font-mont font-bold text-sm text-white rounded-md bg-success-color py-3.5 px-10">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="h-full flex items-end">
            <img className="" src={slides[currentIndex].image} alt="" />
          </div>
        </div>

        <div className="flex absolute bottom-4 right-0 left-0 justify-center py-2 gap-1">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all w-16 h-3 bg-white  ${
                currentIndex === slideIndex ? "p-2" : "bg-opacity-50"
              } text-2xl cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider2;
