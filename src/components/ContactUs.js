import React,{useRef} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import countapi from 'countapi-js';
import { useEffect,useState } from 'react';
import mail from '../assets/mail.png'
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

function ContactUs() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywntksh', 'template_qmk3qb8', form.current, 'OHhoa44H4GVwbLpGu')
      .then((result) => {
          console.log(result.text);
          alert("email send successfully ")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  
    <div className='w-screen pt-20 relative justify-items-center overflow-x-hidden'>
      <h1 class="pt-10 text-center text-3xl font-bold text-gray-700 sm:text-4xl h-20 p-5">
        Contact us
      </h1>
    <div>
      <RevealOnScroll>
        <div class="">
  <div class="p-5 pt-0 w-screen">
    <div class=" ">
      
      <p class="text-xl text-gray-400 text-center pt-3 p-5">
        We'd love to talk about how we can collaborate
      </p>
    </div>

    <div class=" items-center lg:p-10 pt-0 lg:grid lg:grid-flow-col">
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 divs bg-gray-800 text-gray-400">
        <h2 class="mb-8 text-xl font-semibold text-white ">
         Please fill the form to connect
        </h2>

        <form ref={form} onSubmit={sendEmail} className=''>
          <div class="grid gap-4">
             <div class="">
              <div>
                <label>Name</label>
                <input required type="text" name="user_name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=" Name" required/>
              </div> 
             </div>

             <div>
              <label>Email</label>
              <input required type="email" name="user_email" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" required/>
            </div> 

            <div>
              <label>Phone Number</label>
              <input required type='tel' name="phone_no" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Phone Number"  pattern="^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$" required/>
            </div> 

             <div>
              <label>Details</label>
              <textarea required name="details" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details" required></textarea>
            </div>
          </div>
          <div className='pt-3'>
              <input type="checkbox" required /> I agree to all the <a href="">
             <Link    className="inline-flex gap-x-2 text-white hover:text-gray-200 "
                    to="/Terms"
                 > Terms & Conditions</Link> 
              </a> and   <a href="">
              <Link
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 "
                    to="/Privacy"
                  >  Privacy Policy
        </Link>
           
              </a>
               </div>
          <div class="mt-4 grid">
            <input type="submit" value='Send Inquiry' class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-700 text-white hover:bg-blue-900 disabled:opacity-0 disabled:pointer-events-none dark:focus:outline-none" />
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-white">
              Thank You! We will respond at the earliest.
            </p>
          </div>
        </form>
      </div> 
      <div  class="divide-y divide-gray-200 dark:divide-gray-800 p-5 lg:pl-10">
        <RevealOnScroll><div class="flex gap-x-7 py-6">
         <FaWhatsapp  className='flex-shrink-0 w-6 h-6 mt-1.5 text-green-600' />
          <div class="grow">
            <Link  to="https://wa.me/message/ILY4U4LCN4UHP1" target='_blank' className='hover:text-gray-800'>
            <h3 class="font-semibold text-gray-600">WhatsApp</h3>
            {/* <p class="mt-1 text-sm text-gray-500">Message On WhatsApp for answers to anything you might ask.</p> */}
            <Link to="https://wa.me/message/ILY4U4LCN4UHP1" target="_blank" class="mt-2 inline-flex items-center gap-x-2  font-semibold text-gray-600 hover:text-blue-900">
            <span className='text-blue-500'>Click here</span>to message us
           </Link>
           </Link>
          
          </div>
        </div>
        </RevealOnScroll>
        <RevealOnScroll>  
                <div class=" flex gap-x-7 py-6">
        <FaLinkedin className='flex-shrink-0 w-6 h-6 mt-1.5 text-sky-600'/>
          <div class="grow">
           <Link to="https://www.linkedin.com/company/ai1kproject/" target='_blank'>
            <h3 class="font-semibold text-gray-600" >LinkedIn</h3>
           </Link>
            <Link class="mt-2 inline-flex items-center gap-x-2 font-semibold text-gray-600 hover:text-blue-900 " target="_blank" to="https://www.linkedin.com/company/ai1kproject/">
            <span className='text-blue-500'>Click here</span> to connect with us on LinkedIn
             {/* z <svg class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg> */}
            </Link>
          </div>
        </div></RevealOnScroll>
        <div class=" flex gap-x-7 py-6">
        <FaInstagram className='flex-shrink-0 w-6 h-6 mt-1.5 text-red-300'/>
          <div class="grow">
            <Link  to="https://www.instagram.com/smscloudhub" target='_blank'>
            <h3 class="font-semibold text-gray-600">Instagram</h3>
            </Link>
            {/* <p class="mt-1 text-sm text-gray-500">Connnect With our company on Instagram</p> */}
            <Link class="mt-2 inline-flex items-center gap-x-2  font-semibold  text-gray-600 hover:text-blue-900 " target="_blank" to="https://www.instagram.com/smscloudhub">
            <span className='text-blue-500'>Click here</span> to connect with us on Instagram
              {/* <svg class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg> */}
            </Link>
          </div>
        </div>
<div class=" flex gap-x-7 py-6">
<FaWpforms className='flex-shrink-0 w-6 h-6  text-black' />
         
          <div class="grow">
          
            <Link class="font-semibold text-gray-600" target='_blank' to="https://shorturl.at/q2H9i" > <span className='text-blue-500'>Click here</span> to apply for the Ai1k internship opportunity</Link>
            {/* <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p> */}
            {/* <Link to="" class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 " >
              info@ai1k.online
            </Link> */}
            {/* <p class="mt-1 text-sm text-gray-500">apply here for internship</p> */}
         
          </div>
        </div>

        
        {/* <div class=" flex gap-x-7 py-6"> */}
         {/* <img src={mail} alt="" className='h-7 w-7 flex-shrink' /> */}
          {/* <div class="grow"> */}
          
            {/* <h3 class="font-semibold text-gray-600">Email us @ info@ai1k.online for any additional info </h3> */}
            {/* <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p> */}
            {/* <Link to="" class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 " >
              info@ai1k.online
            </Link> */}
            {/* <p class="mt-1 text-sm text-gray-500">apply here for internship</p> */}
         
          {/* </div> */}
        {/* </div> */}
 {/* <div class=" flex gap-x-7 py-6">
         <img src={mail} alt="" className='h-7 w-7 flex-shrink' />
          <div class="grow">
          
            <Link class="font-semibold text-gray-600" to="https://shorturl.at/q2H9i" >Click here to apply for the Ai1k internship opportunity</Link>
            {/* <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p> */}
            {/* <Link to="" class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 " >
              info@ai1k.online
            </Link> */}
            {/* <p class="mt-1 text-sm text-gray-500">apply here for internship</p> */}
         
          {/* </div> */}
        {/* </div>  */}

        {/* <div className="p-3 pl-7 items-center text-center justify-items-center">
                  <Link to='https://shorturl.at/q2H9i'>
                  <button className="rounded-md p-5 text-white bg-gray-800 ">
                    Apply here
                    </button>
                  </Link>
            
          </div>  */}
   
      </div>
    </div>
  </div>
</div>
</RevealOnScroll>


</div>
{/* <div className='p-5 w-screen'>

     <h1 className="text-gray-700 text-center  font-bold text-4xl ">
          Our Location
        </h1>
    <div className='pl-0 lg:pr-8'>

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.30011784394395!2d72.49662934555259!3d22.989018459114877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf4765fe993%3A0xa21cf89753936894!2sSMSCloud%20Hub!5e0!3m2!1sen!2sin!4v1704867816876!5m2!1sen!2sin "height={'600px'} className=' block justify-center p-5 w-full border border-black items-center rounded-xl  ' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" key={"g"}></iframe>
    </div>
</div> */}

    </div>
  )
}

export default ContactUs
