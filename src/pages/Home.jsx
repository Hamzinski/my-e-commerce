import React from "react";
import PageContent1 from "../components/PageContent1";
import PageContent2 from "../components/PageContent2";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import ProductCard from "../components/ProductCard";
import PostCard from "../components/PostCard";

function Home() {
  return (
    <>
      <Slider />
      <div className="flex gap-9 flex-col justify-center items-center py-24">
        <div className="flex gap-3 flex-col items-center">
          <h3 className="font-mont font-bold text-2xl text-dark-text-color">
            EDITOR'S PICK
          </h3>
          <p className="font-mont font-medium text-sm text-second-text-color">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <PageContent1 />
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h4 className="font-mont font-bold text-xl text-second-text-color">
          Featured Products
        </h4>
        <h3 className="font-mont font-bold text-2xl text-dark-text-color">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-mont font-medium text-sm text-second-text-color">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <ProductCard />
      <Slider2 />
      <PageContent2 />
      <div className="flex justify-center py-24">
        <div className="flex flex-col gap-6 items-center max-w-md">
          <h4 className="font-mont font-bold text-sm text-primary-color">
            Practice Advice
          </h4>
          <h3 className="font-mont font-bold text-4xl text-dark-text-color">
            Featured Posts
          </h3>
          <p className="font-mont font-medium text-sm text-center text-second-text-color">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <PostCard />
    </>
  );
}

export default Home;
