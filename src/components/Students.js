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
    
            The Ai1K internship offers MBA and engineering students hands-on experience in the impact of Artificial Intelligence (AI) on real-world business environments. By collaborating with IT, online, and service sector companies, students can enhance their skills in business analytics, communication, research methodology, and time management.   </h1>
      <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5 pt-2 pb-2">

      Participants gain practical experience, expand their networks, and strengthen their problem-solving abilities, all while deepening their understanding of AI's influence on corporate communication. They also have the opportunity to promote a discount program, further developing their entrepreneurial and marketing skills.
</h1>
<h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5 pt-2 pb-2">
  Benifits include:
<h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl italicfont-bold p-5 pt-2 pb-2">

- 	I nternship Certificate
<br />
- Research Results
<br />

- Opportunity to be part of Top 10 and be part of Facilitation. 
<br />

- Earning potential between ₹20,000 to ₹100,000
</h1>
</h1>
      </div>
        </div>
        </RevealOnScroll>
    
      </div>
   
    </div>
  );
}

export default Students;
