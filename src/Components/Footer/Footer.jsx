import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid">
        <div className="footerSection">
          <a class="logo">
            {" "}
            <h3>
              {" "}
              <MdTravelExplore className="icon" /> Nga Thinh Travel.{" "}
            </h3>{" "}
          </a>
          <p> Experience your dream holidays with us. </p>{" "}
        </div>{" "}
        <div className="footerSection">
          <h4> Quick Links </h4>{" "}
          <ul>
            <li>
              <a href="#home"> Home </a>{" "}
            </li>{" "}
            <li>
              <a href="#packages"> Packages </a>{" "}
            </li>{" "}
            <li>
              <a href="https://www.facebook.com/ngathinhtravel"> Contact </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="footerSection">
          <h4> Follow Us </h4>{" "}
          <div className="footerIcons">
            <a
              href="https://www.facebook.com/ngathinhtravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="icon" />
            </a>{" "}
            <a
              href="https://www.instagram.com/ngathinhtravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="icon" />
            </a>{" "}
            <a
              href="mailto:contact@ngathinhtravel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgMail className="icon" />
            </a>{" "}
            <a
              href="https://twitter.com/ngathinhtravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <AiFillTwitterCircle className="icon" /> */}{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="footerBottom">
        <p>
          <AiOutlineCopyrightCircle className="icon" />
          2025 Nga Thinh Travel.All rights reserved.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
