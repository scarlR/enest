
import PopularCreatorCard from './PopularCreatorCard';

const PopularCreator = () => {
  return (
    <div className="font-title px-36 py-16 text-center flex flex-col gap-8">
      <h2 className="text-[#7A1DC5] text-3xl font-semibold">
        Meet our Popular Creator
      </h2>
      <div className="flex gap-4 items-center justify-center">
        <PopularCreatorCard />
        <PopularCreatorCard />
        <PopularCreatorCard />
      </div>
    </div>
  );
}

export default PopularCreator