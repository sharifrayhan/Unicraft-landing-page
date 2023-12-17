import { tick_black, tick_white } from "../assets";
import { pricingOptions } from "../constants";
import { headergradient } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";

const PricingCard = ({ title, description, price, features }) => {
  const isProfessional = title.toLowerCase() === "professional";
  const isFreebie = title.toLowerCase() === "freebie";

  return (
    <div
      className={`w-[290px] p-8 rounded-lg shadow-md ${
        isProfessional ? "bg-[#1F2937] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="flex items-end gap-2">
        <h1 className="text-3xl font-bold mb-4">{price}</h1>
        <p className="text-gray-500 mb-6">/ Month</p>
      </div>
      <button
        className={`py-2 px-4 mb-3 w-full rounded-sm transition duration-300 ${
          isProfessional
            ? "bg-white text-[#1F2937]"
            : "bg-white text-[#1F2937] border-[#1F2937] border border-3"
        }`}
      >
        Get Started Now
      </button>
      <ul className={` ${isProfessional ? "text-gray-200" : "text-gray-700"}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <img
              src={isProfessional ? tick_white : tick_black}
              alt="Tick"
              className="w-4 h-4 mr-2"
            />
            <p
              className={`${
                isFreebie && (index === 0 || index === 1)
                  ? "text-[#1F2937]"
                  : isProfessional && index >= 0 && index <= 5
                  ? "text-[#F9FAFB]"
                  : isProfessional && index > 5
                  ? "text-[#9CA3AF]"
                  : isFreebie && index > 1
                  ? "text-[#9CA3AF]"
                  : "text-[#1F2937]"
              }`}
            >
              {feature}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  const bgStyle = {
    backgroundImage: `url(${headergradient})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div style={bgStyle} className="mt-16 py-11">
      <center>
        <h1 className="md:text-4xl text-2xl font-bold text-[#262E35]">
          Pricing made for collaborative support.
        </h1>
        <p className="text-gray-600  px-4 lg:px-[400px] mt-2">
          Plain is made for your entire company. Only pay for users that
          actually message customers. Everyone else is free, forever.
        </p>
      </center>
      <div className="flex flex-wrap gap-3 justify-center mt-10 space-x-4">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default  SectionWrapper(Pricing, ""); 
