import React, { useState } from 'react';
import './FaqPage.css'; // Import this CSS file to style the FAQ page

const faqData = [
  {
    question: "1. What is Ai1K?",
    answer: "[AI = Artificial Intelligence & 1k = 1,024 candidates] This is a remote internship opportunity for students from MBA & Technical colleges across India.",
  },
  {
    question: "2. Who can apply for this nationwide internship opportunity?",
    answer: "This Internship is open for students from all nationalities studying in India, seeking internship experience and insights in AI domain.",
  },
  {
    question: "3. How do I apply for this nationwide internship?",
    answer: "You can visit the Ai1k home page and click on 'Student Registration' tab.",
  },
  {
    question: "4. What is the duration of this internship?",
    answer: "Ai1k Nationwide Internship is for 8-12 weeks starting Dec 2024 and ongoing till Feb 2025.",
  },
  {
    question: "5. Where will I need to travel to/visit for Ai1K?",
    answer: "This is a remote internship opportunity and WFH (Work from Home). You have to visit the companies in your vicinity (local area) for research purpose.",
  },
  {
    question: "6. What devices/gadgets/tools do I need, to participate and successfully complete the Ai1K internship?",
    answer: "A working laptop and a phone with internet access is required. To visit companies in your vicinity (local area), you may use your two-wheeler (Please wear a helmet while riding the two-wheeler).",
  },
  {
    question: "7. Is this internship paid or unpaid?",
    answer: "For all selected students, this is a free internship with a handsome opportunity to earn between INR 10,000 to 65,000 during the internship period, based on your entrepreneurial involvement.",
  },
  {
    question: "8. Will selected students get any pre-internship training/orientation?",
    answer: "Yes. The Ai1K team shall conduct online training sessions for all students in multiple groups of 40 to 50 students in Hindi & English. These sessions will also be available for later reference.",
  },
  {
    question: "9. Do I receive a certificate after completing the Ai1k internship?",
    answer: "Yes, after successfully completing the internship with 100% attendance and timely data submission, digital completion certificates shall be issued.",
  },
  {
    question: "10. What is the shortlisting criteria and how long does the selection process take?",
    answer: "After your institute has shared the necessary request and your complete details, you will be invited for an online test. If you do well, you will receive an email with a unique ID number to confirm your selection.",
  },
  {
    question: "11. What skills or qualifications do I need to be selected?",
    answer: "The skills and qualifications for Ai1K are: Resilience, Leadership, Structured thinking, Interest in Networking, Curiosity, and a willingness to learn about the Real Impact of AI on businesses.",
  },
  {
    question: "12. How do interns track their progress during the internship?",
    answer: "Each set of 15-20 interns will be assigned a supervisor or captain who will guide and monitor them. Leaderboards will be updated online periodically. (You can inform us if you're interested in leading a team.)",
  },
  {
    question: "13. Would interns get a letter of recommendation after the internship?",
    answer: "Yes, the top 10 with consistent performance adhering to all aspects of this Nationwide initiative will receive recommendation letters. You may request one from your supervisor or training and placement committee member.",
  },
  {
    question: "14. What if I face any issues during the internship?",
    answer: "If any intern faces issues/problems during the internship, please contact our support team via the 'Contact Us WhatsApp link' or email us at info@ai1k.online.",
  },
  {
    question: "15. Can a selected intern apply for any job with SMSCloud Hub?",
    answer: "Yes, you can apply, and if suitable vacancies are available, the intern will be given a preference. However, selection is not guaranteed.",
  },
  {
    question: "16. Is there an age limit for internships?",
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
      <h1 className='text-3xl sm:pt-15 md:pt-15 pt-20 lg:pt-0 pb-10'>Frequently asked Questions</h1>
      <div className="faq-container text-xl">
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
