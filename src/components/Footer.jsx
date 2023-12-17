import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { headergradient } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
const Footer = () => {
    const bgStyle = {
        backgroundImage: `url(${headergradient})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      };
    
  return (
    <div style={bgStyle} className=" py-10">
      <center>
        <h1 className="md:text-4xl text-2xl font-bold text-[#101828]">
          No long-term contracts. No catches. Simple.
        </h1>
        <p className="text-gray-600 px-4  lg:px-[400px] mt-2">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <button className=" px-6 py-3 rounded-md my-3 bg-[#1F2937] text-white" >Contact Us</button>
      </center>

      <div className=" px-7 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" flex flex-col gap-4">
            <p className="text-sm lg:text-lg text-[#374151] font-bold">
              UniCraft
            </p>
            <p className="text-xs lg:text-sm text-[#9CA3AF]">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
            <p className=" text-sm text-[#9CA3AF]">&copy; 2077 Untitled UI. All rights reserved..</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter
                style={{ fontSize: "2vw", width: "3vw", color: "#9CA3AF" }}
                color="white"
                className=" cursor-pointer"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                style={{ fontSize: "2vw", width: "3vw", color: "#9CA3AF"  }}
                color="white"
                className="text-[#9CA3AF] cursor-pointer"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook
                style={{ fontSize: "2vw", width: "3vw", color: "#9CA3AF"  }}
                color="white"
                className="text-[#9CA3AF] cursor-pointer"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub
                style={{ fontSize: "2vw", width: "3vw", color: "#9CA3AF"  }}
                color="white"
                className="text-[#9CA3AF] cursor-pointer"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                style={{ fontSize: "2vw", width: "3vw", color: "#9CA3AF"  }}
                color="white"
                className="text-[#9CA3AF] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, ""); 
