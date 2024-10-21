import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/people1.jpeg";
import img1 from "../assets/people2.jpeg";

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
        People Behind 
        </RevealOnScroll>
        </h1>
      </div>
      
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0   sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
          <RevealOnScroll>
          Mr. Ashish Bavishi is a seasoned senior management professional with over 30 years of experience spanning P&L management, marketing, strategy, and business development across telecom, fintech, and mobility sectors. He has successfully led A2P messaging units to profitability, built strategic global partnerships, and driven growth in various market phases. Known for his entrepreneurial mindset, he excels in restructuring businesses to maximize ROI. Recently, his company was awarded “Best Enterprise SMS Provider” and “Best CSR Company,” while Mr. Bavishi earned recognition as the 2nd Best in the “Male Telco Award” category.</RevealOnScroll>
            </h1>
      </div>
        </div>
        </RevealOnScroll>
        <div className="lg:flex md:grid mt-20 lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img1}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
        
          Naresh Sonpal : Mr. Naresh Sonpal is a passionate leader with over two decades of experience in business enhancement, profit center management, and stakeholder engagement. He excels in business planning, coaching, and enabling seamless customer journeys while empowering teams. With deep expertise in technologies from Cloud to GenAI, he focuses on leveraging innovation for better living. A lifelong learner with the mindset of "miles to tread before I sleep," he now brings his expertise to SMSCloud Hub, ready to create impactful outcomes   </h1>
      </div>
        </div>
      </div>
   
    
  );
}

export default People;
