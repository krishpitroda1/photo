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
         Code of Conduct for remote Nationwide Ai1K Online Interns by SMSCloud Hub
           </h1>
         <RevealOnScroll>

         <div className=" w-screen lg:pt-0 p-10" >
          <p className="lg:p-4 pb-0 text-lg  font-bold">
        </p>
          {/* <p className="p-4  pb-0 ml-4 text-lg ">
          Arrow Telelink (“us”, “we”, or “our”) operates CloudSkool++  app (the “Mobile app”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Mobile APP.
        </p> */}
          <p className="pb-0 lg:p-4 font-bold text-lg ">
          1. General Expectations :
          </p>
          <p className="lg:p-4 lg:pt-0  pb-0 ml-4 text-lg ">
          -	 <span className='font-bold'>Professionalism:</span> Always maintain a professional demeanour during all interactions, whether with peers, mentors, or stakeholders.
          <br />- <span className='font-bold'>Punctuality:</span>  Respect deadlines for assignments and attend all scheduled virtual meetings or training sessions on time.
<br />-	 <span className='font-bold'> Commitment:</span> Dedicate the required number of hours each week as outlined in your internship agreement.

     </p>
          <p className="lg:p-4 font-bold pb-0  text-lg ">
           2. Ethical Conduct :
          </p>
          <p className="lg:p-4 ml-4  lg:pt-0 pb-0  text-lg ">
        - <span className='font-bold'>Integrity:</span> Uphold honesty and transparency in all tasks and communications.
<br />-<span className='font-bold'>Confidentiality:</span> Safeguard proprietary information, client data, and other sensitive materials you may handle during the internship.

</p>
           <p className="lg:p-4 pb-0  text-xl  font-bold">
           3.	Communication :
           </p> 
           <p className="lg:p-4 lg:pt-0 ml-4 pb-0  text-lg ">
           -	<span className='font-bold'>Responsiveness: </span>Respond promptly to emails, messages, and other forms of communication from team members or supervisors.
<br />- 	<span className='font-bold'>Etiquette: </span>Use professional and respectful language in all communications.
<br />-	<span className='font-bold'>Feedback:</span> Be open to receiving and providing constructive feedback.


            </p>
          <p className="lg:p-4 pb-0  text-xl  font-bold">
          4. Learning and Development :   
           </p>
           <p className="lg:p-4 ml-4 lg:pt-0 pb-0  text-lg ">
           - <span className='font-bold'>Proactiveness:</span> Actively participate in online learning sessions and make an effort to enhance your skills to be more effective.
<br />-	<span className='font-bold'>Adaptability:</span> Be open to exploring new tools, technologies, and methodologies introduced during the internship.
<br />-	<span className='font-bold'>Inquiry:</span> Ask questions and seek clarification to ensure you fully understand tasks and expectations.

          </p> 
          <p className="lg:p-4 pb-0 text-xl font-bold ">
           5.	Remote Work Guidelines :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
        - <span className='font-bold'>workspace:</span> Ensure you have a quiet, professional environment conducive to remote work.
<br />-	<span className='font-bold'>Attendance:</span> Attend all virtual meetings and workshops as required.
<br />-	<span className='font-bold'>Technology:</span> Maintain stable internet connectivity and necessary hardware/software for completing assigned tasks.

        </p>
          <p className="lg:p-4 font-bold pb-0 text-xl ">
          6. Respect and  Inclusivity:
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          -	<span className='font-bold'>Diversity:</span> Embrace and respect cultural, regional, and academic diversity among peers.
<br />-	<span className='font-bold'>Teamwork:</span> Collaborate effectively with team members and support a positive work environment.
<br />- <span className='font-bold'>Anti-Harassment: </span>Strictly avoid any behaviour that could be interpreted as harassment, discrimination, or bullying.


          </p>
          <p className="lg:p-4 font-bold pb-0 text-xl ">
         7.	Accountability :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          -	<span className='font-bold'>Ownership:</span> Take responsibility for your actions and contributions to the program.
<br />-	<span className='font-bold'>Reporting Issues: </span>Promptly report any challenges, conflicts, or unethical behaviour to your supervisor or designated point of contact at SMSCloud Hub.
<br />-	<span className='font-bold'>Performance Tracking:</span> Regularly update progress on assigned tasks and projects.

     </p>
<p className="lg:p-4 font-bold pb-0 text-xl ">
8.	Use of Technology :
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          -	<span className='font-bold'>Authorized Access:</span> Only use the tools, platforms, and data authorized by SMSCloud Hub and AI1K for work-related purposes.
<br />-	<span className='font-bold'>Cybersecurity:</span> Follow guidelines to protect systems and data from unauthorized access or breaches.
<br />-	<span className='font-bold'>Appropriate Use:</span> Avoid using company-provided resources for personal activities.


</p>
<p className="lg:p-4 font-bold pb-0 text-xl ">
9. Consequences of Misconduct: 
          </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          Violations of this code of conduct may lead to disciplinary actions, including:
<br />- Written warnings
<br />-	Temporary suspension from the program
<br />-	Termination of internship
<br />-	Reporting incidents to the academic institution if necessary

 </p>
 
 
        
 <p className="lg:p-4 font-bold pb-0 text-xl ">
 10.	Acknowledgment         </p>
          <p className="lg:p-4 lg:pt-0 pb-0 ml-4 text-xl ">
          - All interns must acknowledge that they have read, understood, and agreed to abide by this Code of Conduct.
<br />-	Kindly connect with any designated person at SMSCloud Hub by emailing us at info@Ai1k.online if you experience or come across any instance which is in deviation to the above. Your identity will be kept anon in-case of any observations shared. 

    </p>
  
    
<p className="lg:p-4 font-bold pb-0 text-xl ">
11. Amendments and Communication:
          </p>
          <p className="lg:p-4 pb-0 lg:pt-0 ml-4 text-xl ">
          -	Ai1k reserves the right to amend these terms at any time. Changes will be communicated in writing to all interns and respective Training & Placement / Institute Authority PoC’s mapped to the intern.  
<br />-	All official communication will be via the intern’s registered email / mobile number shared by the intern during the internship expression of interest.  


 </p>

  
    
<p className="lg:p-4 font-bold pb-0 text-xl ">
12.  Governing Law and Dispute Resolution:
          </p>
          <p className="lg:p-4 pb-0 lg:pt-0 ml-4 text-xl ">
          - These terms and conditions are governed by the laws of India.  
<br />- Any disputes will be resolved amicably through mutual discussion; otherwise, they will be subject to arbitration at Ahmedabad, Gujrat, India. 

      </p>

  



           </div>
        </RevealOnScroll>
        
    </div>
  )
}

export default Ai1kT;
