import React, { useState } from 'react';
import './FaqPage.css'; // Import this CSS file to style the FAQ page

const faqData = [
  {
    question: "What is Ai1K?",
    answer: "[AI = Artificial Intelligence & 1k = 1,024 candidates] This is a remote internship opportunity for students from MBA & Technical colleges across India.",
  },
  {
    question: "Who can apply for internships on this website?",
    answer: "This Internship is open for students from all nationalities studying in India, seeking work experience in AI domain.",
  },
  {
    question: "How do I apply for an internship?",
    answer: "SStudents should connect with their college/institute's training & placement committee, request them to apply via them on info@ai1k.online with list of students who want to participate in this nationwide initiative",
  },
  {
    question: "What is the duration of this internship?",
    answer: "Ai1k Nationwide Internship is for 8-12 weeks starting Dec 2025 and ongoing till Feb 2025.",
  },
  {
    question: "Where will I need to travel to/visit for Ai1K?",
    answer: "This is a remote internship opportunity and WFH (Work from Home). You have to visit the companies in your vicinity for research purpose.",
  },
  {
    question: "What devices/gadgets/tools do I need to participate and successfully complete Ai1K internship?",
    answer: "A working laptop and a phone with internet access are required. To visit companies in your vicinity, you may use your two-wheeler (Please wear a helmet while driving any two-wheeler).",
  },
  {
    question: "Is this internship paid or unpaid?",
    answer: "For all selected students, this is an unpaid internship with an opportunity to earn between INR 10,000 to 65,000 during the 8-12 weeks based on your entrepreneurial involvement.",
  },
  {
    question: "Will selected students get any pre-internship training/orientation?",
    answer: "Yes. The Ai1K team shall conduct online training sessions for all students in multiple groups of 40 to 50 students in Hindi & English. These sessions will also be available for later reference.",
  },
  {
    question: "Do I receive a certificate after completing an internship?",
    answer: "Yes, after successfully completing the internship with 100% attendance and timely data submission, digital completion certificates shall be issued.",
  },
  {
    question: "What is the shortlisting and how long does the selection process take?",
    answer: "After your institute has shared the necessary request and your details, you will be invited for an online test. If you excel, you will receive an email and a unique ID number mapped to your email for future communications.",
  },
  {
    question: "What skills or qualifications do I need to be selected?",
    answer: "The skills and qualifications for Ai1K are: Resilience, Leadership, Structured thinking, Interest in Networking, Curiosity, and a willingness to learn about the Real Impact of AI on businesses.",
  },
  {
    question: "How do interns track their progress during the internship?",
    answer: "Each set of 15-20 interns will be assigned a supervisor or captain who will guide and monitor them. Leaderboards will be updated online periodically. (You can inform us if you're interested in leading a team.)",
  },
  {
    question: "Would interns get a letter of recommendation after the internship?",
    answer: "Yes, the top 10 with consistent performance adhering to all aspects of this Nationwide initiative will receive recommendation letters. You may request one from your supervisor or training and placement committee member.",
  },
  {
    question: "What if I face any issues during the internship?",
    answer: "If any intern faces issues during the internship, please contact our support team via the 'Contact Us WhatsApp link' or email us at info@ai1k.online.",
  },
  {
    question: "Can a selected intern apply for any job with SMSCloud Hub?",
    answer: "Yes, you can apply, and if suitable vacancies are available, the intern will be given a preference. However, selection is not guaranteed.",
  },
  {
    question: "Is there an age limit for internships?",
    answer: "Internships are typically open to students and recent graduates, generally between 18 and 25 years of age, but this can vary.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1 className='text-3xl pb-10'>Frequently Asked Questions</h1>
      <div className="faq-container text-2xl">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
