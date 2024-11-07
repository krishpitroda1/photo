import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/csr.jpeg";
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

function Csr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
    CSR
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
          
            At SMSCloud Hub, our CSR initiatives are integral to our culture. Since our inception, we have actively participated in various projects that benefit our community and the environment.  
          <br />
            We engage in activities such as:
<br />
•	Feeding and Hydrating Birds: Especially during peak summer months.
<br />
•	Planting and Nurturing Trees: Every team member contributes to planting initiatives to support a greener future.
<br />
•	Supporting Rural Artisans: We promote India's rural artisans by utilizing their products for festive corporate and personal gifting, creating a positive impact on their livelihoods.
<br />
<p className="pt-2">
Our commitment to these initiatives has earned us multiple international awards, including the "Exemplary CSR Award in 2024." We believe in giving back and making a difference to our society, fostering a culture of responsibility and compassion.

  </p>
            
            </h1>
            
  
            
            </div>
        </div>
   
        </RevealOnScroll>
    
      </div>
   
    </div>
  );
}

export default Csr;
