import { ArrowDownUp, ArrowRightSm, Command } from "react-coolicons";
import { GreenChart } from "./ui/charts";
import { EuropeanUnion, UnitedKingdom, UnitedState } from "./ui/countryIcons";

const TransactionPanel = ({
  title,
  currency,
  amount,
}: {
  title: string;
  currency: string;
  amount: string;
}) => {
  return (
    <div className="flex justify-between items-center py-5 px-4 rounded-[20px]">
      <div className="flex flex-col gap-1">
        <span className="text-xs leading-4 text-[#969696] font-satoshi-medium">
          {title}
        </span>
        <span className="text-[20px] leading-7 text-[#0D0D0D] font-satoshi-bold">
          {currency === "USD" ? "$" : "€"}
          {amount}
        </span>
      </div>
      <div className="flex items-center gap-2 bg-[#F7F7F7] p-2 rounded-[40px]">
        {currency === "USD" ? <UnitedState /> : <EuropeanUnion />}
        <span className="text-xs leading-4 text-[#525252] font-satoshi-medium">
          {currency}
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="mt-11 flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center w-full mx-auto">
        <span className="block mx-auto text-center text-[52px] leading-[74px] text-[#0D0D0D] w-[898px] font-satoshi-bold">
          Discover an all-in-one platform designed for those who expect more
        </span>

        <span className="block mx-auto text-center text-base leading-6 text-[#525252] font-satoshi-medium mt-3">
          AIO offers exclusive access to your money with premium rewards
        </span>

        <button className="mt-5 flex items-center justify-center gap-1 py-4 px-9 bg-linear-to-r from-[#FFD339] to-[#FFB839] rounded-[50px] w-fit mx-auto cursor-pointer">
          <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
            Join in
          </span>
          <ArrowRightSm width={20} height={20} />
        </button>
      </div>

      {/* 3 items in a row */}
      <div className="mt-[54px] grid grid-cols-4 w-full gap-6">
        {/* 1 */}
        <div className="col-span-1 bg-[#F7F7F7] rounded-4xl p-4 flex flex-col gap-3">
          <div className="bg-white py-2.5 flex flex-col gap-2 rounded-[20px] relative">
            <TransactionPanel title="Selling" currency="USD" amount="349.00" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#F7F7F7] rounded-[30px] p-2 cursor-pointer">
              <ArrowDownUp width={20} height={20} color="#FFB639" />
            </div>
            <TransactionPanel title="Buying" currency="EUR" amount="301,88" />
          </div>
          <div className="bg-white p-4 rounded-t-lg rounded-b-[20px] flex flex-col gap-1 text-center">
            <span className="text-xs leading-4 text-[#969696] font-satoshi-medium">
              Indicative exchange rate
            </span>
            <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
              1$ = €0,86
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="col-span-2 bg-[#FFD23A] rounded-4xl p-8 flex flex-col gap-[38px]">
          <div className="bg-[#FFFFFF33] w-fit border border-[#FFFFFF33] py-3 px-4 rounded-[40px] flex gap-2 items-center cursor-pointer">
            <Command width={20} height={20} color="#0D0D0D" />
            <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-medium">
              Start managing smarter
            </span>
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-2xl leading-8 text-[#0D0D0D] font-satoshi-bold">
              Send. Receive. Transact
            </span>
            <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
              AIO makes global banking effortless. Open a modern account and
              enjoy fast, low-cost international transfers with full
              transparency and no hidden surprises. Manage multiple currencies,
              send and receive payments instantly, and stay in control of your
              finances anytime, anywhere
            </span>
          </div>
        </div>
        {/* 3 */}
        <div className="col-span-1 bg-[#F7F7F7] rounded-4xl px-4 pt-4">
          <div className="bg-white h-full rounded-t-[20px] relative overflow-hidden">
            <div className="flex items-center pt-4 pl-4 gap-2">
              <UnitedKingdom />
              <span className="text-[#0D0D0D] text-sm leading-5 font-satoshi-medium">
                GBP -{" "}
                <span className="text-[#525252] text-sm leading-5 font-satoshi-medium">
                  Pound
                </span>
              </span>
            </div>
            <span className="pl-4 pt-5 block text-[#0D0D0D] text-4xl leading-9 font-satoshi-bold">
              $1.3180
            </span>
            <span className="text-xs leading-4 text-[#525252] font-satoshi-medium pl-4 pt-3">
              Real-time price as of 10 Nov 12:48
            </span>
            <div className="absolute bottom-0 left-0">
              <GreenChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
