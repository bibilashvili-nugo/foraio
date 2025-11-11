import { AmericanExpress, GoldWaves, MasterCard, Visa } from "../ui/icons";

const PayMentLogo = ({ Icon }: { Icon: React.ElementType }) => {
  return (
    <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center">
      <Icon />
    </div>
  );
};

const PersonalTouch = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl overflow-hidden flex flex-col justify-between">
      <div className="mt-[57px] flex flex-col items-center gap-6">
        <div className="px-[19px] py-7 bg-[#0D0D0D] rounded-full flex justify-center items-center">
          <GoldWaves width={34} height={16} />
        </div>
        <div className="flex gap-4">
          <PayMentLogo Icon={AmericanExpress} />
          <PayMentLogo Icon={MasterCard} />
          <PayMentLogo Icon={Visa} />
          <PayMentLogo Icon={AmericanExpress} />
          <PayMentLogo Icon={Visa} />
        </div>
      </div>
      <div className="flex flex-col px-4 pb-4 gap-1">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-center">
          {title}
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium text-center">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default PersonalTouch;
