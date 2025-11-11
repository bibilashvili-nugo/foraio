import Image from "next/image";
import {
  Cypros,
  Finland,
  France,
  Germany,
  Greece,
  Italy,
  Poland,
  Romania,
  Spain,
} from "../ui/countryIcons";

const MapBox = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-3xl relative overflow-hidden">
      <Image
        width={438}
        height={355}
        alt="map"
        src={"/images/Map.png"}
        className="w-full h-auto rounded-3xl"
      />
      <div className="flex flex-col px-5 pb-6 absolute bottom-0 left-0 right-0">
        <span className="text-base leading-6 text-[#0D0D0D] font-satoshi-bold text-start">
          Multi-currency support
        </span>
        <span className="text-sm leading-5 text-[#525252] font-satoshi-medium">
          Your data stays private with end-to-end encryption and multi-layer
          protection
        </span>
      </div>
      <div className="absolute top-25 left-25">
        <Spain width={24} height={24} />
        {/* spain */}
      </div>
      <div className="absolute top-18 left-30">
        <France width={24} height={24} />
        {/* france */}
      </div>
      <div className="absolute top-13 left-35">
        <Germany width={24} height={24} />
        {/* germany */}
      </div>
      <div className="absolute top-11 left-44">
        <Finland width={24} height={24} />
        {/* finland */}
      </div>
      <div className="absolute top-18 left-44">
        <Poland width={24} height={24} />
        {/* poland */}
      </div>
      <div className="absolute top-22 left-50">
        <Romania width={24} height={24} />
        {/* romania */}
      </div>
      <div className="absolute top-26 left-45">
        <Greece width={24} height={24} />
        {/* greece */}
      </div>
      <div className="absolute top-24 left-38">
        <Italy width={24} height={24} />
        {/* italy */}
      </div>
      <div className="absolute top-32 left-55">
        <Cypros width={24} height={24} />
        {/* cypros */}
      </div>
    </div>
  );
};

export default MapBox;
