import React from 'react';
import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
  console.log(project);
  const { description, title, tech, id, image, demo, repo } = project;
  return (
    <div className=" p-7 bg-base-200   rounded-xl ">
      <img className="w-96" src={image} alt="" />
      <h2 className="mb-4 mt-3 text-xl font-semibold">
        {' '}
        Project name: {title}
      </h2>
      <div className="flex justify-between items-center    ">
        <Link
          className="border   mx-auto  bg-black text-white font-semibold rounded-full  px-3 py-2"
          to={`details/${id}`}
        >
          View More
        </Link>
        {/* <Link
          className="border font-semibold bg-slate-900 text-white rounded-full px-3 py-2"
          to={`details/${id}`}
        >
          Live Demo
        </Link> */}
      </div>
    </div>
  );
};

export default ProjectCard;
