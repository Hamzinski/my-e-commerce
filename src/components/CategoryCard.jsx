import React from "react";
import { Link } from "react-router-dom";
import mbc1 from "../assets/mediabgcover.png";
import mbc2 from "../assets/mediabgcover2.png";
import mbc3 from "../assets/mediabgcover3.png";
import mbc4 from "../assets/mediabgcover4.png";
import mbc5 from "../assets/mediabgcover5.png";
import { useSelector } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const items = [
  {
    id: 1,
    title: "Ceket",
    gender: "k",
    img: "https://workintech-fe-ecommerce.onrender.com/assets/category-img/category_kadın_ceket.jpg",
    rating: 3.8,
  },
  {
    id: 1,
    title: "Ceket",
    gender: "k",
    img: "https://workintech-fe-ecommerce.onrender.com/assets/category-img/category_kadın_ceket.jpg",
    rating: 3.8,
  },
  {
    id: 1,
    title: "Ceket",
    gender: "k",
    img: "https://workintech-fe-ecommerce.onrender.com/assets/category-img/category_kadın_ceket.jpg",
    rating: 3.8,
  },
  {
    id: 1,
    title: "Ceket",
    gender: "k",
    img: "https://workintech-fe-ecommerce.onrender.com/assets/category-img/category_kadın_ceket.jpg",
    rating: 3.8,
  },
  {
    id: 1,
    title: "Ceket",
    gender: "k",
    img: "https://workintech-fe-ecommerce.onrender.com/assets/category-img/category_kadın_ceket.jpg",
    rating: 3.8,
  },
];

function CategoryCard() {
  const topCategories = useSelector((store) => store.global.categories);
  const sortedCategories = topCategories
    .slice()
    .sort((a, b) => b.rating - a.rating);
  const top5Categories = sortedCategories.slice(0, 5);
  return (
    <div>
      <div className="bg-light-gray-1">
        <div className="custom-container flex flex-col py-8">
          <div className="justify-between flex flex-col md:flex-row items-center md:items-stretch gap-9 md:gap-0">
            <h3 className="font-mont font-bold text-2xl text-dark-text-color">
              Shop
            </h3>
            <div className="flex items-center">
              <p className="font-mont font-bold text-sm text-dark-text-color ">
                Home{" "}
              </p>
              <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
              <p className="font-mont font-bold text-sm text-muted-text-color">
                Shop
              </p>
            </div>
          </div>
        </div>
        <div className="custom-container flex flex-col md:flex-row items-center md:items-stretch justify-between gap-3">
          {top5Categories.map((category, index) => (
            <Link
              to={`/shopping/${
                category.gender === "k" ? "kadın" : "erkek"
              }/${category.title.toLowerCase()}`}
              key={index}
              className="md:w-52 md:h-56 w-80 h-72 flex flex-col justify-center items-center gap-3"
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="font-mont font-bold text-white text-base">
                {category.title}
              </p>
              <p className="font-mont font-medium text-white text-base">
                Rating: {category.rating}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
