import { IndividualAndBussinesAccounts } from "./advantages/IndividualAndBussinesAccounts";
import PersonalTouch from "./advantages/PersonalTouch";
import PlasticCards from "./advantages/PlasticCards";
import SavedChart from "./advantages/SavedChart";
import { Cookie } from "./ui/icons";

const Advantages = () => {
  return (
    <div className="max-w-[1130px] mx-auto mt-16 flex flex-col gap-11">
      <div className="flex flex-col items-center">
        <div className="flex gap-2 items-center py-2 px-4 bg-[#F7F7F7] border border-[#F0F0F0] rounded-[10px] w-fit">
          <Cookie />
          <span className="text-sm leading-5 text-[#FFB839] font-satoshi-medium">
            Advantages
          </span>
        </div>
        <span className="text-[44px] leading-[54px] text-[#0D0D0D] font-satoshi-medium text-center mt-5">
          Discover the advantages
        </span>
        <span className="text-base leading-6 text-[#525252] font-satoshi-medium mt-3 text-center">
          AIO team recognized a common struggle: finding an all-in-one platform
          where clients could handle all their financial needs with
          straightforward pricing. The realization led us to create a fintech
          infrastructure for businesses and individuals. AIO provides financial
          solution backed by a highly experienced team and customer support that
          values real human interaction over chatbots.
        </span>
      </div>
      {/* 2 row, 3 item in a row */}
      <div className="grid grid-cols-3 gap-6">
        <IndividualAndBussinesAccounts
          title="Individual and Bussines accounts"
          desc="Effortlessly manage your finances with AIO. Open personal or business accounts with full IBAN and handle multiple currencies in one place"
          box="account"
        />
        <PlasticCards />
        <PersonalTouch
          title="Personal touch"
          desc="AIO puts customers first, always focusing on a personal approach that makes every client experience seamless, attentive, and meaningful"
        />
        <PersonalTouch
          title="Highest standards"
          desc="Quality service that meets EUROPEAN standards for smooth operations"
        />
        <IndividualAndBussinesAccounts
          title="Currency conversion"
          desc="Manage international transactions effortlessly with real-time currency conversion at competitive ECB rates. Send, receive, and hold multiple currencies in one secure account"
          box="currency"
        />
        <SavedChart />
      </div>
    </div>
  );
};

export default Advantages;
