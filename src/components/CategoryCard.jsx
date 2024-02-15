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
      <div className="bg-[#FAFAFA]">
        <div className="custom-container flex flex-col py-8">
          <div className="justify-between flex ">
            <h3 className="font-mont font-bold text-2xl">Shop</h3>
            <div className="flex items-center">
              <p className="font-mont font-bold text-sm text-[#252B42]">
                Home{" "}
              </p>
              <MdOutlineKeyboardArrowRight className="text-[#BDBDBD] size-8" />
              <p className="font-mont font-bold text-sm text-[#BDBDBD]">Shop</p>
            </div>
          </div>
        </div>
        <div className="custom-container flex justify-between">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-52 h-56 flex flex-col justify-center items-center gap-3"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundRepeat: "no-repeat",
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
