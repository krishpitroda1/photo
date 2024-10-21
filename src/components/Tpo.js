import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/tpo.jpeg";
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

function Tpo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
    TPO
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
        
          This internship program can significantly benefit placement officers by providing MBA and engineering students with relevant industry exposure, enhancing their employability. Engaging with real-world companies helps students develop practical skills in business analysis, communication, and AI-driven technologies—attributes highly valued by recruiters. Successful participation strengthens students’ resumes, making them more competitive for final placements.
<br />
At the end of the succesful program you get....
<br />
- Certificate from SMSCloud Hub 
<br />
- Result of your research team      
 </h1>
      </div>
        </div>
        </RevealOnScroll>
      
      </div>
   
    </div>
  );
}

export default Tpo;
