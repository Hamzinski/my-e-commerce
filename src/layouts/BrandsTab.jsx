import React from "react";
import fa1 from "../assets/fabrands1.png";
import fa2 from "../assets/fabrands2.png";
import fa3 from "../assets/fabrands3.png";
import fa4 from "../assets/fabrands4.png";
import fa5 from "../assets/fabrands5.png";
import fa6 from "../assets/fabrands6.png";

const images = [fa1, fa2, fa3, fa4, fa5, fa6];

function BrandsTab() {
  return (
    <div>
      <div className="custom-container flex flex-wrap justify-between p-12">
        {images.map((src, index) => (
          <img key={index} className="object-contain" src={src} alt="" />
        ))}
      </div>
    </div>
  );
}

export default BrandsTab;
