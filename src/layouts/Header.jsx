import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetchCategories } from "../store/actions/GlobalAction";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/actions/UserAction";
import { useHistory } from "react-router-dom";
import Hamburger from "../components/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "reactstrap";
import { useSelector } from "react-redux";
import Gravatar from "../components/Gravatar.jsx";
import useQuery from "../Hooks/useQuery.jsx";
const contactInfo = [
  { icon: faPhone, text: "(225) 555-0118" },
  { icon: faEnvelope, text: "michelle.rivera@example.com" },
];

const socialMediaIcons = [
  { icon: faInstagram },
  { icon: faYoutube },
  { icon: faFacebook },
  { icon: faTwitter },
];

const links = [
  { text: "About", href: "/about" },
  { text: "Blog", href: "/team" },
  { text: "Contact", href: "/contact" },
  { text: "Pages", href: "#" },
];

const buttons = [
  {
    icon: faMagnifyingGlass,
    text: "",
    className: "text-primary-color text-2xl md:text-base",
    href: "#",
  },
  {
    icon: faCartShopping,
    text: "",
    className: "text-primary-color text-2xl md:text-base",
    href: "#",
  },
  {
    icon: faHeart,
    text: "",
    className: "text-primary-color text-2xl md:text-base",
    href: "#",
  },
];

function Header() {
  const {
    data,
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryDatawithCategory,
  } = useQuery();

  const filterCategory = (id, gender) => {
    getQueryDatawithCategory(id, gender);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const user = useSelector((store) => store.user.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    delete axios.defaults.headers.common["Authorization"];
    history.push("/login");
  };

  const allCategories = useSelector((store) => store.global.categories);

  const renderDropdownItems = (gender) => {
    return allCategories
      .filter((category) => category.code.startsWith(`${gender}:`))
      .map((category, index) => (
        <DropdownItem
          key={index}
          tag={NavLink}
          onClick={() => filterCategory(category.id, category.gender)}
          /*  href={`/shopping/${
            gender === "k" ? "women" : "men"
          }/${category.title.toLowerCase()}`} */
          className="font-mont text-second-text-color"
        >
          {category.title}
        </DropdownItem>
      ));
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="flex  flex-col  ">
        <div className="hidden md:block bg-dark-background-color p-6 ">
          <div className="flex justify-between custom-container">
            <div className="flex gap-6">
              {contactInfo.map((info, index) => (
                <a key={index} className="flex items-center gap-2" href="">
                  <FontAwesomeIcon className="text-white" icon={info.icon} />
                  <h6 className="font-mont text-white text-sm font-bold">
                    {info.text}
                  </h6>
                </a>
              ))}
            </div>

            <h6 className="font-mont text-white text-sm font-bold">
              Follow Us and get a chance to win 80% off
            </h6>

            <div className="flex gap-4">
              <h6 className="font-mont text-white text-sm font-bold">
                Follow Us :
              </h6>
              {socialMediaIcons.map((icon, index) => (
                <button key={index} href="">
                  <FontAwesomeIcon className="text-white" icon={icon.icon} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" bg-white p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 custom-container ">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row ">
              <div className="flex justify-between items-center">
                <h3 className="font-mont text-2xl font-bold text-dark-text-color">
                  Bandage
                </h3>
                <div className="block md:hidden">
                  <button onClick={toggleMobileMenu}>
                    <Hamburger />
                  </button>
                </div>
              </div>

              <div
                className={`${
                  mobileMenuOpen
                    ? "flex md:flex flex-col items-center md:flex-row ml-0 md:ml-32"
                    : "hidden md:visible md:flex flex-col items-center md:flex-row ml-0 md:ml-32"
                }`}
              >
                <NavLink
                  className="font-mont text-3xl md:text-sm font-normal md:font-bold text-second-text-color"
                  href="/"
                >
                  Home
                </NavLink>

                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle
                    className="font-mont text-3xl md:text-sm font-normal md:font-bold text-second-text-color"
                    caret
                    onClick={toggleDropdown}
                  >
                    Shop
                  </DropdownToggle>
                  <DropdownMenu className="px-3 md:px-0">
                    <div className="flex">
                      <div>
                        <DropdownItem
                          className="font-mont font-bold text-lg text-primary-color"
                          tag={NavLink}
                          href="/shopping"
                        >
                          All Products
                        </DropdownItem>
                      </div>
                      <div className="flex flex-col">
                        <DropdownItem
                          className="font-mont font-bold text-lg text-primary-color"
                          header
                        >
                          Kadın
                        </DropdownItem>
                        {renderDropdownItems("k")}
                      </div>
                      <div className="flex flex-col">
                        <DropdownItem
                          className="font-mont font-bold text-lg text-primary-color"
                          header
                        >
                          Erkek
                        </DropdownItem>
                        {renderDropdownItems("e")}
                      </div>
                    </div>
                  </DropdownMenu>
                </Dropdown>
                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    className="font-mont text-3xl md:text-sm font-normal md:font-bold text-second-text-color"
                    href={link.href}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </div>
            <div
              className={`${
                mobileMenuOpen
                  ? "flex md:flex flex-col md:flex-row items-center"
                  : "hidden md:visible md:flex flex-col md:flex-row items-center"
              }`}
            >
              <div className="flex items-center gap-2">
                {user && <Gravatar email={user.email} />}{" "}
                <p className="font-mont font-bold text-2xl md:text-base text-primary-color">
                  {user && user.name}
                </p>
              </div>
              {token ? (
                <NavLink
                  className="font-mont font-bold text-2xl md:text-base text-primary-color"
                  href="#"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              ) : (
                <>
                  <NavLink
                    className="font-mont font-bold text-2xl md:text-base text-primary-color"
                    href="/login"
                  >
                    <FontAwesomeIcon icon={faUser} />
                    Login
                  </NavLink>
                  <NavLink
                    className="font-mont font-bold text-2xl md:text-base text-primary-color"
                    href="/signup"
                  >
                    <FontAwesomeIcon icon={faAddressCard} />
                    Register
                  </NavLink>
                </>
              )}
              <div className="flex">
                {buttons.map((button, index) => (
                  <NavLink
                    key={index}
                    className={button.className}
                    href={button.href}
                  >
                    <FontAwesomeIcon icon={button.icon} /> {button.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
