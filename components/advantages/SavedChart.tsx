import { CarrotChart } from "../ui/charts";

const SavedChart = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl flex flex-col justify-between relative overflow-hidden">
      <div className="mt-[42px] flex flex-col gap-0.5 items-center justify-center">
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium text-center">
          Saved
        </span>
        <span className="text-[28px] leading-9 text-[#0D0D0D] font-satoshi-bold text-center">
          €3,740
        </span>
      </div>
      <div className="absolute top-[100px]">
        <CarrotChart />
      </div>
      <div className="flex flex-col px-4 pb-4 gap-1">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-center">
          Prices
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium text-center">
          Access a range of smart financial solutions without breaking the bank
          quality services at prices you’ll love
        </span>
      </div>
    </div>
  );
};

export default SavedChart;
