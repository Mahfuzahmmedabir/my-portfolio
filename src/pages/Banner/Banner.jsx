import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="lg:flex lg:justify-evenly ">
        <div className="lg:py-28 ">
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
            <li>
              <a
                href="https://github.com/Mahfuzahmmedabir"
                className=" text-3xl"
                target="_blank"
              >
                <FaGithub></FaGithub>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-6/12 mt-8">
          {/* <img src={banner} alt="" /> */}
          <h2 className="text-center text-8xl">TODO</h2>
          <h2 className="text-center text-2xl">img</h2>
        </div>
      </div>
    </div>
  );
};
export default Banner;
