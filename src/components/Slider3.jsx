import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
function Slider3(images) {
  const slides = images.images.map((item) => {
    return [{ image: item.url }, { image: item.url }];
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides[0].length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides[0].length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="">
      <div className="custom container relative">
        <div className="bg-cover object-cover duration-500 flex justify-around items-center ">
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2  text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2  text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={60} />
          </div>
          <img
            className="w-96 flex justify-center items-center "
            src={slides[0][currentIndex].image}
            alt=""
          />
        </div>

        <div className="flex py-3 gap-1">
          {slides[0].map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all w-24 h-16 ${
                currentIndex === slideIndex ? "p-10" : "opacity-50"
              } text-2xl cursor-pointer`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "5",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider3;
