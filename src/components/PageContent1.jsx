import React from "react";
import ep1 from "../assets/ep1.png";
import ep2 from "../assets/ep2.png";
import ep3 from "../assets/ep3.png";
import ep4 from "../assets/ep4.png";

function PageContent1() {
  return (
    <div>
      <div className="mobile-container md:custom-container flex flex-col md:flex-row justify-center gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex w-[325px] h-[500px] md:w-[500px] md:h-[500px] relative">
            <div className="flex items-end p-6 absolute w-full h-full">
              <button className="bg-white font-mont font-bold text-base w-44 h-12">
                MEN
              </button>
            </div>
            <img className="object-cover" src={ep1} alt="" />
          </div>
          <div className="flex w-[325px] h-[500px] md:w-60 md:h-[500px] relative">
            <div className="flex items-end p-6 absolute w-full h-full">
              <button className="bg-white font-mont font-bold text-base w-32 h-12">
                WOMEN
              </button>
            </div>
            <img
              className="object-cover w-[325px] h-[500px] md:w-60 md:h-[500px]"
              src={ep2}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="w-[325px] flex md:w-60 h-60 relative">
              <div className="flex items-end p-3 absolute w-full h-full">
                <button className="bg-white font-mont font-bold text-base w-44 h-12">
                  ACCESSORIES
                </button>
              </div>
              <img className="w-[325px] object-cover" src={ep3} alt="" />
            </div>
          </div>
          <div>
            <div className="w-[325px] flex md:w-60 h-60 relative">
              <div className="flex items-end p-6 absolute w-full h-full">
                <button className="bg-white font-mont font-bold text-base w-32 h-12">
                  KIDS
                </button>
              </div>
              <img className="w-[325px] object-cover" src={ep4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent1;
