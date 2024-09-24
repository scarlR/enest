import profileimage from "../assets/profileimage.svg";

const SkillCard = () => {
  return (
    <div className="flex flex-col items-center justify-center border-t-8 p-4 text-center rounded-lg border-[#7A1DC5] border">
      <img
        className="w-28 h-28 rounded-full"
        src={profileimage}
        alt="profileimage"
      />
      <h3 className="font-semibold text-2xl mt-4">
        Sed diam nonummy nibhut magna.
      </h3>
      <p className="text-sm text-[#8A8491] font-medium mt-2">
        commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate
      </p>
    </div>
  );
};

export default SkillCard;
