import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Button } from "reactstrap";
import sliderwomen from "../assets/sliderwomen.png";
import sliderwomen2 from "../assets/sliderwomen2.png";
function Slider() {
  const slides = [
    {
      image: sliderwomen,
    },
    {
      image: sliderwomen,
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
    <div className="bg-[#00b5da] relative group ">
      <div className="custom-container relative">
        <div
          style={{
            background: `url(${slides[currentIndex].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
          className="w-full h-full duration-500 "
        >
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-5 text-2xl p-2 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-5 text-2xl p-2 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={60} />
          </div>

          <div className="flex flex-col gap-12 md:gap-9 p-20 md:p-52 text-center md:text-start items-center md:items-start">
            <h5 className="font-mont font-bold text-base text-white">
              SUMMER 2020
            </h5>
            <h1 className="font-mont font-bold text-4xl md:text-6xl text-white">
              NEW COLLECTION
            </h1>
            <p className="font-mont font-normal md:text-start text-xl text-white w-72 md:w-96">
              We know how large objects will act, but things on a small scale.
            </p>
            <Button className="w-fit font-mont font-bold rounded-md text-2xl text-white bg-success-color py-3.5 px-10">
              SHOP NOW
            </Button>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-4 right-0 left-0 justify-center py-2 gap-1">
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

export default Slider;
