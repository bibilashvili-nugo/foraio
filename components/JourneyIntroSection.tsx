import LiveChat from "./journeyIntroSection/LiveChat";
import MapBox from "./journeyIntroSection/MapBox";
import SecurityBox from "./journeyIntroSection/SecurityBox";
import { Command } from "./ui/icons";

const JourneyIntroSection = () => {
  return (
    <div className="max-w-[1130px] mx-auto mt-16 flex flex-col gap-5">
      <div className="flex items-center gap-2 text-sm leading-5 text-[#FFB639] font-satoshi-medium px-4 py-2 bg-[#F7F7F7] border border-[#F0F0F0] rounded-[10px] w-fit">
        <Command />
        <span>Start managing smarter</span>
      </div>
      <span className="text-[52px] leading-[74px] text-[#0D0D0D] font-satoshi-medium">
        Set up your account{" "}
        <span className="text-[#919191]">in just minutes,</span> explore global
        features, <span className="text-[#919191]">and take</span> full control
        of your financial journey
        <span className="text-[#919191]"> with ease and security</span>
      </span>
      <div className="grid grid-cols-[322px_438px_322px] w-[1130px] gap-6">
        <SecurityBox />
        <MapBox />
        <LiveChat />
      </div>
    </div>
  );
};

export default JourneyIntroSection;
