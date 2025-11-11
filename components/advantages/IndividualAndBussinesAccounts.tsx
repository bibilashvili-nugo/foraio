import { ArrowDownUp, UserAdd } from "react-coolicons";
import { EuropeanUnion, UnitedKingdom, UnitedState } from "../ui/icons";

interface UserAndArrowProps {
  Icon: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
  title?: string;
  desc?: string;
}

const IndividualAndBussinesAccountsInput = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-[#FFFFFF] border border-r-0 border-[#F1F1F1] rounded-tl-xl rounded-bl-xl flex flex-col px-4 py-3 gap-0.5">
      <span className="text-[10px] leading-3 text-[#525252] font-satoshi-regular">
        {title}
      </span>
      <span className="text-xs leading-4 text-[#0D0D0D] font-satoshi-medium">
        {desc}
      </span>
    </div>
  );
};

const UserAndArrow = ({
  Icon,
  title = "New account",
  desc = "Enter the below details to sign up",
}: UserAndArrowProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="p-2 bg-linear-to-b from-[#FFD439] to-[#FFB639] w-fit rounded-full flex justify-center items-center">
        <Icon width={20} height={20} color="white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs leading-4 text-[#0D0D0D] font-satoshi-medium">
          {title}
        </span>
        <span className="text-[10px] leading-3 text-[#525252] font-satoshi-medium">
          {desc}
        </span>
      </div>
    </div>
  );
};

const AccountBox = () => {
  return (
    <div className="flex flex-col">
      <UserAndArrow
        Icon={UserAdd}
        title="New account"
        desc="Enter the below details to sign up"
      />
      {/* inputs */}
      <div className="mt-5 flex flex-col gap-3">
        <IndividualAndBussinesAccountsInput
          title="Full name"
          desc="Thomas Braun"
        />
        <IndividualAndBussinesAccountsInput
          title="Email"
          desc="thomasbraun@hotchocolate.com"
        />
        <IndividualAndBussinesAccountsInput
          title="Mobile number"
          desc="+123 456 678 890"
        />
      </div>
    </div>
  );
};

const CurrencyBox = () => {
  return (
    <div className="flex flex-col gap-4">
      <UserAndArrow
        Icon={ArrowDownUp}
        title="New account"
        desc="Enter the below details to sign up"
      />
      <div className="bg-white rounded-tl-2xl">
        <div className="pl-4 pt-3 flex items-center">
          <div className="flex flex-col gap-0.5 min-w-[227px]">
            <span className="text-[20px] leading-7 text-[#0D0D0D] font-satoshi-bold">
              €1,733
            </span>
            <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
              Balanace: €5,384.94
            </span>
          </div>
          <div className="flex items-center gap-1 p-2 bg-[#F7F7F7] rounded-2xl">
            <EuropeanUnion width={28} height={28} />
            <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
              EURO
            </span>
          </div>
        </div>
        <div className="mt-4 pl-4">
          <hr className="text-[#F7F7F7] " />
        </div>
        <div className="pl-4 mt-3 flex flex-col gap-4">
          <div className="flex justify-between w-[318px]">
            <div className="flex items-center gap-2">
              <UnitedState width={36} height={36} />
              <div className="flex flex-col">
                <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
                  US Dollar
                </span>
                <span className="text-xs leading-4 text-[#525252] font-satoshi-medium">
                  EUR
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[15px] leading-5 text-[#525252] font-satoshi-medium">
                EUR
              </span>
              <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-medium">
                845.60
              </span>
            </div>
          </div>
          <div className="flex justify-between w-[318px]">
            <div className="flex items-center gap-2">
              <UnitedKingdom width={36} height={36} />
              <div className="flex flex-col">
                <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
                  US Dollar
                </span>
                <span className="text-xs leading-4 text-[#525252] font-satoshi-medium">
                  EUR
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[15px] leading-5 text-[#525252] font-satoshi-medium">
                EUR
              </span>
              <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-medium">
                845.60
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndividualAndBussinesAccounts = ({
  title,
  desc,
  box,
}: {
  title: string;
  desc: string;
  box: string;
}) => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl flex flex-col gap-6">
      <div className="mt-5 ml-[37px] bg-linear-to-b from-[#FFFFFF] to-[rgba(255,255,255,0.1)] border-[6px] border-r-0 border-[#EEEEEE] rounded-tl-2xl rounded-bl-2xl">
        <div className="pt-4 pl-4 h-[241px] overflow-hidden">
          {box === "account" ? <AccountBox /> : <CurrencyBox />}
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col justify-center items-center gap-1">
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
