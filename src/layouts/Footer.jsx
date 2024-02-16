import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const links = [
  {
    title: "Company Info",
    items: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  { title: "Legal", items: ["About Us", "Carrier", "We are hiring", "Blog"] },
  {
    title: "Features",
    items: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
  {
    title: "Get In Touch",
    inputGroup: true,
  },
];
const socialMediaIcons = [
  { icon: faInstagram },
  { icon: faFacebook },
  { icon: faTwitter },
];
function Footer() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" bg-light-gray-1 p-12  ">
          <div className="custom-container flex items-center justify-between">
            <h3 className="font-mont text-2xl font-bold text-dark-text-color">
              Bandage
            </h3>
            <div className="flex gap-6">
              {" "}
              {socialMediaIcons.map((icon, index) => (
                <button className="text-3xl" key={index} href="">
                  <FontAwesomeIcon
                    className="text-primary-color"
                    icon={icon.icon}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" bg-white p-12 ">
          <div className="custom-container flex justify-between">
            {links.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h5 className="font-mont font-bold text-base">
                  {section.title}
                </h5>
                {section.items &&
                  section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      className="text-second-text-color text-sm font-bold"
                      href=""
                    >
                      {item}
                    </a>
                  ))}
                {section.inputGroup && (
                  <InputGroup>
                    <Input placeholder="Your Email" />
                    <Button className="bg-primary-bg">Subscribe</Button>
                  </InputGroup>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-light-gray-1 p-6 ">
          <div className="custom-container">
            <p className="font-mont text-sm text-second-text-color font-bold">
              Made With Love By Finland All Right Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
