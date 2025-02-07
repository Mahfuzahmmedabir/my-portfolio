import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../../../projectdata/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const details = projectsData.find(item => item.id == id);
  // console.log(details);
  const { description, title, tech, image, demo, repo, Features } = details;

  return (
    <div>
      <div className="lg:flex gap-10 mt-10">
        <div className="lg:w-6/12">
          <img src={image} alt="" />
        </div>
        <div className="lg:w-6/12">
          <h2 className="text-xl font-semibold">
            <span className="text-gray-600 font-bold">Name:</span> {title}
          </h2>
          <p className="mt-2">
            <span className="text-gray-600 font-bold">Description: </span>
            {description}
          </p>
          <div>
            <h2 className="mt-3 text-gray-600 font-bold">Key Features</h2>
            <div className="mt-3">
              {Features?.map(item => (
                <p className="mt-1">{item} </p>
              ))}
            </div>
          </div>
          <div className=" mt-2 flex items-center gap-3">
            <h2 className=" text-gray-600 font-bold">Technology used:</h2>
            {tech?.map(technology => (
              <>{technology}</>
            ))}
          </div>

          <div className="mt-2">
            <ul className="flex gap-28 mt-8">
              <li className="">
                <a
                  className="text-xl rounded-lg bg-black text-white py-2 px-3 border "
                  href={demo}
                  target='blank'
                >
                  Live link
                </a>
              </li>
              <li className="">
                <a
                  className="text-xl py-2 rounded-lg bg-black text-white px-3 border "
                  href={repo}
                  target='blank'
                >
                  Github Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
