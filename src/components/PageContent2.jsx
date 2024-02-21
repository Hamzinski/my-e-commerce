import React from "react";
import asiap1 from "../assets/asiap1.png";
function PageContent2() {
  return (
    <div className="custom-container flex flex-col gap-6 md:gap-0 md:flex-row justify-around items-center mt-20 md:my-1 ">
      <div className="flex flex-col gap-9 max-w-md text-center">
        <h5 className="md:text-start font-mont font-bold text-base text-muted-text-color">
          SUMMER 2020
        </h5>
        <h1 className="md:text-start font-mont font-bold text-5xl text-dark-text-color">
          Part of the Neural Universe
        </h1>
        <h4 className="md:text-start font-mont font-normal text-xl text-second-text-color">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-9">
          <button className="w-fit font-mont font-bold text-sm text-white rounded-md bg-success-color py-3.5 px-10">
            BUY NOW
          </button>
          <button className="w-fit font-mont font-bold text-sm text-success-text-color rounded-md bg-white border-1 border-success-border-color py-3.5 px-10">
            READ MORE
          </button>
        </div>
      </div>
      <img className="md:order-first" src={asiap1} alt="" />
    </div>
  );
}

export default PageContent2;
