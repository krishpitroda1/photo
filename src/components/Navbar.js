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
  const [showRes, setShowRes] = useState(false);
  const[showFun,setShowFun]=useState(false);
  const[showAct,setShowAct]=useState(false);
  const[show,setShow]=useState(false);
 const[showFor,setShowFor]=useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 740) setNav(true);
    });
  });

  return (
    <div className="w-screen top-0 fixed  z-50 ">
   
      {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer=""></script> */}
      <div className="navbar bg shadow-lg w-full md:px-10 px-7 md:flex justify-between text-black">
      <div className="logo p-5 h-50 w-40">
          {/* Your logo component or image goes here */}
          <Link to="/">
            <img src={Logo} alt="Logo"  />
          </Link>
      </div>
    
      {/* <Link to="https://docs.google.com/forms/d/e/1FAIpQLScjBj6zPitsSgr_Vv7TDv7FUzwJv3dZjEy0XuqhXy-Hc4GAhw/viewform" target="_blank" className=" py-7 lg:py-12 hidden md:block text-blue-800">
         <p className="font-semibold text-lg">Student Registration</p>
       </Link>
       <Link to="https://docs.google.com/forms/d/e/1FAIpQLScjBj6zPitsSgr_Vv7TDv7FUzwJv3dZjEy0XuqhXy-Hc4GAhw/viewform" target="_blank" className=" py-7 lg:py-12 hidden md:block text-blue-800">
         <p className="font-semibold text-lg">College/TPO Registration</p>
       </Link> */}

      
       
        <div className="hidden md:flex justify-end gap-10 lg:pt-2 w-full">

      <Link to="https://docs.google.com/forms/d/e/1FAIpQLScjBj6zPitsSgr_Vv7TDv7FUzwJv3dZjEy0XuqhXy-Hc4GAhw/viewform" target="_blank" className=" py-7 lg:py-12 hidden md:block text-blue-800">
         <p className="font-semibold text-lg">Student Registration</p>
       </Link>
       <Link to="https://docs.google.com/forms/d/14afzO31dTbWWiOKRLLsj97NTcSmZVEEc2jhTh19Eujk/edit" target="_blank" className=" py-7 lg:py-12 hidden md:block text-blue-800">
         <p className="font-semibold text-lg">College/TPO Registration</p>
       </Link>
          {/* Your content goes here */}
          <div className="p-5 text-black justify-around hidden md:flex"
>
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Overview
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
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
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/About">About us</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/AI1k">Ai1k Concept</Link>
                  </li>
                  {/* <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/People">People Behind</Link>
                  </li>
             */}
                </ul>
              </div>
            </p>
          </div>

        </div>
        <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Our Activites
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
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
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Consulting">Consulting</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Mentoring">Mentoring</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Vas">VAS</Link>
                  </li>
                  </ul>
              </div>
            </p>
          </div>

        </div>
      
        <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Benefits
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
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
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Students">Students</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Tpo">T&P Committee</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Colleges">Colleges</Link>
                  </li>
                </ul>
              </div>
            </p>
          </div>

        </div>  
         
        <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Fun&CSR
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
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
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Csr">CSR in our DNA</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Fun">Life @ SMSCloud Hub</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Health">Health Month</Link>
                  </li>
                </ul>
              </div>
            </p>
          </div>

        </div>
       
       <Link to="/Faq" className=" py-7 lg:py-12 hidden md:block">
         <p className="font-semibold text-lg">FAQs</p>
       </Link>
       <Link to="/ContactUs" className=" py-7 lg:py-12 hidden md:block">
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
        <div className="flex flex-row justify-between items-center pe-5  ">
          <Link to="/" onClick={() => setNav(true)}>
            <img
              src={Logo}
              alt="Ai1k"
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
        <div className="dropdown-link py-7 md:block hover:text-orange-400">
        <li className="border-b  border-gray-600">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScjBj6zPitsSgr_Vv7TDv7FUzwJv3dZjEy0XuqhXy-Hc4GAhw/viewform" target="_blank"
              className="py-7 inline-block hover:text-orange-600"
              
            >
              Student Registration
            </Link>

          </li>
          <li className="border-b  border-gray-600">
            <Link
              to="https://docs.google.com/forms/d/14afzO31dTbWWiOKRLLsj97NTcSmZVEEc2jhTh19Eujk/edit"
              className="py-7 inline-block hover:text-orange-600"
              target="_blank"
            >
            College/TPO Registration
            </Link>

          </li>
              <p
                className="flex droptext relative text-center pt-8 cursor-pointer"
                onClick={() => setShowRes(!showRes)}
              >
                Overview
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
            </div>
            <div className={`relative ml-10 ${showRes ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/About"
                className="py-7  inline-block hover:text-orange-600"
              >
                About us
              </Link>
            </li>
            <li className="">
              <Link
                to="/AI1k"
                className="py-7  inline-block hover:text-orange-600"
              >
                Ai1k Concept
              </Link>
            </li>
     
              {/* <Link
                to="/People"
                className="py-7 inline-block hover:text-orange-600"
              >
                People Behind
              </Link> */}
           </div>
</li>
<li className="border-b  border-gray-600">
        <div className="dropdown-link py-7 md:block hover:text-orange-400">
              <p
                className="flex droptext relative cursor-pointer"
                onClick={() => setShowAct(!showAct)}
              >
                   Our Activites
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
            </div>
            <div className={`relative ml-10 ${showAct ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/Consulting"
                className="py-7  inline-block hover:text-orange-600"
              >
                Consulting
              </Link>
            </li>
            <Link
                to="/Mentoring"
                className="py-7 inline-block hover:text-orange-600 border-b  border-gray-600"
              >
                Mentoring
              </Link>
            <li className="">
              <Link
                to="/Vas"
                className="py-7  inline-block hover:text-orange-600"
              >
                VAS
              </Link>
            </li>
     
       
           </div>
</li>
<li className="border-b  border-gray-600">
        <div className="dropdown-link py-7 md:block hover:text-orange-400">
              <p
                className="flex droptext relative cursor-pointer"
                onClick={() => setShowFor(!showFor)}
              >
                  Benfits
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
            </div>
            <div className={`relative ml-10 ${showFor ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/Students"
                className="py-7  inline-block hover:text-orange-600"
              >
                Students
              </Link>
            </li>
            <li className="border-b  border-gray-600">
              <Link
                to="/Tpo"
                className="py-7  inline-block hover:text-orange-600"
              >
                T&P committee
              </Link>
            </li>
     
              <Link
                to="/Colleges"
                className="py-7 inline-block hover:text-orange-600"
              >
                Colleges
              </Link>
           </div>
</li>
<li className="border-b  border-gray-600">
        <div className="dropdown-link py-7 md:block hover:text-orange-400">
              <p
                className="flex droptext relative cursor-pointer"
                onClick={() => setShowFun(!showFun)}
              >
                  Fun & CSR
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
            </div>
            <div className={`relative ml-10 ${showFun ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/Csr"
                className="py-7  inline-block hover:text-orange-600"
              >
                CSR
              </Link>
            </li>
            <li className="border-b  border-gray-600">
              <Link
                to="/Fun"
                className="py-7  inline-block hover:text-orange-600"
              >
              Life @ SMSCloud Hub
              </Link>
            </li>
     
              <Link
                to="/Health"
                className="py-7 inline-block hover:text-orange-600"
              >
                Health Month
              </Link>
           </div>
</li>
<li className="border-b  border-gray-600">
            <Link
              to="/Faq"
              className="py-7 inline-block hover:text-orange-600"
            >
              FAQs
            </Link>
          </li>


      <li className="border-b  border-gray-600">
            <Link
              to="/ContactUs"
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
