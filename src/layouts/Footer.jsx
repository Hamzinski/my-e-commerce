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
        <div className="flex items-center justify-between bg-[#FAFAFA] p-12 px-48 ">
          <h3 className="font-mont text-2xl font-bold">Bandage</h3>
          <div className="flex gap-6">
            {" "}
            {socialMediaIcons.map((icon, index) => (
              <button className="text-3xl" key={index} href="">
                <FontAwesomeIcon className="text-[#23A6F0]" icon={icon.icon} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between bg-[#FFFFFF] p-12 px-48">
          {links.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h5 className="font-mont font-bold text-base">{section.title}</h5>
              {section.items &&
                section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    className="text-[#737373] text-sm font-bold"
                    href=""
                  >
                    {item}
                  </a>
                ))}
              {section.inputGroup && (
                <InputGroup>
                  <Input placeholder="Your Email" />
                  <Button className="bg-[#23A6F0]">Subscribe</Button>
                </InputGroup>
              )}
            </div>
          ))}
        </div>
        <div className="bg-[#FAFAFA] p-6 px-48">
          <p className="font-mont text-sm text-[#737373] font-bold">
            Made With Love By Finland All Right Reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
