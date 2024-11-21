import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/consult.jpeg";
import img1 from "../assets/con2.jpeg";

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
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Consulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen pt-20  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
        Value-added Services (VAS)
        </RevealOnScroll>
        </h1>
      </div>
    
      <div className="">
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img1}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl text-4xl sm:text-4xl pl-3 text-blue-600 lg:text-3xl font-bold p-5 lg:pb-0">
            Alliance Development & Management
            </h1>
          <p className="font-bold lg:text-xl text-xl p-3  pr-4  text-gray-800 "> 
          As trusted advisors, we assist our clients to achieve exceptional value by developing comprehensive, market-winning strategies through global alliances. Our data-driven programs enable clients to transform their businesses by expanding their networks and embracing innovative solutions. </p>
       <div className="flex flex-col  justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl sm:text-4xl text-blue-600 lg:text-3xl text-4xl font-bold p-5 pl-3 lg:pb-0">
          Communication
            </h1>
          <p className="font-bold lg:text-xl text-xl p-3  pr-4  text-gray-800 "> 
          We offer CPaaS, SMS, Voice Connectivity, Platform, and Managed Services, both in India and globally. </p>
      </div>
      <div className="flex flex-col  justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl sm:text-4xl text-blue-600 lg:text-3xl text-4xl font-bold p-5 pl-3 lg:pb-0">
          Gaming
            </h1>
          <p className="font-bold lg:text-xl text-xl p-3  pr-4  text-gray-800 "> 
          Our gaming division delivers an immersive experience for gamers, featuring a diverse inventory that encompasses various genres and includes some of the best gaming intellectual properties in recent years.</p>
      </div>
      </div>
    
        </div>
      
        </RevealOnScroll>
        </div>
       
      </div>
   
   );
}

export default Consulting;
