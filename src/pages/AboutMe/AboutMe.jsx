import React from 'react';
import about from '../../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';

const AboutMe = () => {
  return (
    <div className="lg:flex mt-10">
      <div className="w-6/12">
        <img className="border-b-8 w-96 h-96" src={about} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
