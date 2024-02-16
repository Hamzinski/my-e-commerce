import React from "react";
import asiap1 from "../assets/asiap1.png";
function PageContent2() {
  return (
    <div>
      <div>
        <div className="custom-container flex justify-around items-center py-1 ">
          <img src={asiap1} alt="" />
          <div className="flex flex-col gap-9 max-w-md ">
            <h5 className="font-mont font-bold text-base text-muted-text-color">
              SUMMER 2020
            </h5>
            <h1 className="font-mont font-bold text-5xl text-dark-text-color">
              Part of the Neural Universe
            </h1>
            <h4 className="font-mont font-normal text-xl text-second-text-color">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex gap-9">
              <button className="w-fit font-mont font-bold text-sm text-white rounded-md bg-success-color py-3.5 px-10">
                BUY NOW
              </button>
              <button className="w-fit font-mont font-bold text-sm text-success-text-color rounded-md bg-white border-1 border-success-border-color py-3.5 px-10">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent2;
