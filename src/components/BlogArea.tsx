import rectangle from "../assets/rectangle.png";

const BlogArea = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-36 py-16">
      <div className="flex justify-center items-start flex-col gap-4 md:w-1/2">
        <h3 className="font-bold text-3xl md:text-4xl text-[#646363]">
          Read Blogs and Articles
        </h3>
        <h2 className="text-[#4D4755] text-4xl md:text-5xl font-semibold max-w-[421px]">
          Explore latest news and trend
        </h2>
        <p className="text-[#646363] text-sm md:text-base max-w-[440px]">
          “commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis”
        </p>
        <button className="bg-[#7A1DC5] w-full md:w-[160px] rounded-full p-3 text-white">
          See Blogs
        </button>
      </div>
      <div className="flex justify-center items-center md:w-1/2">
        <img
          className="h-auto w-full max-w-[736px] md:h-[465px]"
          src={rectangle}
          alt="rectangle"
        />
      </div>
    </div>
  );
};

export default BlogArea;
