import { sisyphus, avatar } from "../assets/index";

const Sisyphus = () => {
  return (
    <center className=" py-16 px-44 bg-[#F9FAFB]">
      <div className="flex mb-3 items-center justify-center gap-2">
        <img src={sisyphus} alt="" />
        <h1 className="text-[#101828] text-xl font-bold">Sisyphus</h1>
      </div>
      <h1 className="text-[#1F2937] font-bold text-4xl">
        We’ve been with unicraft to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className=" mt-6">
        <img src={avatar} className=" h-12" alt="" />
        <h1 className="text-[#101828] font-semibold">Candice Wu</h1>
        <p className="text-[#667085] text-sm">Product Manager, Sisyphus</p>
      </div>
    </center>
  );
};

export default Sisyphus;
