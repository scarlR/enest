import man from "../assets/man.png";
const CoursesCard = () => {
  return (
    <div className="w-80 border-2  font-title">
      <img
        className="w-full rounded-t-3xl h-48 object-cover"
        src={man}
        alt="man"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-[#4D4755]">title</h3>
        <p className="font-medium text-[#6E6776]">description</p>
        <p className="text-sm text-[#8A8491]">Dr. Chatur ramalingam</p>
        <p className="font-semibold text-xl">₹10000</p>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <p>4.8</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <button>Bestseller</button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
