
import { useEffect, useState } from 'react';
import PopularCreatorCard from './PopularCreatorCard';
import axios from 'axios';

interface Creator {
    _id: string;
    name: string;
    image: string;
  email: string;
  
  designation: string; 
  totalCoursesCreated: number; 
}


const PopularCreator = () => {

    const [creators, setCreators] = useState<Creator[] | null>(null);
    const fetchCreators = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/creator/all"
        );
        setCreators(response.data.creators); 
      } catch (error) {
        console.error("Error ", error);
      }
    };

    useEffect(() => {
      fetchCreators();
    }, []);

  return (
    <div className="font-title px-36 py-16 text-center flex flex-col gap-8">
      <h2 className="text-[#7A1DC5] text-3xl font-semibold">
        Meet our Popular Creator
      </h2>
      <div className="flex gap-4 items-center justify-center">
        {creators?.slice(0, 3).map((creator) => (
          <PopularCreatorCard key={creator._id} creator={creator} />
        ))}
      </div>
    </div>
  );
}

export default PopularCreator