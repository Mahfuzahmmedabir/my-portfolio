import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import {
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSquareWhatsapp,
} from 'react-icons/fa6';

import { MdEmail } from 'react-icons/md';
const Contact = () => {
  return (
    <div id="contact" className="m-10">
      <h2 className="text-3xl text-center font-semibold">
        Let's get connected
      </h2>

      <div className=" lg:flex justify-between gap-5 bg-base-200 rounded-lg lg:p-10 mt-10">
        <div className="mx-auto  lg:w-6/12 py-28 rounded-md ">
          <h2 className="text-3xl  font-bold">Contact me</h2>
          <p className="mt-10 text-[17px] w-96  ">
            I’d love to hear from you! Whether you have a project idea, job
            opportunity, or just want to connect, feel free to reach out. Let’s
            collaborate and build something amazing!
          </p>
          <div className="bg-base-300 lg:w-96 mt-6 p-7 rounded-xl ">
            <span className="text-xl font-bold flex items-center gap-2 ">
              <FaLocationDot className="text-[#1877F2]"></FaLocationDot>
              Bangladesh, Dhaka
            </span>
            <span className="text-xl font-bold flex items-center  mt-2 gap-2">
              <FaPhone className="text-[#1877F2]"></FaPhone>
              01869867024
            </span>
            <span className="text-xl font-bold flex items-center  mt-2 gap-2">
              <MdEmail className="text-[#1877F2]"></MdEmail>
              mahfuz.abir06@gmail.com
            </span>
          </div>

          {/* <div className="bg-base-300 lg:w-96 py-10 rounded-xl">
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
          </div> */}
        </div>
        <div className="card bg-base-100 mt-10 lg:w-6/12   shadow-2xl">
          <form className="card-body w-full p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">You Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
              <label
                className="label-text mt-2 text-xl font-bold"
                for="w3review"
              >
                Write your Masege
              </label>
              <textarea
                className="border mt-1 rounded-md p-2"
                id="w3review"
                name="w3review"
                rows="6"
                cols="50"
                placeholder="Write you masege here.."
              ></textarea>
            </div>
            <div className=" mt-6">
              <button className="btn ">Send Masege</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
