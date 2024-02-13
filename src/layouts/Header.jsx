import React from "react";
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
    className: "font-mont font-bold text-[#23A6F0]",
  },
  { icon: faMagnifyingGlass, text: "", className: "text-[#23A6F0]" },
  { icon: faCartShopping, text: "", className: "text-[#23A6F0]" },
  { icon: faHeart, text: "", className: "text-[#23A6F0]" },
];

function Header() {
  return (
    <>
      <div className="flex  flex-col justify-center   ">
        <div className="flex justify-between bg-[#252B42] p-6 ">
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

        <div className="flex justify-between items-center  bg-[#FFFFFF] p-6">
          <div className="flex items-center ml-14">
            <h3 className="font-mont text-2xl font-bold">Bandage</h3>
            <div className="flex gap-3 ml-32">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="font-mont text-sm font-bold text-[#737373]"
                  href={link.href}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-9">
            {buttons.map((button, index) => (
              <button key={index} className={button.className}>
                <FontAwesomeIcon icon={button.icon} /> {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
