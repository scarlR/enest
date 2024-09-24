
import britania from '../assets/britania.png'

import itc from "../assets/itc.png";
const TrustedPartner = () => {
  return (
    <div className="w-full h-48 flex flex-col  items-center ">
      <h4 className="text-[#6E6776] font-medium text-xl font-title py-6">
        Trusted by over 150 companies and millions of learners around the world
      </h4>
      <div className="flex justify-center items-center gap-28">
        <img src={britania} alt="britania" />
        <img src={itc} alt="itc" />
        <img src={britania} alt="britania" />
        <img src={itc} alt="itc" />
        <img src={britania} alt="britania" />
      </div>
    </div>
  );
}

export default TrustedPartner