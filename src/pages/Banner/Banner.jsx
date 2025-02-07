import React from 'react';
import banner from '../../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-evenly ">
        <div className="py-28">
          <p className="text-[20px]">Hello</p>
          <h2 className="text-4xl mt-4 font-bold text-gray-950 ">
            I' am Mahfuz
          </h2>
          <p className="mt-3 mb-4 text-xl">Full Stack Developer</p>
          <Link className="px-3  py-2 bg-slate-950 text-white font-semibold  rounded-full border">
            Downloaded Resume
          </Link>

          <ul className="mt-6 flex gap-5">
            <li>
              <a
                href="https://www.linkedin.com/in/mahfuz-ahmed-40155427b/"
                target="_blank"
                className="text-3xl text-[#0077B5]"
              >
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61561612522907"
                className="text-[#1877F2] text-3xl"
                target="_blank"
              >
                <FaFacebookSquare></FaFacebookSquare>
              </a>
            </li>

            <button className="text-[#4FCE5D] text-3xl">
              <FaSquareWhatsapp></FaSquareWhatsapp>
            </button>
            <a href="#contact" className="text-3xl">
              <MdEmail></MdEmail>
            </a>
          </ul>
        </div>

        <div className="w-6/12">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
