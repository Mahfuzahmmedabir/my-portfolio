import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <ul className="lg:flex">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#skill">Skill</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
  return (
    <div className=" sticky bg-base-200  top-0 z-50 ">
      <div className="navbar justify-evenly">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-extrabold hidden lg:block ">Mahfuz Ahmed</a>
        </div>
        <div className="navbar-center hidden gap-3 lg:flex">
          <ul className="menu menu-horizontal  font-semibold text-[16px]  gap-12 px-1">
            {links}
          </ul>
        </div>
        <div className="">
          <a
            href="https://drive.google.com/file/d/1jSpy0SlCpF-ihNIqwTPoLkhQZ7DZoAKP/view?usp=sharing"
            className="btn text-xl" target='blank'
          >
            <FiDownload></FiDownload>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
