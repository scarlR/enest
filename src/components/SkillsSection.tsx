import SkillCard from "./SkillCard"


const SkillsSection = () => {
    return (
      <div className="font-title px-36 py-16 text-center flex flex-col gap-8">
        <h3 className="text-[#7A1DC5] text-3xl font-semibold">
          Why you should work on new skills
        </h3>
        <div className="flex gap-4 items-center justify-center">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    );
}

export default SkillsSection