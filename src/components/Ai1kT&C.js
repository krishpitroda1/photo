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

function Ai1kT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <div className='relative pt-20'>
         
         <h1 className="align-center text-gray-600  pt-10 text-center w-screen  p-5  font-bold text-3xl ">
         Terms and conditions for interns selected for the Ai1k Remote Nationwide Internship Initiative
         </h1>
         <RevealOnScroll>

         <div className=" w-screen p-10  lg:pt-0" >
          <p className="lg:p-4 pb-0 text-lg  font-bold">
        </p>
          {/* <p className="p-4  pb-0 ml-4 text-lg ">
          Arrow Telelink (“us”, “we”, or “our”) operates CloudSkool++  app (the “Mobile app”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Mobile APP.
        </p> */}
          <p className="pb-0 lg:p-4 font-bold text-lg ">
          1. Eligibility and Selection :
          </p>
          <p className="lg:p-4  pb-0 lg:pt-0 ml-4 text-lg ">
          -	 The internship is open to students currently enrolled in an Indian recognized educational institution.  
 <br />- Candidates must meet the specific requirements outlined in the internship description (e.g., skills, qualifications, or academic standing).  
<br />-	Selection is based on merit, including performance in application tests, interviews, or tasks as communicated during the application process.  
 </p>
          <p className="lg:p-4 font-bold pb-0  text-lg ">
          2. Internship Commitment :
          </p>
          <p className="lg:p-4 ml-4  lg:pt-0 pb-0  text-lg ">
          - The duration of the internship will be 3 months, starting from 9-Dec-2024 & 6-Jn-2025.  
<br />- Interns are required to dedicate 3 hours / days [15 hours/week] to assigned tasks unless otherwise agreed.  
	<br />- Interns must adhere to deadlines and quality standards for project submissions.  

</p>
           <p className="lg:p-4 pb-0  text-xl  font-bold">
           3. Code of Conduct :
           </p> 
           <p className="lg:p-4 lg:pt-0 ml-4 pb-0  text-lg ">
           - Interns are expected to maintain professional behaviour and respect team members.  
<br />- Any form of harassment, discrimination, or unethical behaviour will lead to termination.  
<br />- Interns must follow all organizational guidelines and adhere to any applicable workplace policies.  
<br />-	Detailed Code of Conduct is at https://www.ai1k.online/#/InternsCoC

            </p>
          <p className="lg:p-4 pb-0  text-xl  font-bold">
          4. Confidentiality and Intellectual Property :      </p>
           <p className="lg:p-4 ml-4 lg:pt-0 pb-0  text-lg ">
           - Interns must not disclose any confidential information related to AI1K.online, its clients, or projects during or after the internship.  
<br />-	All work produced during the internship will remain the intellectual property of AI1K.online unless otherwise agreed in writing.  

          </p> 
          <p className="lg:p-4 pb-0 text-xl font-bold ">
          5. Stipend and Benefits :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          - Interns may receive a stipend, as communicated at https://www.ai1k.online/#/Students, upon successfully completing their internship and performance thereof.
<br />-	Other benefits, such as certificates of completion, recommendation letters, or perks, will be issued at the sole discretion of Ai1k to all interns adhering to the Code of Conduct, Attendance, Quality of research and final submissions 

        </p>
          <p className="lg:p-4 font-bold pb-0 text-xl ">
          6. Performance Evaluation :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          - Performance will be evaluated periodically through project reviews and feedback sessions.  
<br />-	Interns failing to meet performance expectations would be coached and handheld initially, repetitive dip of evaluation scores may lead to disciplinary actions, including termination.  


          </p>
          <p className="lg:p-4 font-bold pb-0 text-xl ">
        7. Termination Policy :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          -	Ai1k  initiative reserves the right to terminate the internship at any time due to unsatisfactory performance, misconduct, or violation of these terms.  
<br />- Interns can also choose to terminate their internship by providing a 4-week prior notice in writing, stating valid reasons.  
</p>
<p className="lg:p-4 font-bold pb-0 text-xl ">
8. Liability and Disclaimer :  
          </p>
          <p className="lg:p-4 pb-0 ml-4 text-xl ">
          - Ai1k Initiative is not liable for any losses, injuries, or damages sustained during the internship, except where required by law.  
<br />-	All interns are responsible for securing and maintaining their personal equipment and software, if required for the internship.
<br />- Interns are required to maintain professional decorum, valid riding / driving licenses when communicating for research work, wear helmets / seat belts and adhere to local rules and regulations and Ai1k is indemnified for any misdeeds or lack of adherence to the authority and laws of the land.

</p>
<p className="lg:p-4 font-bold pb-0 text-xl ">
9. Attendance and Reporting :
          </p>
          <p className="lg:p-4 pb-0 ml-4 text-xl ">
          - Interns must log all their meeting details as per google form links shared daily by 6.00 pm, this will also along with the quality of the data ensure attendance. Interns are expected to work on weekdays for 3 hours for this internship project. 
<br />-	Any planned leave must be shared in advance. Unplanned leave or frequent absenteeism may affect the intern’s evaluation.  

 </p>
 
 
        
 <p className="lg:p-4 font-bold pb-0 text-xl ">
 10. Certification, Facilitation and Exit Formalities :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          - A certificate of internship will be issued upon the successful completion of all assigned tasks and the duration of the internship. 
<br />-	The top 10 interns shall be invited to attend the facilitation ceremony which will also be covered on conventional media along with Digital media platforms like YouTube and LinkedIn.
<br />-	Interns must complete an exit feedback form before receiving their certificate or other benefits.  
</p>
  
    
<p className="lg:p-4 font-bold pb-0 text-xl ">
11. Amendments and Communication :
          </p>
          <p className="lg:p-4 pb-0 ml-4 text-xl ">
          -	Ai1k reserves the right to amend these terms at any time. Changes will be communicated in writing to all interns and respective Training & Placement / Institute Authority PoC’s mapped to the intern.  
<br />-	All official communication will be via the intern’s registered email / mobile number shared by the intern during the internship expression of interest.  


 </p>

  
    
<p className="lg:p-4 font-bold pb-0 text-xl ">
12.  Governing Law and Dispute Resolution :
          </p>
          <p className="lg:p-4 pb-0 ml-4 text-xl ">
          - These terms and conditions are governed by the laws of India.  
<br />- Any disputes will be resolved amicably through mutual discussion; otherwise, they will be subject to arbitration at Ahmedabad, Gujrat, India. 

      </p>

  



           </div>
        </RevealOnScroll>
        
    </div>
  )
}

export default Ai1kT;
