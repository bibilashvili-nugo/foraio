import { ChartPie, Heart, MainComponent, Tag } from "./ui/icons";

interface BenefitsProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const StatsCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[52px] leading-[74px] font-satoshi-bold text-[#0D0D0D]">
        {title}
      </span>
      <span className="text-base leading-6 text-[#525252] font-satoshi-medium">
        {desc}
      </span>
    </div>
  );
};

const Benefits = ({ title, desc, icon }: BenefitsProps) => {
  return (
    <div className=" bg-[#F7F7F7] px-4 py-5 rounded-3xl flex flex-col gap-2.5">
      <div className="p-1.5 bg-[#FFFFFF] w-fit border border-[#EEEEEE] rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold">
          {title}
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
          {desc}
        </span>
      </div>
    </div>
  );
};

const CashflowExperience = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <div className="w-[898px] bg-linear-to-b from-[#F7F7F7] to-[#FFFFFF] border border-[#EEEEEE] p-8 rounded-3xl flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="p-3 bg-white border border-[#EEEEEE] rounded-full w-fit flex items-center justify-center">
            <ChartPie />
          </div>
          <span className="text-2xl leading-8 text-[#0D0D0D] font-satoshi-medium mt-2 block text-center">
            Trusted 20k+ forward thinking customers
          </span>
          <span className="block text-center mt-3 text-base leading-6 text-[#525252] font-satoshi-medium">
            Whether you’re an individual or business team, our platform makes
            managing finances easy and helps you scale faster
          </span>
        </div>
        <div className="grid grid-cols-3 text-center">
          <StatsCard title="3x" desc="Faster onboarding" />
          <StatsCard title="1 year" desc="Average time to revenue growth" />
          <StatsCard title="24/7" desc="Smart support" />
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center">
        <span className="text-[52px] leading-[74px] text-[#0D0D0D] font-satoshi-medium text-center">
          Experience cashflow with benefits everyday
        </span>
        <span className="blocl mt-2 text-center text-base leading-6 text-[#525252] font-satoshi-medium w-[834px]">
          Enjoy zero-fee transfers and advanced security tools giving you the
          freedom to manage your money with confidence and control
        </span>
        {/* 3 items in a row */}
        <div className="mt-8 flex gap-6 max-w-[1130px]">
          <Benefits
            title="No fee transfers"
            desc="Send money freely and repeat payments with zero transfer fees"
            icon={<Tag />}
          />
          <Benefits
            title="Smart account management"
            desc="Easily manage funds, separate expenses and earn yield all one platform"
            icon={<MainComponent />}
          />
          <Benefits
            title="Next level security"
            desc="Protect your money with authentication and advanced access controls"
            icon={<Heart />}
          />
        </div>
      </div>
    </div>
  );
};

export default CashflowExperience;
