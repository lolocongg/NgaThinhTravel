import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const remoteNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex style = justify-content: space-between">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              {" "}
              <MdTravelExplore className="icon" /> Nga Thinh Travel.{" "}
            </h1>{" "}
          </a>{" "}
        </div>{" "}
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                {" "}
                Home{" "}
              </a>{" "}
            </li>{" "}
            {/* <li className="navItem">
                                                                          <a href="#" className="navLink">
                                                                            {" "}
                                                                            Packages{" "}
                                                                          </a>{" "}
                                                                        </li>{" "} */}{" "}
            {/* <li className="navItem">
                                                                          <a href="#" className="navLink">
                                                                            {" "}
                                                                            Shop{" "}
                                                                          </a>{" "}
                                                                        </li>{" "} */}{" "}
            <li className="navItem">
              <a
                href="https://www.facebook.com/ngathinhtravel"
                className="navLink"
              >
                About{" "}
              </a>{" "}
            </li>{" "}
            {/* <li className="navItem">
                                                                          <a href="#" className="navLink">
                                                                            {" "}
                                                                            Pages{" "}
                                                                          </a>{" "}
                                                                        </li>{" "} */}{" "}
            {/* <li className="navItem">
                                                                          <a href="#" className="navLink">
                                                                            {" "}
                                                                            News{" "}
                                                                          </a>{" "}
                                                                        </li>{" "} */}{" "}
            <li className="navItem">
              <a
                href="https://www.facebook.com/ngathinhtravel"
                className="navLink"
              >
                {" "}
                Contact{" "}
              </a>{" "}
            </li>{" "}
            {/* <button className="btn">
                                                  <a href="#"> Login </a>{" "}
                                                </button>{" "} */}{" "}
          </ul>{" "}
          {/* <div onClick={remoteNavbar} className="closeNavbar">
                                                                                                            <AiFillCloseCircle className="icon" />
                                                                                                          </div> */}{" "}
        </div>{" "}
        {/* <div onClick={showNav} className="toggleNavbar">
                                                                                              <TbGridDots className="icon" />
                                                                                            </div>{" "} */}{" "}
      </header>{" "}
    </section>
  );
};

export default Navbar;
