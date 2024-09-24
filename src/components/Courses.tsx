import { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../assets/arrow.svg";
import CoursesCard from "./CoursesCard";


interface Category {
  name: string;
  subcategories: string[];
}


interface Instructor {
  name: string;
}
interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: Instructor;
  price: number;
  rating: number;
  image: string;
  isBestseller: boolean;
  categories: Category[];
}

const Courses = () => {
  const [courseCategory, setCourseCategory] = useState<string>("Agriculture");
  const [subCourseCategory, setSubCourseCategory] =
    useState<string>("Organic Farming");
  const [courses, setCourses] = useState<Course[] | null>(null);


  const fetchCourses = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/course/all");
        setCourses(data.courses);
       console.log(courses);
    } catch (error) {
      console.error("Error ", error);
    }
  };

    useEffect(() => {
     
    fetchCourses();
  }, [courseCategory, subCourseCategory]);

    return (
      <div className="flex flex-col flex-1 justify-center items-center gap-10 ">
        <div className="border-b border-[#4D4755] w-full flex justify-start items-start gap-4 text-sm sm:gap-8 md:text-lg md:gap-16 lg:gap-32 py-4">
          <button onClick={() => setCourseCategory("Agriculture")}>
            Agriculture
          </button>
          <button onClick={() => setCourseCategory("Food Engineering")}>
            Food Engineering
          </button>
          <button onClick={() => setCourseCategory("Dairy Science")}>
            Dairy Science
          </button>
          <button onClick={() => setCourseCategory("Personal Development")}>
            Personal Development
          </button>
        </div>

        <div className="flex md:flex-col-2 gap-4 justify-center flex-wrap ">
          {courses?.slice(0, 4).map((course) => (
            <CoursesCard key={course._id} course={course} />
          ))}
        </div>

        <button className="text-[#4D4755] text-xl font-semibold font-title border h-12 max-w-[359px] border-[#4D4755] flex justify-center items-center gap-4 p-8 rounded-lg ">
          Explore all {courseCategory} Courses
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>
    );
};

export default Courses;
