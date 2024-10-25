import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/ai.jpeg";
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
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Ai1k() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
        Ai1k: Concept
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
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
          <RevealOnScroll>
          The Ai1K project is an in-depth “Research based internship”  allowing Management or Technology students to explore how AI is transforming the landscape of Indian businesses.
<p className="pt-2" />
With Ai1K, our students can understand the Impact of AI on the various communication channels of Indian businesses and how it shapes the future of  communication. 
<p className="pt-2" />

This project is limited to Selected 1024 budding and enthusiastic Interns, from educational institutes who would participate the 2 to 4-months long initiative which would enable them to get real ground level insights of “The Real impact of AI in Communication.
<p className="pt-2" />

While industry bodies & educators are concerned with advent of AI and it impact in recent times and its subsequent effects;  it is imperative for companies in Telecom & Technology, Educators and Industry bodies to join hands to understand its perils and positives. 


   </RevealOnScroll>
            </h1>
      <div className="p-3 pl-7">
                  <Link to='/Students'>
                  <button className="rounded-md p-5 text-white bg-gray-800 ">
                    Learn More 
                    
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

export default Ai1k;
