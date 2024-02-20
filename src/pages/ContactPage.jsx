import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import logoface from "../assets/logoface.png";
import logoinsta from "../assets/logoinsta.png";
import logolinkedln from "../assets/logolinkedln.png";
import logotw from "../assets/logotw.png";
import contactpic from "../assets/contactpic.png";
import arrow from "../assets/arrow.png";
function ContactPage() {
  return (
    <div>
      <Header />
      <div className="custom-container flex justify-between items-center">
        <div className="flex flex-col w-1/3 gap-9">
          <p className="font-mont font-bold text-base text-dark-text-color">
            CONTACT US
          </p>
          <p className="font-mont font-bold text-6xl text-dark-text-color">
            Get in touch today!
          </p>
          <p className="font-mont font-medium text-xl text-second-text-color">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="font-mont font-bold text-2xl text-dark-text-color">
            Phone ; +451 215 215{" "}
          </p>
          <p className="font-mont font-bold text-2xl text-dark-text-color">
            Fax : +451 215 215
          </p>
          <div className="flex gap-9">
            <img src={logotw} alt="" />
            <img src={logoface} alt="" />
            <img src={logoinsta} alt="" />
            <img src={logolinkedln} alt="" />
          </div>
        </div>
        <img src={contactpic} alt="" />
      </div>
      <div className="custom-container flex flex-col text-center items-center gap-12 w-1/3 my-32">
        <p className="font-mont font-bold text-4xl text-dark-text-color">
          Get answers to all your questions.
        </p>
        <p className="font-mont font-medium text-xl text-second-text-color">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <button className="bg-primary-bg font-mont font-bold text-sm text-white px-10 py-3.5 rounded-md w-fit">
          CONTACT OUR COMPANY
        </button>

        <div className="flex gap-9 text-second-text-color">
          <img src={logotw} alt="" />
          <img src={logoface} alt="" />
          <img src={logoinsta} alt="" />
          <img src={logolinkedln} alt="" />
        </div>
      </div>
      <div className="custom-container flex flex-col items-center gap-12 my-32">
        <img className="w-16 h-16" src={arrow} alt="" />
        <p className="font-mont font-bold text-base text-dark-text-color">
          WE Can't WAIT TO MEET YOU
        </p>
        <p className="font-mont font-bold text-6xl text-dark-text-color">
          Let’s Talk
        </p>
        <button className="bg-primary-bg font-mont font-bold text-sm text-white px-10 py-3.5 rounded-md w-fit">
          Try it free now
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
