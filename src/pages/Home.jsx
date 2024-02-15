import React from "react";
import Header from "../layouts/Header";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import ep1 from "../assets/ep1.png";
import ep2 from "../assets/ep2.png";
import ep3 from "../assets/ep3.png";
import ep4 from "../assets/ep4.png";
import asiap1 from "../assets/asiap1.png";
import ProductCard from "../components/ProductCard";
import PostCard from "../components/PostCard";
import Footer from "../layouts/Footer";
function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="flex gap-9 flex-col justify-center items-center py-24">
        <div className="flex gap-3 flex-col items-center">
          <h3 className="font-mont font-bold text-2xl text-[#252B42]">
            EDITOR’S PICK
          </h3>
          <p className="font-mont font-medium text-sm text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-6">
            <div className="flex w-[500px] h-[500px] relative">
              <div className="flex items-end p-6 absolute w-full h-full">
                <button className="bg-white font-mont font-bold text-base w-44 h-12">
                  MEN
                </button>
              </div>
              <img src={ep1} alt="" />
            </div>
            <div className="flex w-60 h-[500px] relative">
              <div className="flex items-end p-6 absolute w-full h-full">
                <button className="bg-white font-mont font-bold text-base w-32 h-12">
                  WOMEN
                </button>
              </div>
              <img src={ep2} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex w-60 h-60 relative">
                <div className="flex items-end p-3 absolute w-full h-full">
                  <button className="bg-white font-mont font-bold text-base w-44 h-12">
                    ACCESSORIES
                  </button>
                </div>
                <img src={ep3} alt="" />
              </div>
            </div>
            <div>
              <div className="flex w-60 h-60 relative">
                <div className="flex items-end p-6 absolute w-full h-full">
                  <button className="bg-white font-mont font-bold text-base w-32 h-12">
                    KIDS
                  </button>
                </div>
                <img src={ep4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h4 className="font-mont font-bold text-xl text-[#737373]">
          Featured Products
        </h4>
        <h3 className="font-mont font-bold text-2xl text-[#252B42]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-mont font-medium text-sm text-[#737373]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <ProductCard />
      <Slider2 />
      <div>
        <div className="custom-container flex justify-around items-center py-1 ">
          <img src={asiap1} alt="" />
          <div className="flex flex-col gap-9 max-w-md ">
            <h5 className="font-mont font-bold text-base text-[#BDBDBD]">
              SUMMER 2020
            </h5>
            <h1 className="font-mont font-bold text-5xl text-[#252B42]">
              Part of the Neural Universe
            </h1>
            <h4 className="font-mont font-normal text-xl text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex gap-9">
              <button className="w-fit font-mont font-bold text-sm text-[#FFFFFF] rounded-md bg-[#2DC071] py-3.5 px-10">
                BUY NOW
              </button>
              <button className="w-fit font-mont font-bold text-sm text-[#2DC071] rounded-md bg-[#FFFFFF] border-1 border-[#2DC071] py-3.5 px-10">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-24">
        <div className="flex flex-col gap-6 items-center max-w-md">
          <h4 className="font-mont font-bold text-sm text-[#23A6F0]">
            Practice Advice
          </h4>
          <h3 className="font-mont font-bold text-4xl text-[#252B42]">
            Featured Posts
          </h3>
          <p className="font-mont font-medium text-sm text-center text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <PostCard />
      <Footer />
    </>
  );
}

export default Home;
