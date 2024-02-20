import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import user1 from "../assets/team1user1.jpg";
import user2 from "../assets/team1user2.jpg";
import user3 from "../assets/team1user3.jpg";
import logoface from "../assets/logoface.png";
import logoinsta from "../assets/logoinsta.png";
import logolinkedln from "../assets/logolinkedln.png";
import logotw from "../assets/logotw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
  {
    img: user3,
    title: "Username",
    department: "Profession",
  },
  {
    img: user3,
    title: "Username",
    department: "Profession",
  },
  {
    img: user3,
    title: "Username",
    department: "Profession",
  },
  {
    img: user3,
    title: "Username",
    department: "Profession",
  },
  {
    img: user3,
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
function TeamPage() {
  return (
    <div>
      <Header />
      <div className="custom-container flex flex-col justify-center items-center gap-6 py-12">
        <p className="font-mont font-bold text-base text-second-text-color">
          WHAT WE DO
        </p>
        <p className="font-mont font-bold text-6xl text-dark-text-color">
          Innovation tailored for you
        </p>
        <div className="custom-container flex items-center">
          <p className="font-mont font-bold text-sm text-dark-text-color ">
            Home{" "}
          </p>
          <MdOutlineKeyboardArrowRight className="text-muted-text-color size-8" />
          <p className="font-mont font-bold text-sm text-muted-text-color">
            Team
          </p>
        </div>
      </div>
      <div className="custom-container flex py-12 gap-2">
        <img src={team1} alt="" />
        <div className="flex flex-wrap gap-2">
          <img className="max-w-[361px] max-h-[260px]" src={team2} alt="" />
          <img className="max-w-[361px] max-h-[260px]" src={team3} alt="" />
          <img className="max-w-[361px] max-h-[260px]" src={team4} alt="" />
          <img className="max-w-[361px] max-h-[260px]" src={team5} alt="" />
        </div>
      </div>
      <p className="font-mont font-bold text-5xl text-center my-12">
        Meet Our Team
      </p>
      <div className="custom-container flex flex-wrap justify-center gap-9 px-4 py-16">
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
      <div className="custom-container flex flex-col gap-9 items-center my-16">
        <p className="font-mont font-bold text-5xl text-dark-text-color">
          Start your 14 days free trial
        </p>
        <p className="w-2/6 font-mont font-semibold text-base text-second-text-color text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-primary-bg font-mont font-bold text-sm text-white px-10 py-3.5 rounded-md w-fit">
          Try it free now
        </button>
        <div className="flex gap-9">
          <img src={logotw} alt="" />
          <img src={logoface} alt="" />
          <img src={logoinsta} alt="" />
          <img src={logolinkedln} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamPage;
