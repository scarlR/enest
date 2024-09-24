import certificate from "../assets/certificate.png"

const Certificate = () => {
  return (
    <div className="bg-[#1D0532] h-[500px] flex gap-20  px-36 py-16">
      <img
        className="h-[381px] w-[535px]"
        src={certificate}
        alt="certificate"
      />
      <div className="flex justify-center items-start flex-col gap-4">
        <h2 className="font-bold text-4xl text-white">
          Get a Completion Certificate
        </h2>
        <p className="text-[#DACEE7] text-sm max-w-[375px]">
          Share your certificate with prospective employers and your
          professional network on LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default Certificate