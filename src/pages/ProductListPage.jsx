import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import fa1 from "../assets/fabrands1.png";
import fa2 from "../assets/fabrands2.png";
import fa3 from "../assets/fabrands3.png";
import fa4 from "../assets/fabrands4.png";
import fa5 from "../assets/fabrands5.png";
import fa6 from "../assets/fabrands6.png";
import { TbCategoryFilled } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
const images = [fa1, fa2, fa3, fa4, fa5, fa6];

function ProductListPage() {
  return (
    <div>
      <Header />
      <CategoryCard />
      <div className="custom-container p-12">
        <div className="flex justify-between items-center">
          <h6 className="font-mont font-bold text-base text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex items-center gap-3">
            <h6 className="font-mont font-bold text-base text-[#737373]">
              Views:
            </h6>
            <div className="w-12 h-12 flex justify-center items-center border-solid border-1 rounded-xl">
              <TbCategoryFilled className="w-8 h-8" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center border-solid border-1 rounded-xl">
              <MdChecklist className="w-8 h-8" />
            </div>
          </div>
          <button className="bg-[#23A6F0] font-mont font-bold px-5 py-2.5 text-white rounded-md ">
            Filter
          </button>
        </div>
      </div>
      <ProductCard />

      <div className="custom-container flex flex-wrap justify-between p-12">
        {images.map((src, index) => (
          <img key={index} className="object-contain" src={src} alt="" />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ProductListPage;
