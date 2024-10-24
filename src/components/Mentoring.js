import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/mentoring.jpeg";
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

function Mentoring() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
        Mentoring
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
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-5xl  font-bold p-5">
          
          At SMSCloud Hub, we recognize the importance of mentorship in fostering personal and professional growth. Our mentoring program provides students and aspiring professionals with valuable guidance from industry experts.      </h1>
          <h1 className="md:text-4xl text-3xl sm:text-4xl pl-3 text-blue-600 lg:text-3xl font-bold p-5 lg:pb-0">
          Key Offerings:   

            </h1>
            <p className="font-bold lg:text-2xl text-2xl p-3  pr-4  text-gray-800 "> 
            •	Personalized Guidance: Mentors help identify strengths and set actionable goals.
            <br />
•	Industry Insights: Gain knowledge about trends and best practices in telecom, IT, and international business.
<br />

•	Skill Development: Enhance critical skills such as business analysis, communication, and problem-solving.
<br />
•	Networking Opportunities: Connect with our extensive professional network for potential internships and job placements.
<br />
•	Supportive Environment: Build confidence and tackle new challenges with encouragement from experienced mentors.
<br />
By investing in future leaders, we aim to equip students with the tools they need to succeed in their careers and navigate the complexities of the business world.

         </p>

      </div>
        </div>
        </RevealOnScroll>
      </div>
   
    </div>
  );
}

export default Mentoring;
