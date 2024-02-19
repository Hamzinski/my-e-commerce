import React from "react";
import Header from "../layouts/Header";
import BrandsTab from "../layouts/BrandsTab";
import Footer from "../layouts/Footer";
import Slider3 from "../components/Slider3";
import product1 from "../assets/product1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product2 from "../assets/product2.png";
import {
  faStar as faStar1,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faStar2,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const myarr = [
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];
const data = [
  {
    subText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    subText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    subText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
];
const data1 = [
  "the quick fox jumps over the lazy dog",
  "the quick fox jumps over the lazy dog",
  "the quick fox jumps over the lazy dog",
  "the quick fox jumps over the lazy dog",
];
function ProductPage() {
  return (
    <div>
      <Header />
      <div className="py-8 bg-light-gray-1">
        <div className="custom-container flex items-center">
          <p className="font-mont font-bold text-sm text-dark-text-color ">
            Home{" "}
          </p>
          <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
          <p className="font-mont font-bold text-sm text-muted-text-color">
            Shop
          </p>
        </div>
        <div className="custom-container flex gap-12 py-12">
          <div>
            <Slider3 />
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <p className="text-dark-text-color font-mont font-semibold text-xl">
              Floating Phone
            </p>
            <div className="flex items-center gap-3">
              <div className="text-[#F3CD03] text-xl">
                <FontAwesomeIcon icon={faStar2} />
                <FontAwesomeIcon icon={faStar2} />
                <FontAwesomeIcon icon={faStar2} />
                <FontAwesomeIcon icon={faStar2} />
                <FontAwesomeIcon icon={faStar1} />
              </div>
              <p className="text-second-text-color font-mont font-bold text-sm">
                10 Reviews
              </p>
            </div>
            <p className="text-dark-text-color font-mont font-bold text-2xl">
              $1,139.33
            </p>
            <div className="flex">
              <p className="text-second-text-color font-mont font-bold text-sm">
                Availability :
              </p>
              <p className="text-primary-color font-mont font-bold text-sm">
                In Stock{" "}
              </p>
            </div>
            <p className="text-gray-text-color font-mont font-semibold text-sm ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr />
            <div className="flex gap-2">
              <button>
                <FontAwesomeIcon
                  className="w-fit text-primary-color"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-secondary-color"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-alert-color"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-dark-text-color"
                  icon={faCircle}
                />
              </button>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary-bg font-mont font-bold px-2.5 py-2.5 text-white rounded-md ">
                Select Options
              </button>
              <button className="bg-white rounded-full w-10 h-10 border-1 border-gray-border">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="bg-white rounded-full w-10 h-10 border-1 border-gray-border">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="bg-white rounded-full w-10 h-10 border-1 border-gray-border">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-col">
        <div className="flex justify-center gap-12 font-mont font-semibold text-second-text-color pt-12 py-6">
          <p>Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span className="text-secondary-color">(0)</span>{" "}
          </p>
        </div>
        <hr />
        <div className="flex justify-center gap-9 py-12">
          <img src={product1} alt="" />
          <div className="w-80 flex flex-col gap-6">
            <p className="text-dark-text-color font-mont font-bold text-2xl">
              the quick fox jumps over
            </p>
            {data.map((item, index) => (
              <div key={index}>
                <p className="text-second-text-color font-mont font-semibold text-sm">
                  {item.subText}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-9">
              <div>
                <p className="text-dark-text-color font-mont font-bold text-2xl">
                  the quick fox jumps over{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <div>
                <p className="text-dark-text-color font-mont font-bold text-2xl">
                  the quick fox jumps over{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center font-mont font-bold text-second-text-color text-sm">
                  <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-col px-36 py-12">
        <p className="text-dark-text-color font-mont font-bold text-2xl">
          BESTSELLER PRODUCTS
        </p>
        <div>
          <div className="flex flex-wrap justify-center gap-9 py-16">
            {myarr.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center "
              >
                <img className="" src={item.img} alt="" />
                <div className="flex flex-col gap-3 items-center pt-6  pb-3">
                  <h5 className="font-mont font-bold text-base text-dark-text-color">
                    {item.title}
                  </h5>
                  <p className="font-mont font-bold text-sm text-second-text-color">
                    {item.department}
                  </p>
                </div>
                <div className="flex gap-3">
                  <h5 className="font-mont font-bold text-base text-muted-text-color">
                    {item.oldPrice}
                  </h5>
                  <h5 className="font-mont font-bold text-base text-secondary-color">
                    {item.newPrice}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BrandsTab />
      <Footer />
    </div>
  );
}

export default ProductPage;
