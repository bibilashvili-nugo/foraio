import Image from "next/image";

const LiveChat = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl flex flex-col justify-between overflow-hidden">
      <div className="mt-4 ml-[62px] bg-linear-to-b from-white to-white/10 rounded-tl-2xl rounded-bl-2xl relative">
        <div className="flex items-center gap-2 mt-4 ml-4">
          <Image
            src={"/images/HumanImage.png"}
            alt="human image"
            width={36}
            height={36}
          />
          <div className="flex flex-col">
            <span className="text-xs leading-4 text-[#0D0D0D] font-satoshi-medium">
              Thomas Braun
            </span>
            <span className="text-[10px] leading-3 text-[#525252] font-satoshi-medium">
              Customer support
            </span>
          </div>
        </div>
        <div className="mt-4 ml-4">
          <span className="text-xs leading-4 text-[#0D0D0D] font-satoshi-medium p-2 bg-[#F7F7F7] rounded-xl">
            Hello, how can I help you?
          </span>
        </div>
        <div className="absolute -right-5 top-[100px] border border-[#EEEEEE] rounded-xl bg-white p-2 w-auto max-w-[167px]">
          <span className="text-xs leading-4 font-satoshi-medium text-start block">
            {`I'm interested in how much the commission fee is for transferring money`}
          </span>
        </div>
        <div
          className="bg-[linear-gradient(90deg,#4444FF_0%,#C68DFF_100%)] w-fit absolute top-[180px] px-6 py-4 rounded-[80px] flex items-center justify-center
        border-4 border-[#E5E5FF] shadow-[0_0_64px_0_#4444FF99] z-10"
        >
          <span className="text-xs leading-4 text-white uppercase font-satoshi-bold">
            24/7 Live chat support
          </span>
        </div>
        <div className="absolute top-[185px] z-9 left-8">
          <span className="block max-w-[143px] text-xs leading-4 text-[#525252] font-satoshi-medium">
            Our service has no commission you can send and receive money without
            any fee
          </span>
        </div>
      </div>
      <div className="flex flex-col px-5 pb-6">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-start">
          Support never sleep
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
          24/7 support, secure and simple anytime you need it
        </span>
      </div>
    </div>
  );
};

export default LiveChat;
