import React ,{useState,useRef,useEffect} from 'react'
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
  },);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <div className='relative pt-7'>
         
         <h1 className="align-center text-sky-600  pt-10 text-center w-screen  p-5  font-bold text-3xl ">
         Terms and Conditions
             </h1>
         <RevealOnScroll>

         <div className=" w-screen p-10" >
          <p className="p-4 pb-0 text-lg font-sans font-bold">
          Welcome to AI4k  </p>
          <p className="p-4  pb-0 ml-4 text-lg font-sans">
          These terms and conditions outline the rules and regulations for the use of SMSCloud Hub's website and services, located at www.smscloudhub.com. By accessing this website and using our services, you agree to accept these terms and conditions. If you do not agree to all the terms and conditions stated on this page, please do not continue to use SMSCloud Hub</p>
          <p className="p-4  pb-0 font-bold text-lg font-sans">
          Terminology     </p>
          <p className="p-4  pb-0 ml-4 text-lg font-sans">
          The following terminology applies to these Terms and Conditions, Privacy Policy, and Disclaimer Notice:    
        
            <li className="p-4  pb-0 ml-4 text-lg font-sans">
            	“Client,” “You,” and “Your” refer to you, the person accessing this website and using our services in compliance with these terms.
            </li>
        
            <li className="p-4  pb-0 ml-4 text-lg font-sans">
            		“The Company,” “We,” “Our,” and “Us” refer to SMSCloud Hub.
        
             </li>
             <li className="p-4  pb-0 ml-4 text-lg font-sans">
            		“Party” refers to both the Client and ourselves.
             </li>
        
             
            
         
          </p>

          <p className="p-4 font-bold pb-0  text-lg font-sans">Cookies
  </p>
          <p className="p-4 ml-4 pb-0  text-lg font-sans">
          We use cookies to enhance your experience on SMSCloud Hub. By accessing our website, you consent to the use of cookies in accordance with our Privacy Policy. Cookies help improve website functionality and may be used by our advertising and affiliate partners. </p>
           <p className="p-4 pb-0  text-xl font-sans font-bold">
           License </p> 
           <p>

           </p>
           <p className="p-4 ml-4 pb-0  text-lg font-sans">
           Unless otherwise stated, SMSCloud Hub and/or its licensors own the intellectual property rights for all material on SMSCloud Hub. All intellectual property rights are reserved. You may access this material for personal use only, subject to the following restrictions:  
           <li className="p-4  pb-0 ml-4 text-lg font-sans">
           	You must not republish material from SMSCloud Hub without proper attribution. </li>
        
            <li className="p-4  pb-0 ml-4 text-lg font-sans">
            You must not sell, rent, or sub-license material from SMSCloud Hub.
             </li>
             <li className="p-4  pb-0 ml-4 text-lg font-sans">
            		“Party” refers to both the Client and ourselves.
             </li>
             <li className="p-4  pb-0 ml-4 text-lg font-sans">
             	You must not redistribute content from SMSCloud Hub unless the content is specifically made for redistribution.  </li>
         </p>
         <p className="p-4 pb-0  text-xl font-sans font-bold">
         
         User-Generated Content </p>
           <p className="p-4 ml-4 pb-0  text-lg font-sans">
           Users may post comments, feedback, or other content on our website or through our services. The opinions expressed do not reflect the views of SMSCloud Hub. We are not responsible for user-generated content and reserve the right to monitor and remove any content deemed inappropriate or in violation of these terms.</p> 
          <p className="p-4 pb-0 text-xl font-bold font-sans">
          Use of Google RCS Services </p>
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          By using our Google RCS services, you agree to:
          <li className="p-4  pb-0 ml-4 text-lg font-sans">
          Use RCS only for lawful and permissible purposes. </li>
        
            <li className="p-4  pb-0 ml-4 text-lg font-sans">
            	Refrain from engaging in spamming, phishing, or illegal marketing activities via RCS.        </li>
             <li className="p-4  pb-0 ml-4 text-lg font-sans">
            	Adhere to Google’s RCS messaging guidelines, which we facilitate through our platform. </li>
            
           </p>
           <p className="p-4 pb-0 text-xl font-bold font-sans">
           Data Protection and Privacy
          </p>
        
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          Your privacy is important to us. Please refer to our Privacy Policy to understand how we handle your personal information. We ensure that data collected through our messaging and ERP platforms, including RCS communications, is stored securely and processed in compliance with applicable laws.</p>
         
        
         
          <p className="p-4 font-bold pb-0 text-xl font-sans">
          Service Availability and Updates  </p>
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          We strive to keep our services available 24/7. However, we reserve the right to temporarily suspend or discontinue any service for maintenance or updates without prior notice. While we will make efforts to ensure minimal disruption, we are not liable for any downtime. </p>
          <p className="p-4 font-bold pb-0 text-xl font-sans">
          Hyperlinking to Our Content
          </p>
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          Organizations such as government agencies, search engines, and news organizations may link to our website without prior written approval, provided that the link:
          <li className="p-4  pb-0 ml-4 text-lg font-sans">
          is not deceptive</li>
        
            <li className="p-4  pb-0 ml-4 text-lg font-sans">
        	Does not falsely imply sponsorship, endorsement, or approval.  </li>
             <li className="p-4  pb-0 ml-4 text-lg font-sans">
             Fits within the context of the linking party’s site. </li>
            
          
            </p>
          <p className="p-4 font-bold pb-0 text-xl font-sans">
          Limitation of Liability  </p>
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          SMSCloud Hub will not be held liable for any damages arising out of the use or inability to use our website or services, to the extent permitted by law. This includes, but is not limited to, damages for data loss, business interruption, or any other losses. </p>
          <p className="p-4 font-bold pb-0 text-xl font-sans">
          Third-Party Services and Links </p>
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          Our website and services may include links to third-party websites or services for your convenience. We are not responsible for the content or accuracy of these third-party websites and disclaim any liability related to their usage.</p>
          <p className="p-4 font-bold pb-0 text-xl font-sans">
          Jurisdiction and Governing Law
           </p>    
          <p className="p-4 pb-0 ml-4 text-xl font-sans">
          These terms and conditions are governed by the laws of India. Any disputes arising under these terms will be resolved under the jurisdiction of Indian courts.</p>
       
        </div>
        </RevealOnScroll>
        
    </div>
  )
}

export default Terms
