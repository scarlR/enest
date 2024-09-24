import React from "react";
import boy from "../assets/man.png";
import degree from "../assets/degree.png";
import girl from "../assets/girl.png";
import Courses from "./Courses";

const HeroSection = () => {
  return (
    <div className="bg-[#F5F2F8] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left side */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 font-title lg:w-1/2">
          <p className="text-secondary text-lg sm:text-xl">Skill Connect</p>
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl">
            Develop new skills
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl max-w-[576px]">
            Mentorship for Future leader in Agri and food tech
          </h3>
          <button className="bg-[#F9BB05] text-[#1D0532] font-semibold rounded-full py-3 px-6 max-w-[160px] hover:bg-[#E0A800] transition-colors">
            Get Started
          </button>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row gap-4 lg:w-1/2">
          <img
            className="w-full sm:w-1/2 h-auto object-cover rounded-3xl"
            src={boy}
            alt="boy"
          />
          <div className="flex flex-row sm:flex-col justify-between w-full sm:w-1/2 gap-4">
            <img
              className="w-1/2 sm:w-full h-auto sm:h-1/2 rounded-3xl object-cover"
              src={degree}
              alt="degree"
            />
            <img
              className="w-1/2 sm:w-full h-auto sm:h-1/2 rounded-3xl object-cover"
              src={girl}
              alt="girl"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-12">
        <Courses />
      </div>
    </div>
  );
};

export default HeroSection;
