import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BrandsTab from "../layouts/BrandsTab";
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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  addToCart,
  updateCartItemCount,
  toggleCheckItemAction,
} from "../store/actions/ShoppingCartAction";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

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
function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const handleAddToCart = (product) => {
    toast.success("Sepete eklendi.");
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      dispatch(updateCartItemCount(product.id, existingItem.count + 0));
    } else {
      dispatch(addToCart(1, product));
    }
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [selectedOption, setSelectedOption] = useState("Select Options");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const history = useHistory();
  const [selectedProduct, setSelectedProduct] = useState();
  const { productId } = useParams();
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    const url = "https://workintech-fe-ecommerce.onrender.com/products/";
    fetch(`${url}${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSelectedProduct(data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);
  useEffect(() => {
    const jumperSection = document.getElementById("jumperSection");
    if (jumperSection) {
      jumperSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const toggleCheckbox = (productId, checked) => {
    dispatch(toggleCheckItemAction(productId, checked));
  };
  return (
    <div className="mt-32 md:mt-0" id="jumperSection">
      <ToastContainer />
      <div className="py-8 bg-light-gray-1">
        <div className="custom-container custom-padding flex justify-between">
          <button
            onClick={goBack}
            className="bg-primary-bg font-mont font-bold px-2.5 py-2.5 text-white rounded-md"
          >
            Go Back
          </button>
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
        <div className="custom-container items-center md:items-stretch flex flex-col md:flex-row gap-12 py-12">
          <div>
            {selectedProduct && <Slider3 images={selectedProduct.images} />}
          </div>
          <div className="flex flex-col gap-3 w-4/5 md:w-1/3">
            <p className="text-dark-text-color font-mont font-semibold text-xl">
              {selectedProduct?.name}
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
                {selectedProduct?.sell_count} Reviews
              </p>
            </div>
            <p className="text-success-text-color font-mont font-bold text-2xl">
              ${selectedProduct?.price}
            </p>
            <div className="flex gap-2">
              <p className="text-second-text-color font-mont font-bold text-sm">
                Availability :
              </p>
              <p className="text-primary-color font-mont font-bold text-sm">
                {selectedProduct?.stock} units left in stock.
              </p>
            </div>
            <p className="text-gray-text-color font-mont font-semibold text-sm ">
              {selectedProduct?.description}
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
              <div>
                <Dropdown
                  className="bg-primary-bg font-mont"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                >
                  <DropdownToggle caret>{selectedOption}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleOptionSelect("Small")}>
                      Small
                    </DropdownItem>
                    <DropdownItem onClick={() => handleOptionSelect("Medium")}>
                      Medium
                    </DropdownItem>
                    <DropdownItem onClick={() => handleOptionSelect("Large")}>
                      Large
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <button className="bg-white rounded-full w-10 h-10 border-1 border-gray-border transition-all duration-100 hover:w-12 hover:h-12 hover:text-primary-color cursor-pointer">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  toggleCheckbox(selectedProduct.id, !selectedProduct.checked);
                }}
                className="bg-white rounded-full w-10 h-10 border-1 border-gray-border transition-all duration-100 hover:w-12 hover:h-12 hover:text-primary-color cursor-pointer"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="bg-white rounded-full w-10 h-10 border-1 border-gray-border transition-all duration-100 hover:w-12 hover:h-12 hover:text-primary-color cursor-pointer">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-col px-3 md:px-0">
        <div className="flex justify-center gap-6 font-mont font-semibold text-second-text-color pt-12 py-6 ">
          <p>Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span className="text-secondary-color">(0)</span>{" "}
          </p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-center gap-9 py-12 px-12 md:px-0">
          <img src={product1} alt="" />
          <div className="w-full md:w-80 flex flex-col gap-6">
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
          <div className="flex items-center md:items-stretch flex-col gap-3">
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
      <div className="custom-container flex flex-col px-12 md:px-36 py-12">
        <p className="text-dark-text-color text-center font-mont font-bold text-2xl">
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
    </div>
  );
}

export default ProductPage;
