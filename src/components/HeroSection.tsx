import boy from "../assets/man.png";
import degree from "../assets/degree.png";
import girl from "../assets/girl.png";
import Courses from "./Courses";

const HeroSection = () => {
    return (
      <div className=" bg-[#F5F2F8] px-24 py-10">
        <div className="flex justify-between gap-16 px-24 py-9 ">
          {/* left */}
          <div className="flex flex-col gap-10 font-title ">
            <p className="text-secondary text-xl ">Skill Connect</p>
            <h2 className=" font-semibold text-6xl">Develop new skills</h2>
            <h3 className="text-4xl max-w-[576px]">
              Mentorship for Future leader in Agri and food tech
            </h3>
            <button className="text-bg[#1D0532] max-w-40 bg-[#F9BB05] font-semibold rounded-full p-3">
              Get Started
            </button>
          </div>
          {/* right */}
          <div className="flex items-stretch gap-2">
            <img
              className="w-1/2 h-auto object-cover rounded-3xl"
              src={boy}
              alt="boy"
            />
            <div className="flex flex-col justify-between w-1/2 gap-2">
              <img
                className="h-1/2 w-full rounded-3xl object-cover"
                src={degree}
                alt="degree"
              />
              <img
                className="h-1/2 w-full rounded-3xl object-cover"
                src={girl}
                alt="girl"
              />
            </div>
          </div>
        </div>

        <Courses />
      </div>
    );
};

export default HeroSection;
