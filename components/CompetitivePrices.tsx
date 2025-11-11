import { Gift } from "./ui/icons";

const CompetitivePricesBox = ({
  packetName,
  price,
  color = false,
  border = false,
  last = false,
}: {
  packetName: string;
  price: string;
  color?: boolean;
  border?: boolean;
  last?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-[52px] ${
        border && "border-0 border-r border-[#F7F7F7] px-6"
      } ${last && "px-6"}`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-[28px] leading-9 text-[#0D0D0D] font-satoshi-medium">
          {packetName}
        </span>
        <span className="text-base leading-6 text-[#525252] font-satoshi-medium">
          Valid for one month
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-[28px] leading-9 text-[#0D0D0D] font-satoshi-bold">
          {price === "Free" ? (
            price
          ) : (
            <span>
              {price}{" "}
              <span className="text-base leading-6 text-[#525252] font-satoshi-bold">
                /month
              </span>
            </span>
          )}
        </span>
        <button
          className={`text-sm leading-5 text-[#0D0D0D] font-satoshi-bold py-[18px] w-full  rounded-[62px] cursor-pointer mt-5 ${
            color
              ? "bg-linear-to-r from-[#FFD53C] to-[#FFB739]"
              : "bg-[#F7F7F7]"
          }`}
        >
          Buy now
        </button>
        <span className="mt-4 text-xs leading-4 text-[#525252] font-satoshi-regular">
          Get started with powerful features that make everyday banking simple
        </span>
      </div>
    </div>
  );
};

const CompetitivePrices = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-16 flex flex-col bg-[#F7F7F7] rounded-[44px]">
      <div className="px-[115px] pt-16 pb-20 flex justify-center flex-col items-center">
        <div className="flex items-center gap-2 py-2 px-4 bg-white w-fit rounded-[10px] border border-[#FFFFFF0D]">
          <Gift />
          <span className="text-sm leading-5 text-[#FFB739] font-satoshi-medium">
            Prices
          </span>
        </div>
        <span className="text-[44px] leading-[54px] text-[#0D0D0D] font-satoshi-medium text-center mt-5">
          Discover our competitive prices
        </span>
        <span className="text-base leading-6 text-[#525252] font-satoshi-medium text-center">
          Check out our complete price list for clear, transparent pricing on
          every service and product
        </span>
        <div className="mt-[22px] bg-white border-[#FFFFFF1A] rounded-3xl w-full grid grid-cols-3 py-11 px-6">
          <CompetitivePricesBox
            packetName="Standard"
            price="Free"
            border={true}
          />
          <CompetitivePricesBox
            packetName="Premium"
            price="€15.00"
            color={true}
            border={true}
          />
          <CompetitivePricesBox packetName="VIP" price="€50.00" last={true} />
        </div>
      </div>
    </div>
  );
};

export default CompetitivePrices;
