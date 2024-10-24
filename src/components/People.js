import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/people1.jpeg";
import img1 from "../assets/nareshsir.jpg";

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

function People() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
        Meet the Visionaries
        
        </RevealOnScroll>
        </h1>
      </div>
      
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0   sm:p-0">
           <img
            className=" w-[400px] h-[300px] mx-auto rounded-2xl  "
            src={img}            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
        
          Mr. Ashish Bavishi
With over 30 years of experience in telecom, fintech, and mobility, Ashish is a proven leader in P&L management, marketing, and business development. He has led A2P messaging units to profitability and built strategic partnerships globally. Recently, his company won "Best Enterprise SMS Provider" and "Best CSR Company," while Ashish was named the 2nd Best in the "Male Telco Award" category.
       </h1>
      </div>
        </div>
        </RevealOnScroll>
        <div className="lg:flex md:grid mt-20 lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[300px] lg:h-[300px] rounded-2xl mx-auto  "
            src={img1}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
        
            Mr. Naresh Sonpal
Naresh brings over 20 years of expertise in business growth, profit management, and innovation. Known for his focus on customer experience and team empowerment, he leverages cutting-edge technologies, including Cloud and GenAI, to drive impactful results.</h1></div>
        </div>
      </div>
   
    
  );
}

export default People;
