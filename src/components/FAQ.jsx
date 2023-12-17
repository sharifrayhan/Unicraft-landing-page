import { useState } from "react";
import { minus_icon, plus_icon } from "../assets";
import { FAQ } from "../constants";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const SectionSeparator = () => (
    <div className="my-8 border-t border-gray-300"></div>
  );

  return (
    <div className="mt-10">
      <center>
        <h1 className="text-4xl font-bold text-[#262E35]">
          Frequently asked questions
        </h1>
        <p className="text-gray-600 px-[400px] mt-2">
          Everything you need to know about the product and billing.
        </p>
      </center>

      <div className="mx-auto my-5 w-[600px]">
        {FAQ.map((faq, index) => (
          <div className="" key={index}>
            <div className="flex  justify-between">
              <h1 className=" font-medium text-[#1F2937]">{faq.question}</h1>
              <img
                src={activeIndex === index ? minus_icon : plus_icon}
                onClick={() => toggleFAQ(index)}
                alt=""
                className="cursor-pointer"
              />
            </div>
            {activeIndex === index && (
              <p className=" text-[#6B7280]">{faq.answer}</p>
            )}
            {index < FAQ.length - 1 && <SectionSeparator />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
