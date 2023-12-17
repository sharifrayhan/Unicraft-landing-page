import { styles } from "../styles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { slack, zoom, zapier, spotify, amazon, adobe } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "From strategic planning to digital presence, we're your dedicated partner in achieving solo success.",
    ],
    loop: {},
  });

  const logos = [slack, zoom, zapier, spotify, amazon, adobe];

  return (
    <>
      <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
        <div className="text-center mt-[80px] flex flex-col items-center">
          <h1 className={`${styles.bannerHeadText} text-white text-center`}>
            <span className="text-[#1F2937]">
              Elevate Your Presence with <br /> Seamless Design and Innovation.
            </span>
          </h1>
          <p className={`${styles.bannerSubText} mt-2 text-center`}>
            {text}
            <Cursor></Cursor>
          </p>
          <button className="bg-[#1F2937] my-3 text-white rounded-md px-5 py-3">
            View Pricing
          </button>
        </div>

        <div className="max-w-6xl mt-20 mx-auto px-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            {" "}
            <center>
              <h2 className=" mb-6 text-[#9CA3AF] font-medium lg:text-[18px] text-[12px]">
                Trusted By 250+ Companies
              </h2>
            </center>{" "}
          </motion.div>
          <div className="flex justify-center items-center gap-5 flex-wrap ">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-between">
                <motion.img
                  src={logo}
                  className="h-[20px] md:h-[40px] mr-10"
                  whileHover={{ scale: 1.1 }}
                ></motion.img>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Banner, "");
