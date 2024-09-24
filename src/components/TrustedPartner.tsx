
import britania from '../assets/britania.png'

import itc from "../assets/itc.png";
const TrustedPartner = () => {
  return (
    <div className="w-full flex flex-col my-8 items-center ">
      <h4 className="text-[#6E6776] font-medium text-xl font-title py-6">
        Trusted by over 150 companies and millions of learners around the world
      </h4>
      <div className="flex justify-center items-center gap-4 sm:gap-8 sm:my-4 md:gap-14 lg:gap-32">
        <img className='w-20 md:w-24 lg:w-28' src={britania} alt="britania" />
        <img className='w-20 md:w-24 lg:w-28' src={itc} alt="itc" />
        <img className='w-20 md:w-24 lg:w-28' src={britania} alt="britania" />
        <img className='w-20 md:w-24 lg:w-28' src={itc} alt="itc" />
        <img className='w-20 md:w-24 lg:w-28' src={britania} alt="britania" />
      </div>
    </div>
  );
}

export default TrustedPartner