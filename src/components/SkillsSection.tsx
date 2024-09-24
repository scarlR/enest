import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <div className="font-title px-4 sm:px-8 md:px-16 lg:px-36 py-16 text-center flex flex-col gap-8">
      <h3 className="text-[#7A1DC5] text-3xl font-semibold">
        Why you should work on new skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default SkillsSection;
