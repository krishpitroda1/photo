import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/student.jpeg";
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
    <div className="w-screen  overflow-x-hidden p-8 ">
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
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
    
          Ai1K internship offers MBA and engineering students hands-on exposure to real-world business environment impact created by AI (Artificial Intelligence)  by engaging with IT, online, and service sector companies. 
      </h1>
      <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5 pt-2 pb-2">

It helps them develop skills in research, communication, and business analytics through exploring AI's impact on corporate communication. Students gain practical experience, expand their networks, and strengthen their problem-solving abilities, all of which enhance their academic knowledge. 
</h1>
<h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5 pt-2 pb-2">

The opportunity to promote a discount program also builds entrepreneurial skills, marketing and customer engagement skills, adding valuable insights relevant to their degrees and future careers.
At the end of the succesful program you get....
<br />
- Certificate of Internship.
<br />
- Result of your research .
<br />

- Opportunity to be part of Top 10 and be part of Facilitation. 
<br />

- Opportunity to earn between 20,000 INR to 100,000 INR .
</h1>
      </div>
        </div>
        </RevealOnScroll>
    
      </div>
   
    </div>
  );
}

export default Students;
