
import { arrow } from "../assets";

const HIW = () => {
  return (
    <div className="my-5 shadow-element mx-4 py-11">
      <div className="text-center my-3">
        <h1 className="text-3xl font-bold">How it works</h1>
        <p className="text-gray-600 mt-2">
          Premium designs, unlimited requests, super-fast delivery, for one flat monthly fee.
        </p>
      </div>

      <div className="relative mt-16 flex flex-col lg:flex-row justify-between p-8 items-center">
        {/* Card 1 */}
        <div className="text-center w-[600px] relative">
        <div className=" purple-text-gradient absolute   left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold bg-gradient-to-b  mb-2">1</div>
          <h3 className=" sticky text-2xl font-extrabold">Subscribe</h3>
          <p className="sticky">
            Subscribe to a plan & you’ll get instant access to your private Slack channel.
          </p>
        </div>

        <img src={arrow} alt="Arrow" className="arrow-icon" />

        {/* Card 2 */}
        <div className="text-center w-[600px] relative">
        <div className=" purple-text-gradient absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold bg-gradient-to-b  mb-2">2</div>
          <h3 className=" sticky text-2xl font-extrabold">Request</h3>
          <p className="sticky">
            Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours.
          </p>
        </div>

        <img src={arrow} alt="Arrow" className="arrow-icon" />

        {/* Card 3 */}
        <div className="text-center w-[600px] relative">
        <div className=" purple-text-gradient absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold bg-gradient-to-b  mb-2">3</div>
          <h3 className=" sticky text-2xl font-extrabold">Revise</h3>
          <p className="sticky">
            Need changes? We guarantee unlimited revisions until you're 200% satisfied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HIW;
