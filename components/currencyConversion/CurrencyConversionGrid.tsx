import { ReactNode } from "react";
import { EuropeanUnion, Switzerladn, UnitedKingdom } from "../ui/countryIcons";

interface GridContentProps {
  icon: ReactNode;
  amount?: string;
  title?: string;
  percentage?: string;
  gridTyepe: string;
  moneyGridSecond?: string;
  typeGridSecond?: string;
  day?: string;
  color?: string;
  subjects?: string;
}

const GridContent = ({
  icon,
  amount,
  title,
  percentage,
  gridTyepe,
  moneyGridSecond,
  typeGridSecond,
  day,
  color,
  subjects,
}: GridContentProps) => {
  return (
    <div
      className={`bg-white px-4 ${
        gridTyepe === "1" || gridTyepe === "3" ? "py-[21px]" : "py-4"
      } rounded-[20px] shadow-[0_8px_16px_0_#0000000D] flex items-center gap-2`}
    >
      {gridTyepe === "1" || gridTyepe === "2" ? (
        icon
      ) : (
        <div
          style={{ backgroundColor: color }}
          className="w-8 h-8 rounded-full"
        ></div>
      )}

      <div className="flex-1 flex flex-col gap-1">
        {gridTyepe === "1" ? (
          <>
            <span className="text-sm font-satoshi-medium text-[#0D0D0D]">
              {title}
            </span>
            <div className="w-full h-2 bg-[#F7F7F7] rounded-[30px] overflow-hidden">
              <span
                style={{ width: `${percentage}%` }}
                className={`block h-full bg-linear-to-r from-[#FFD53C] to-[#FFB639] rounded-full`}
              ></span>
            </div>
          </>
        ) : gridTyepe === "2" ? (
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold">
                {moneyGridSecond}
              </span>
              <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
                {typeGridSecond}
              </span>
            </div>
            <span className="text-xs leading-4 text-[#0D0D0D] font-satoshi-medium text-end">
              {day}
            </span>
          </div>
        ) : (
          <span className="text-sm leading-5 text-[#0D0D0D] font-satoshi-medium">
            {subjects}
          </span>
        )}
      </div>
      <div className="ml-4">
        {gridTyepe === "1" || gridTyepe === "3" ? (
          <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
            {amount}
          </span>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const CurrencyConversionGrid = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl py-5 px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1 justify-center items-center">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-center">
          {title}
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium text-center">
          {desc}
        </span>
      </div>
      <div className="relative h-[162px]">
        {title === "Analytics" ? (
          <>
            <div className="absolute top-0 left-0 w-full z-30">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                amount="€73.74"
                title="EURO"
                percentage="70"
                gridTyepe="1"
              />
            </div>
            <div className="absolute top-12 left-0 w-full z-20 px-4">
              <GridContent
                icon={<UnitedKingdom width={32} height={32} />}
                amount="€43.54"
                title="US Dollar"
                percentage="80"
                gridTyepe="1"
              />
            </div>
            <div className="absolute top-24 left-0 w-full z-10 px-8 opacity-80">
              <GridContent
                icon={<Switzerladn width={32} height={32} />}
                amount="€84.74"
                title="UK Pound sterling"
                percentage="40"
                gridTyepe="1"
              />
            </div>
          </>
        ) : title === "Budgeting" ? (
          <>
            <div className="absolute top-0 left-0 w-full z-30">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                gridTyepe="2"
                moneyGridSecond="€3,438.00"
                typeGridSecond="Sales"
              />
            </div>
            <div className="absolute top-12 left-0 w-full z-20 px-4">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                gridTyepe="2"
                moneyGridSecond="€3,438.00"
                typeGridSecond="Orders"
              />
            </div>
            <div className="absolute top-24 left-0 w-full z-10 px-8 opacity-80">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                gridTyepe="2"
                moneyGridSecond="€3,438.00"
                typeGridSecond="Orders"
                day="Last 30 days"
              />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-full z-30">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                gridTyepe="3"
                color="#4444FF"
                subjects="Transport"
                amount="€73.74"
              />
            </div>
            <div className="absolute top-12 left-0 w-full z-20 px-4">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                gridTyepe="3"
                color="#36C701"
                subjects="Shopping"
                amount="-€373.30"
              />
            </div>
            <div className="absolute top-24 left-0 w-full z-10 px-8 opacity-80">
              <GridContent
                icon={<EuropeanUnion width={32} height={32} />}
                gridTyepe="3"
                color="#FFD52C"
                subjects="Travel"
                amount="€1,457.00"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CurrencyConversionGrid;
