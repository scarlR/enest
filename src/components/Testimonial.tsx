import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="font-title px-4 md:px-16 lg:px-36 py-16 text-center flex flex-col gap-8">
      <h3 className="text-[#7A1DC5] text-3xl font-semibold">Testimonials</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard /> 
      </div>
    </div>
  );
};

export default Testimonial;
