import React from 'react';
import banner from '../../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-evenly ">
        <div className="py-28">
          <p className="text-[18px]">Hello</p>
          <h2 className="text-4xl mt-4 font-bold text-orange-600 ">
            I' am Mahfuz
          </h2>
          <p className="mt-3 text-xl">Full Stack Developer</p>
          <button className="px-3 mt-3 py-2  rounded-full border">
            Downloaded Resume
          </button>
        </div>
        <div className="w-6/12">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
