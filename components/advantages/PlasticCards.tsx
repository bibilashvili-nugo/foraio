import { BlackCard, LightGreenCard, PinkCard } from "../ui/icons";

const PlasticCards = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center mt-4 relative">
        <div className=" z-10">
          <BlackCard />
        </div>
        <div className="absolute top-[80] z-9">
          <PinkCard />
        </div>
        <div className="absolute z-10 top-[160]">
          <LightGreenCard />
        </div>
      </div>
      <div className="flex flex-col px-4 pb-4 gap-1">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-center">
          Virtual and Plastic cards
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium text-center">
          Get AIO virtual and physical cards for secure, flexible payments with
          multi-currency support, customizable spending controls, and enhanced
          security
        </span>
      </div>
    </div>
  );
};

export default PlasticCards;
