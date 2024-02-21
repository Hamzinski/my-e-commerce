import React from "react";
import Hamburger from "../components/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
  { text: "Home", href: "#" },
  { text: "Shop", href: "#" },
  { text: "About", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Contact", href: "#" },
  { text: "Pages", href: "#" },
];

const buttons = [
  {
    icon: faUser,
    text: "Login / Register",
    className: "font-mont font-bold text-2xl md:text-base text-primary-color",
  },
  {
    icon: faMagnifyingGlass,
    text: "",
    className: "text-primary-color text-2xl md:text-base",
  },
  {
    icon: faCartShopping,
    text: "",
    className: "text-primary-color text-2xl md:text-base",
  },
  {
    icon: faHeart,
    text: "",
    className: "text-primary-color text-2xl md:text-base",
  },
];

function Header() {
  return (
    <>
      <div className="flex  flex-col  ">
        <div className="hidden md:block bg-dark-background-color p-6 ">
          <div className="flex justify-between custom-container">
            <div className="flex gap-6">
              {contactInfo.map((info, index) => (
                <button key={index} className="flex items-center gap-2" href="">
                  <FontAwesomeIcon className="text-white" icon={info.icon} />
                  <h6 className="font-mont text-white text-sm font-bold">
                    {info.text}
                  </h6>
                </button>
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
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 custom-container">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row ">
              <div className="flex justify-between items-center">
                <h3 className="font-mont text-2xl font-bold text-dark-text-color">
                  Bandage
                </h3>
                <div className="block md:hidden">
                  <Hamburger />
                </div>
              </div>

              <div className="flex flex-col items-center md:flex-row gap-3 ml-0 md:ml-32">
                {links.map((link, index) => (
                  <a
                    key={index}
                    className="font-mont text-3xl md:text-sm font-normal md:font-bold text-second-text-color"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-9">
              {buttons.map((button, index) => (
                <button key={index} className={button.className}>
                  <FontAwesomeIcon icon={button.icon} /> {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
