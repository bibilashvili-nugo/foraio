import Image from "next/image";
import { ArrowUpSm } from "react-coolicons";

const Footer = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-16 relative overflow-hidden">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 max-w-[668px]">
          <span className="text-base leading-6 text-[#525252] font-satoshi-medium">
            Acquire New Ventures AG is registered in Canton Zug, Switzerland,
            with company number 
            <span className="text-[#0D0D0D] font-satoshi-bold">
              CHE-492.759.632
            </span>
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-xs leading-4 text-[#525252] font-satoshi-medium">
              Acquire New Ventures AG is a member of SO-FIT, a self-regulatory
              organisation authorised by the Swiss Financial Market Supervisory
              Authority (FINMA) to supervise the financial intermediaries
              referred to in article 2 paragraph 3 of the Swiss Federal Act on
              Combating Money Laundering and Terrorist Financing in the
              Financial Sector (MLA)
            </span>
            <span className="text-xs leading-4 text-[#525252] font-satoshi-medium">
              Acquire New Ventures AG est membre de SO-FIT, un organisme
              d’autorégulation agréé par l’autorité fédérale suisse de
              surveillance de marchés financiers (FINMA) pour la surveillance
              des intermédiaires financiers visés à l’article 2 alinéa 3 de la
              loi fédérale suisse concernant la lutte contre le blanchiment
              d’argent et le financement du terrorisme dans le secteur financier
              (LBA).
            </span>
          </div>
        </div>
        <div className="flex gap-1 items-center py-2 px-4 bg-[#F7F7F7] border border-[#F0F0F0] rounded-[10px] cursor-pointer h-fit">
          <ArrowUpSm width={20} height={20} color="#525252" />
          <span>BACK TO TOP</span>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-base leading-6 text-[#525252] font-satoshi-medium ">
            Contact
          </span>
          <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold">
            info@aio.net
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-base leading-6 text-[#525252] font-satoshi-medium cursor-pointer underline underline-offset-3">
            Privacy policy
          </span>
          <span className="text-base leading-6 text-[#525252] font-satoshi-medium cursor-pointer underline underline-offset-3">
            Cookie policy
          </span>
          <span className="text-base leading-6 text-[#525252] font-satoshi-medium cursor-pointer underline underline-offset-3">
            Terms and conditions
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-16 pb-[54px]">
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
          © All rights reserved
        </span>
        <div className="flex items-center gap-6">
          <span className="text-sm leading-5 text-[#525252] font-satoshi-medium cursor-pointer">
            Facebook
          </span>
          <span className="text-sm leading-5 text-[#525252] font-satoshi-medium cursor-pointer">
            Instgaram
          </span>
          <span className="text-sm leading-5 text-[#525252] font-satoshi-medium cursor-pointer">
            Linkedin
          </span>
        </div>
      </div>
      <div className="absolute -bottom-20 left-0 w-full h-full -z-10">
        <Image
          src={"/images/AIO.png"}
          alt="AIO"
          width={1360}
          height={809}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
