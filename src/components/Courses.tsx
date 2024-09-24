import arrow from "../assets/arrow.svg"
import CoursesCard from './CoursesCard'

const Courses = () => {
    return (
      <div className="flex flex-col flex-1 justify-center items-center gap-10 ">
        <div className="flex gap-4 justify-center ">
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </div>
        <button className="text-[#4D4755] text-xl font-semibold font-title border h-12 max-w-[359px] border-[#4D4755] flex justify-center items-center gap-4 px-3 rounded-lg ">
          Explore all Agriculture Courses{" "}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>
    );
}

export default Courses