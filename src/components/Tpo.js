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
    <div className="w-screen pt-20  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
    Training & Placement Committee       </RevealOnScroll>
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
          <div className="flex flex-col lg:pl-5 ">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-xl sm:text-xl text-blue-600 text-xl font-bold p-5">
        
            This internship program significantly enhances the training and placement committee's ability to provide students with relevant industry exposure, boosting their employability. Engaging with real-world companies helps students cultivate essential skills in business analysis, communication along with AI-driven technologies — skills and qualities highly sought after by recruiters.
<p className="pt-3">
Benefits include:
<br />
- Appreciation certificate from SMSCloud Hub
<br />
- Access to all Research Results and intern Research and analysis 
{/* <br />
- Access to global result of the research work done by all interns */}
 
 <br />
- Share bites on www.ai1k.online website and get featured and recognized by the jury.
</p>

 </h1>
      </div>
        </div>
        </RevealOnScroll>
      
      </div>
   
    </div>
  );
}

export default Tpo;
