import { ShildCheck } from "../ui/icons";

const SecurityBox = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl flex flex-col justify-between">
      <div className="pt-24 flex justify-center items-center gap-6">
        <div className="w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#EEEEEE]"></div>
        <div className="w-[72px] h-[72px] bg-white border border-[#EEEEEE] rounded-[20px] flex items-center justify-center">
          <ShildCheck />
        </div>
        <div className="w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#EEEEEE]"></div>
      </div>
      <div className="flex flex-col px-5 pb-6">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-start">
          Advance security
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
          Your data stays private with end-to-end encryption and multi-layer
          protection
        </span>
      </div>
    </div>
  );
};

export default SecurityBox;
