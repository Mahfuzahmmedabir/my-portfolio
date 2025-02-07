import React from 'react';
import projectsData from '../../projectdata/projectsData';
import ProjectCard from './projectCard/ProjectCard';

const Project = () => {
  console.log(projectsData);
  return (
    <div className="mt-10">
      <section className="projects-slider ">
        <h2 className="text-3xl font-bold text-center ">My Projects</h2>
      </section>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projectsData.map(item => (
          <ProjectCard key={item.id} project={item}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
