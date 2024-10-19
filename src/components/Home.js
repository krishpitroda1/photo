import React from "react";
import Navbar from "./Navbar";
import videobg from "../assets/videobg.mp4";
// import Divs from "./Divs";
// import videobg from "../assets/fn4.mp4";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import img from "../assets/logo.jpg";
// import img1 from '../assets/cons.jpeg';
// import img4 from '../assets/tech2.jpg'
// import img3 from "../assets/manage.jpg";
import { Link } from "react-router-dom";
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
const words = [
  'Cloud InfraStructure',
  "Channel Integration",
  'Automatic Call Distribution',
  'CRM Integration'
];
function Home() {
  // Create a state variable to store the text opacity
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  const [index, setIndex] = useState(0);

  // A useEffect hook to set up a timer that updates the index every 2 seconds
  useEffect(() => {
    // A function that increments the index by one, or resets it to zero if it reaches the end of the array
    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // A variable to store the timer ID
    const timerId = setInterval(updateIndex, 1000); // A cleanup function that clears the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar />
      <div className="relative pt-16">
        <video
          src={videobg}
          className=" blur-sm top-3  absolute rounded-lg "
          autoPlay
          playsInline
          muted
          loop
        ></video>

        <div className=" relative pt-14 lg:pt-16 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-5xl flex flex-col justify-center text-sky-400  overflow-hidden">
        <h1 className="text-white relative font-bold p-3  mt-10 lg:text-4xl text-3xl md:py-6">
          Shape the Future of Communication with AI-Join 1000+ MBA Students on a Nationwide Research Journey! <br />
            <p className="font-bold text-teal-300 p-0 pt-3 text-3xl">
            Earn, Learn, and Gain Entrepreneurial Experience While Analyzing AI's Impact on Indian Businesses.  <br />
              {/* <span className="text-white text-4xl"> {words[index]}</span> */}
            </p>
          </h1>

        </div>
      </div>
      {/* ----------------------------------------- service------------------------------------------------------- */}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-g-500  pt-16 text-center p-5  font-bold text-4xl">
          CCC with SMSCloud Hub
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-blue-500 "> SMSCloud Hub provides solutions<br /> for better customer engagement <br /> through cloudbased platform</p>
             </RevealOnScroll>
        <div className="p-3">
                  <Link to='/Services'>
                  <button className="rounded-md p-5 text-white bg-green-500 ">
                    Read More
                    
                    </button>
                  </Link>
                </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
  
      </div>
  );
}

export default Home;
