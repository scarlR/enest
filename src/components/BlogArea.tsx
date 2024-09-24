import rectangle from "../assets/rectangle.png";

const BlogArea = () => {
  return (
    <div className=" h-[600px] flex gap-20  px-36 py-16">
      <div className="flex justify-center items-start flex-col gap-4">
        <h3 className="font-bold text-4xl text-[#646363]">
          Read Blogs and Articles
        </h3>
        <h2 className="text-[#4D4755] text-5xl max-w-[421px] font-semibold">
          Explore latest news and trend
        </h2>
        <p className="text-[#646363] text-sm max-w-[440px]">
          “commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis”
        </p>
        <button className="bg-[#7A1DC5] w-[160px] rounded-full p-3 text-white">See Blogs</button>
      </div>
      <img className="h-[465px] w-[736px]" src={rectangle} alt="rectangle" />
    </div>
  );
};

export default BlogArea;
