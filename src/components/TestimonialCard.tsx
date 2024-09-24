import React from 'react'
import dummyuser from '../assets/dummyuser.png'
import quote from '../assets/quote.png'
const TestimonialCard = () => {
  return (
    <div className="w-[410px] h-[284px] flex border border-[#D1CCD6] rounded-md font-title">
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 text-start">
          <img className="w-8 h-7" src={quote} alt="quote" />
          <p className=" font-medium text-[#4D4755]">
            Commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis
          </p>
        </div>
        <div className="flex items-center mt-4 gap-4">
          <img src={dummyuser} alt="dummyuser" />
          <div className='text-start flex flex-col'>
            <p className="font-semibold text-[#4D4755]">Ranchoddas Chanchad</p>
            <p className="text-sm text-[#8A8491]">
              Partner Account Manager at Amazon Web Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard