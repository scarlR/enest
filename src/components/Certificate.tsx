import certificate from "../assets/certificate.png";

const Certificate = () => {
  return (
    <div className="bg-[#1D0532] flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 px-4 sm:px-8 md:px-16 lg:px-36 py-8 md:py-12 lg:py-16 items-center">
      <img
        className="w-full sm:w-[300px] md:w-[400px] lg:w-[535px] h-auto"
        src={certificate}
        alt="certificate"
      />
      <div className="flex justify-center items-start flex-col gap-4 text-center lg:text-left">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
          Get a Completion Certificate
        </h2>
        <p className="text-[#DACEE7] text-xs sm:text-sm lg:text-base max-w-[300px] sm:max-w-[375px]">
          Share your certificate with prospective employers and your
          professional network on LinkedIn.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
