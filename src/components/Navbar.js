import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handlenav = () => {
    setNav(!nav);
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [showEnterPrise, setShowEnterPrise] = useState(false);
  const [showOperator, setShowOperator] = useState(false);
  const [showCarrier, setShowCarrier] = useState(false);
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 740) setNav(true);
    });
  });

  return (
    <div className="w-screen top-0 fixed   z-50 ">
   
      {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer=""></script> */}
      <div className="navbar bg shadow-lg w-full md:px-10 px-7 md:flex justify-between text-black">
      <div className="logo p-5">
          {/* Your logo component or image goes here */}
          <Link to="/">
            <img src={Logo} alt="Logo"  />
          </Link>
        </div>

        <div className="hidden md:flex justify-end gap-10 w-full">
          {/* Your content goes here */}
          <Link className="py-7" to="/About">
            <p className="font-semibold text-lg">About Us</p>
          </Link>

          <p className="dropdown-link py-7 px-3 hidden md:block ">
            <Link className="flex font-semibold text-lg droptext relative" to="/Services">
               Services
            </Link>
          </p>
       <Link to="/Contacts" className=" py-7 hidden md:block">
         <p className="font-semibold text-lg">Contact Us</p>
       </Link>
      {/* <Link to="https://dashboard.hellotubelight.com/sign-in" className=" py-7 hidden md:block">
        
        <p className="font-semibold text-lg">Login</p>
        </Link> */}
        </div>
        <div
          onClick={handlenav}
          className="block hover:cursor-pointer md:hidden"
        >
          {!nav ? <></> : <AiOutlineMenu size={20} />}
        </div>
      </div>   {/* -----------------------------------------------------------------mobile view ----------------------------------------------------------------------------- */}

      {/* <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900  ease-in-out duration-500' : "fixed left-[-150%]"}>*/}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[70%] z-10 border-r h-full  overflow-y-scroll border-r-gray-900 n1  ease-in-out duration-500 "
            : "fixed left-[-150%]"
        }
      >
        <div className="flex flex-row justify-between  items-center pe-5  ">
          <Link to="/" onClick={() => setNav(true)}>
            <img
              src={Logo}
              alt="Arrowtelelink"
              className="lg:cursor-pointer h-24 m-4 w-24"
            />
          </Link>
          <div
            onClick={handlenav}
            className=" hover:cursor-pointer block lg:hidden "
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="lg:flex pt-24items-center gap-8 p-2 font-[Poppins] ">
          <li className="border-b  border-gray-600">
            <Link
              to="/About"
              className="py-7 inline-block hover:text-orange-600"
            >
              About Us
            </Link>
          </li>
          <li className="border-b  border-gray-600 py-7">
            <Link
              className="dropdown-link py-7 md:block hover:text-orange-400" to='/Services'
              
              onClick={() => setShowMenu(!showMenu)}
            >
              <p className="flex droptext relative">
                Services
                <svg
                  className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </p>
            </Link>
          </li>
      <li className="border-b  border-gray-600">
            <Link
              to="/Contacts"
              className="py-7 inline-block hover:text-orange-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
    //  </div>
  );
}

export default Navbar;
