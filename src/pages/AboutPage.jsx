import React from "react";
import BrandsTab from "../layouts/BrandsTab";
import AboutUsHero from "../assets/aboutUsHero.png";
import BgVideo from "../assets/bgvideo.png";
import imgWomen from "../assets/imgwomen.png";
import user1 from "../assets/team1user1.jpg";
import user2 from "../assets/team1user2.jpg";
import user3 from "../assets/team1user3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const data = [
  { value: "15K", label: "Happy Customers" },
  { value: "150K", label: "Monthly Visitors" },
  { value: "15", label: "Countries Worldwide" },
  { value: "100+", label: "Top Partners" },
];
const myarr = [
  {
    img: user1,
    title: "Username",
    department: "Profession",
  },
  {
    img: user2,
    title: "Username",
    department: "Profession",
  },
  {
    img: user3,
    title: "Username",
    department: "Profession",
  },
];

const socialMediaIcons = [
  { icon: faInstagram },
  { icon: faFacebook },
  { icon: faTwitter },
];
function AboutPage() {
  return (
    <div className="mt-24 md:mt-0">
      <div className="custom-container flex flex-col md:flex-row justify-between mt-36 md:mt-0">
        <div className="flex flex-col items-center md:items-start gap-9 text-center justify-center w-full md:w-96">
          <h5 className="font-mont font-bold text-base text-dark-text-color">
            ABOUT COMPANY
          </h5>
          <h1 className="font-mont font-bold text-6xl text-dark-text-color">
            ABOUT US
          </h1>
          <h4 className="font-mont font-bold text-base text-second-text-color md:text-start w-64 md:w-full">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="bg-primary-bg text-white px-10 py-3.5 rounded-md">
            Get Quote Now
          </button>
        </div>
        <div className="p-6 md:p-0 mt-6 md:mt-0">
          <img src={AboutUsHero} alt="" />
        </div>
      </div>
      <div className="py-12 px-12 md:px-0">
        <div className="custom-container flex flex-col text-center md:flex-row justify-center items-center gap-16 py-24">
          <div className="flex flex-col  items-center md:items-stretch w-96 gap-6 md:gap-0 p-6 md:p-0">
            <p className="text-danger-text-color font-mont font-semibold text-sm md:text-start">
              Problems trying
            </p>
            <h3 className="text-dark-text-color font-mont font-bold text-2xl md:text-start">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <p className="w-full md:w-2/5 font-mont font-semibold text-second-text-color text-sm md:text-start">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="custom-container flex flex-col md:flex-row justify-center py-12 gap-24">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="font-mont font-bold text-6xl text-dark-text-color">
                {item.value}
              </p>
              <p className="font-mont font-bold text-base text-second-text-color">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center p-12 md:py-12">
          <img className="rounded-xl" src={BgVideo} alt="" />
          <button className="absolute  rounded-full bg-primary-bg w-20 h-20">
            <FontAwesomeIcon
              className="text-white text-3xl m-auto"
              icon={faPlay}
            />
          </button>
        </div>
      </div>
      <div className="custom-container flex flex-col mt-12 md:mt-0">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-dark-text-color font-mont font-bold text-4xl ">
            Meet Our Team
          </p>
          <p className="text-second-text-color font-mont font-semibold text-sm text-center w-2/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-9 py-16">
          {myarr.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img className="" src={item.img} alt="" />
              <div className="flex flex-col gap-3 items-center pt-6  pb-9">
                <h5 className="font-mont font-bold text-base text-dark-text-color">
                  {item.title}
                </h5>
                <p className="font-mont font-bold text-sm text-second-text-color">
                  {item.department}
                </p>
                <div className="flex gap-6">
                  {" "}
                  {socialMediaIcons.map((icon, index) => (
                    <button className="text-2xl" key={index} href="">
                      <FontAwesomeIcon
                        className="text-primary-color"
                        icon={icon.icon}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12">
        <div className="custom-container flex flex-col gap-9 justify-center items-center text-center">
          <p className="font-mont font-bold text-4xl text-dark-text-color w-1/2 md:w-full">
            Big Companies Are Here
          </p>
          <p className="font-mont font-semibold text-sm text-second-text-color text-center w-3/4 md:w-2/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <BrandsTab />

      <div className="flex custom-container">
        <div className=" bg-hover-color text-white p-12 md:p-48">
          <div className="flex flex-col gap-9 items-center md:items-stretch text-center">
            <p className="font-mont font-bold text-base md:text-start">
              {" "}
              WORK WITH US
            </p>
            <p className="font-mont font-bold text-4xl md:text-start">
              Now Let's grow Yours
            </p>
            <p className="font-mont font-medium text-sm md:text-start">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="font-mont font-bold border-2 border-white rounded px-10 py-3.5 w-fit">
              Button
            </button>
          </div>
        </div>

        <img className="hidden md:block" src={imgWomen} alt="" />
      </div>
    </div>
  );
}

export default AboutPage;
