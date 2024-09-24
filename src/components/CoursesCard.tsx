interface Course {
  title: string;
  description: string;
  instructor: Instructor;
  image: string;
  price: number;
  rating: number;
}
interface Instructor {
  name: string;
}
interface CoursesCardProps {
  course: Course;
}

const CoursesCard = ({ course }: CoursesCardProps) => {
  return (
    <div className="w-72 border-2 font-title">
      <img
        className="w-full rounded-t-3xl h-48 object-cover"
        src={course?.image}
        alt="man"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-[#4D4755]">{course.title}</h3>
        <p className="font-medium text-[#6E6776]">{course.description}</p>
        <p className="text-sm text-[#8A8491]">{course.instructor.name}</p>
        <p className="font-semibold text-xl">₹{course.price}</p>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <p>{course.rating}</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          {course.rating>4  && (
            <button className="bg-yellow-500 text-white px-2 py-1 rounded">
              Bestseller
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
