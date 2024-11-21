import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/student.jpeg";
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

function Students() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 pt-20 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
    Students
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
            <h1 className="md:text-xl sm:text-xl text-blue-600 text-xl font-bold p-5">
    
            The Ai1k internship offers Management and Technology students with hands-on experience around the impact of Artificial Intelligence (AI) on real-world business environments.  By collaborating with IT, online and service sector companies, students can enhance their skills in research, business analytics, communication, lateral thinking and time management.
</h1>
            <h1 className="md:text-xl sm:text-xl text-blue-600 text-xl font-bold p-5 pt-2 pb-2">

            Participants will gain practical experience, expand their network along with sharpening their problem-solving abilities,  all while deepening their understanding of AI's influence. They also have the opportunity to develop entrepreneurial and marketing skills by offering services of SMSCloud Hub which will lead to monetary benefits to the students. 

</h1>
<h1 className="md:text-xl sm:text-xl text-blue-600 text-xl font-bold p-5 pt-2 pb-2">
  Benefits include:
<h1 className="md:text-xl sm:text-xl text-blue-600 text-xl italicfont-bold p-5 pt-2 pb-2">
- Authentic Digital Presence
<br />
- Internship Certificate
<br />
- Research Results
<br />
-  Earning potential between INR 10,000 to 65,000
<br />

</h1>
</h1>
<p className="text-sm text-black p-3"> 
By applying for internship you agree to 
<Link to="/InternsCoC">
<span className="text-blue-800">"Code of Conduct"</span> 
</Link>
& 
<Link to="/Ai1kT&C">
<span className="text-blue-800">"Terms & Conditions"</span>
</Link>
  </p>
<div className="p-3 pl-7">
              
          </div> 
      </div>
        </div>
        </RevealOnScroll>
    
      </div>
   
    </div>
  );
}

export default Students;
