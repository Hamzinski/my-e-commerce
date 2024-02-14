import React from "react";
import pc1 from "../assets/pc1.png";
import pc2 from "../assets/pc2.png";
import pc3 from "../assets/pc3.png";
import pc4 from "../assets/pc4.png";
import pc5 from "../assets/pc5.png";
import pc6 from "../assets/pc6.png";
import pc7 from "../assets/pc7.png";
import pc8 from "../assets/pc8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function ProductCard() {
  const myarr = [
    {
      img: pc1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc4,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc5,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc6,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc7,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      img: pc8,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
  ];
  return (
    <div className="custom-container flex justify-between flex-wrap gap-9 px-36 py-12">
      {myarr.map((item) => (
        <div className="flex flex-col items-center ">
          <img className="w-60 h-[427px]" src={item.img} alt="" />
          <div className="flex flex-col gap-3 items-center pt-6  pb-9">
            <h5 className="font-mont font-bold text-base text-[#252B42]">
              {item.title}
            </h5>
            <p className="font-mont font-bold text-sm text-[#737373]">
              {item.department}
            </p>
            <div className="flex gap-3">
              <h5 className="font-mont font-bold text-base text-[#BDBDBD]">
                {item.oldPrice}
              </h5>
              <h5 className="font-mont font-bold text-base text-[#23856D]">
                {item.newPrice}
              </h5>
            </div>
            <div className="flex gap-2">
              <button>
                <FontAwesomeIcon
                  className="w-fit text-[#23A6F0]"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-[#23856D]"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-[#E77C40]"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-[#252B42]"
                  icon={faCircle}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
