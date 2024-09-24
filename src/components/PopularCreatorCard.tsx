import dummycreator from "../assets/dummycreator.svg";
interface Creator {
  
  name: string;
    image: string;
  designation: string;
  totalCoursesCreated: number;
}

interface PopularCreatorCardProps {
  creator: Creator; 
}

const PopularCreatorCard: React.FC<PopularCreatorCardProps> = ({ creator }) => {
  return (
    <div className="flex gap-4 h-[186px] border border-[#D1CCD6] rounded-sm p-4 items-center">
      <img
        className="w-20 h-20 rounded-full"
        src={creator?.image || dummycreator} 
        alt="Creator"
      />
      <div className="flex flex-col justify-between font-title gap-2">
        <h4 className="font-bold text-xl text-[#4D4755] text-start">
          {creator.name}
        </h4>
        <p className="text-sm text-[#8A8491] font-medium max-w-[236px] text-start">
          {creator.designation}
        </p>
        <div className="flex items-center justify-between gap-4">
          <span className="font-bold">
            {creator.totalCoursesCreated}
            <span className="font-medium text-[#8A8491] ml-1">Course</span>
          </span>
          <span className="text-[#007AFF] font-medium">Explore More</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCreatorCard;
