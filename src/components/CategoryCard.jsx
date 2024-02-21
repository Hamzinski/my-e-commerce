import React from "react";
import mbc1 from "../assets/mediabgcover.png";
import mbc2 from "../assets/mediabgcover2.png";
import mbc3 from "../assets/mediabgcover3.png";
import mbc4 from "../assets/mediabgcover4.png";
import mbc5 from "../assets/mediabgcover5.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const items = [
  { backgroundImage: mbc1, category: "CLOTHS", count: "5 Items" },
  { backgroundImage: mbc2, category: "CLOTHS", count: "5 Items" },
  { backgroundImage: mbc3, category: "CLOTHS", count: "5 Items" },
  { backgroundImage: mbc4, category: "CLOTHS", count: "5 Items" },
  { backgroundImage: mbc5, category: "CLOTHS", count: "5 Items" },
];

function CategoryCard() {
  return (
    <div>
      <div className="bg-light-gray-1">
        <div className="custom-container flex flex-col py-8">
          <div className="justify-between flex flex-col md:flex-row items-center md:items-stretch gap-9 md:gap-0">
            <h3 className="font-mont font-bold text-2xl text-dark-text-color">
              Shop
            </h3>
            <div className="flex items-center">
              <p className="font-mont font-bold text-sm text-dark-text-color ">
                Home{" "}
              </p>
              <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
              <p className="font-mont font-bold text-sm text-muted-text-color">
                Shop
              </p>
            </div>
          </div>
        </div>
        <div className="custom-container flex flex-col md:flex-row items-center md:items-stretch justify-between gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="md:w-52 md:h-56 w-80 h-72 flex flex-col justify-center items-center gap-3"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="font-mont font-bold text-white text-base">
                {item.category}
              </p>
              <p className="font-mont font-medium text-white text-base">
                {item.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
