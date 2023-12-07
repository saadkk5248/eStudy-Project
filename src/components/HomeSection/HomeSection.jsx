import React from "react";
import Button from "../../layout/Button";
import { Link } from "react-scroll";
import heroImg from "../../assets/hero.svg";

export function HomeSection() {
  return (
    <div className="container">
      <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
        <div className="w-2/4 text-center">
          <h2 className="text-5xl font-extrabold leading-tight">
            Knowledge With
          </h2>
          <span className="text-brightGreen text-5xl font-bold">eStudy</span>
          <p className="text-lightText mt-5 text-start">
            eStudy is your gateway to the world of limitless of learning
            possibilities. With our cutting-edge eLearning platform, you can
            explore a vast library of courses, from academic sunject to
            practical skills, all designed to help you to achieve your goals.
            eStudy is your gateway to the world of limitless of learning
            possibilities. With our
          </p>
          <Link to="/contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
          </Link>
        </div>
        <div className="w-full md:w-2/4">
          <img src={heroImg} alt="img" />
        </div>
      </div>
    </div>
  );
}
