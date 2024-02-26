import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Button } from "reactstrap";
function Slider() {
  const slides = [
    {
      url: "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRuUc3UIlSQoQBzawEvKVIaDO-bdIxTuCT9souvziDah9LtJd4JxB-XMFy0xKdTXO6~XjZSFvNqXUHIAmRzzr4ldZJ-HMo1BIBJpO1scWbh1vEyhlYCepin4Bf1XAYJglBdY6VL9Oms5DCDEZbWA1Nogef2n~qgQGnon2yxRIF7Hpq0wl65VaAbfATTaI9Cb4N0ma-Wa3Raljf7OLN2YqHSniOGKi91Fqoan3Rf~ZBymGlnsQ9-wtSJRGLcqJ3heEYwoC1nT~KLWRtvNE-ITcKeIstII6amWNaGg1WsWfB3looJacBL2W0uZ~W-6zsHJmd84ibq6KW1kk7XNv5cnqw__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/48f0/23ec/b4f1775eee500a32d63a0f3de558bfff?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpjEF6tqOUuP9IyOPXqwjrUlhGCzm9IVMeCVw~UmzYxAQGg4QrMoZNT1SZg3J7D6lOvhaefDqEZJ8SYKDmYvuJCY-T0rWSKY~7x4AXw4x~fRr4TbysCpDZhHKZcvfJMPP4thfG1wvBE7VST07PLLBSkZH~ZGWHg~grkxtVefIn8e4PrDx67~cdAh0NT1m~y7tGSgn~xead4liIodoxJhaGZ1cqdYm6wfJNZYqn-wYK6jqiy9pTYR2p4TPRD-sXXLIzWO9ew1VNVKWGWj-v9Zc4sVCQ-qs35dY5JFmFqYLV4-AzyahXVpccxcJoUjYaxuDdZ8Qn4SxKQiFqOWUreieQ__",
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
    <div className="bg-[#00b5da] relative group">
      <div className="custom-container relative">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url}) `,
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-cover object-cover duration-500"
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
