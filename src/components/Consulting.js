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
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
        Consulting
        </RevealOnScroll>
        </h1>
      </div>
      <div className="">
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl text-4xl sm:text-4xl pl-3 text-blue-600 lg:text-3xl font-bold p-5 lg:pb-0">
            Acceleration & Tech Enablement 

            </h1>
          <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 "> 
          Our Core Business Growth Practice empowers clients across the globe to enhance their operations by leveraging innovative cloud technologies. We drive products and service innovation, accelerate business development and improve financial performance, often enabling customers to maintain the competitive edge through continuous innovation.
          </p>
          <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 "> 
          In today’s interconnected world, where significant shifts in information and communication technologies are occurring, we focus on how tech companies can utilize their innovations to help businesses transform and thrive on a global scale. </p>
        
       {/* <div className="flex flex-col  justify-center"> */}
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
     {/* /       <h1 className="md:text-4xl sm:text-4xl text-blue-600 lg:text-3xl text-4xl font-bold p-5 pl-3 lg:pb-0"> */}
          {/* Techonology Tieup */}
            {/* </h1> */}
          {/* <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 ">  */}
          {/* In today’s interconnected world, where significant shifts in information and communication technologies are occurring, we focus on how tech companies can utilize their innovations to help businesses transform and thrive on a global scale. </p>   </div> */}
      </div>
    
        </div>
      
        </RevealOnScroll>
        </div>
      {/* <div className="pt-20">
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img1}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            {/* <h1 className="md:text-4xl text-4xl sm:text-4xl pl-3 text-blue-600 lg:text-3xl font-bold p-5 lg:pb-0"> */}
            {/* Alliance Development & Management */}
            {/* </h1> */}
          {/* <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 ">  */}
          {/* We act as trusted advisors, assisting our clients in achieving breakthrough value by building comprehensive market-winning strategies with global alliances. We create data-driven programmes that help our clients transform their businesses with larger network and innovative ways </p> */}
       {/* <div className="flex flex-col  justify-center"> */}
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            {/* <h1 className="md:text-4xl sm:text-4xl text-blue-600 lg:text-3xl text-4xl font-bold p-5 pl-3 lg:pb-0"> */}
          {/* Communication */}
            {/* </h1> */}
           {/* <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 ">  */}
          {/* We provide CPaaS, SMS, Voice Connectivity, Platform & Managed Services; in India and Globally. </p> */}
      {/* </div> */}
      {/* <div className="flex flex-col  justify-center"> */}
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            {/* <h1 className="md:text-4xl sm:text-4xl text-blue-600 lg:text-3xl text-4xl font-bold p-5 pl-3 lg:pb-0"> */}
          {/* Gaming */}
            {/* </h1> */}
          {/* <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 "> 
          Our gaming business conveys a vivid encounter for gamers with an inventory that covers a wide scope of sorts and brags of the absolute best gaming IPs found in the new times. </p>
      </div>
      </div> */}
    
        {/* </div> */}
      
        {/* </RevealOnScroll> */}
        {/* </div>  */}
       
      </div>
   
   );
}

export default Consulting;
