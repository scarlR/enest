import dummycreator from "../assets/dummycreator.svg";

const PopularCreatorCard = () => {
  return (
    <div className="flex gap-4 h-[186px] border border-[#D1CCD6] rounded-sm p-4">
      <img
        className="w-20 h-20 rounded-full translate-y-[20%]"
        src={dummycreator}
        alt="dummycreator"
      />
      <div className="flex justify-start items-start flex-col gap-4 font-title translate-y-[10%]">
        <h4 className="font-bold text-xl text-[#4D4755]">
          Mr. Chatur Ramalingam
        </h4>
        <p className="text-sm text-[#8A8491] font-medium max-w-[236px] text-start">
          Food Technologist, Dairy Management
        </p>
        <div className="flex items-start justify-between gap-8">
          <span className="font-bold">
            20<span className="font-medium text-[#8A8491] ml-1">Course</span>
          </span>
          <span className="text-[#007AFF] font-medium">Explore More</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCreatorCard;
