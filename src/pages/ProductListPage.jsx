import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { TbCategoryFilled } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import BrandsTab from "../layouts/BrandsTab";

function ProductListPage() {
  return (
    <div>
      <Header />
      <CategoryCard />
      <div className="custom-container p-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
          <h6 className="font-mont font-bold text-base text-second-text-color">
            Showing all 12 results
          </h6>
          <div className="flex items-center gap-3">
            <h6 className="font-mont font-bold text-base text-second-text-color">
              Views:
            </h6>
            <div className="w-12 h-12 flex justify-center items-center border-solid border-1 rounded-xl">
              <TbCategoryFilled className="w-8 h-8" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center border-solid border-1 rounded-xl">
              <MdChecklist className="w-8 h-8" />
            </div>
          </div>
          <button className="bg-primary-bg font-mont font-bold px-5 py-2.5 text-white rounded-md ">
            Filter
          </button>
        </div>
      </div>
      <ProductCard />
      <BrandsTab />
      <Footer />
    </div>
  );
}

export default ProductListPage;
