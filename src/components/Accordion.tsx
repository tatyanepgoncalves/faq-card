import { useState } from "react";
import { LuChevronUp, LuChevronDown } from "react-icons/lu";

interface FAQData {
  question: string;
  answer: string;
}

const faqs: FAQData[] = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex.includes(index) ? 'open' : ''}`}
        >
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.question}</h3>
            <span>{openIndex.includes(index) ? <LuChevronUp color="#F47C57" /> : <LuChevronDown color="#F47C57"/>}</span>
          </div>
          {openIndex.includes(index) && (
            <div className="accordion-content">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
