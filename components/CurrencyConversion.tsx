import CurrencyConversionGrid from "./currencyConversion/CurrencyConversionGrid";
import {
  EuropeanUnion,
  Switzerladn,
  UnitedKingdom,
  UnitedState,
} from "./ui/countryIcons";
import { ArrowReload } from "./ui/icons";

interface CurrencyConversionBoxProps {
  Icon: React.ComponentType<{ width?: number; height?: number }>;
  currencyName: string;
  currencyShort: string;
  money: string;
}

const CurrencyConversionBox = ({
  Icon,
  currencyName,
  currencyShort,
  money,
}: CurrencyConversionBoxProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 py-2">
        <Icon width={36} height={36} />
        <div className="flex flex-col">
          <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
            {currencyName}
          </span>
          <span className="text-xs leading-4 text-[#525252] font-satoshi-medium">
            {currencyShort}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[15px] leading-5 text-[#525252] font-satoshi-medium">
          {currencyShort}
        </span>
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-medium">
          {money}
        </span>
      </div>
    </div>
  );
};

const CurrencyConversion = () => {
  return (
    <div className="max-w-[1130px] mx-auto mt-16 flex flex-col gap-11">
      <div className="flex items-center">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-2 py-2 px-4 bg-[#F7F7F7] rounded-[10px] border border-[#F0F0F0] w-fit">
            <ArrowReload />
            <span className="text-sm leading-5 text-[#FFB839] font-satoshi-medium ">
              Account transfer
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[44px] leading-[54px] text-[#0D0D0D] font-satoshi-medium">
              Currency conversion: your gatewway to secure transactions
            </span>
            <span className="text-base leading-6 text-[#525252] font-satoshi-medium">
              AIO: simplifying payments in the UK, Europe and internationally
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-[#F7F7F7] rounded-3xl p-6 flex flex-col gap-4 mr-6">
          <span className="text-2xl leading-8 text-[#0D0D0D] font-satoshi-bold">
            Currency conversion
          </span>
          <div className="bg-white rounded-2xl px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[20px] leading-7 text-[#0D0D0D] font-satoshi-bold">
                  €1,733
                </span>
                <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
                  Balanace: €5,384.94
                </span>
              </div>
              <div className="flex items-center gap-1 py-2 pl-2 pr-3 bg-[#F7F7F7] rounded-2xl">
                <EuropeanUnion width={28} height={28} />
                <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-bold">
                  EURO
                </span>
              </div>
            </div>
            <hr className="mt-4 text-[#F7F7F7]" />
            <div className="mt-3 flex flex-col gap-2">
              <CurrencyConversionBox
                Icon={UnitedState}
                currencyName="US Dollar"
                currencyShort="USD"
                money="845.60"
              />
              <CurrencyConversionBox
                Icon={UnitedKingdom}
                currencyName="British Pound Sterling"
                currencyShort="GBP"
                money="720.40"
              />
              <CurrencyConversionBox
                Icon={Switzerladn}
                currencyName="Swiss Franc"
                currencyShort="CHF"
                money="914.99"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <CurrencyConversionGrid
          title="Analytics"
          desc="Discover valuable insights into your financial habits through advanced analytics, enabling smarter decisions and better financial control"
        />
        <CurrencyConversionGrid
          title="Budgeting"
          desc="Control your budget, balance your income and expenses, and achieve your financial goals effortlessly"
        />
        <CurrencyConversionGrid
          title="Accounts"
          desc="Seamlessly manage all your accounts with our intuitive platform and gain a clear, organized view of your finances"
        />
      </div>
    </div>
  );
};

export default CurrencyConversion;
