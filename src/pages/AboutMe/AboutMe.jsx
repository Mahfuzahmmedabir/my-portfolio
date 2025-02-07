import React from 'react';
// import about from '../../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="mt-14 ">
      <h2 className="text-3xl font-bold text-center ">About Me</h2>
      <div className="lg:flex mt-10 ">
        <div className="lg:w-4/12">
          {/* <img className="border-b-8 w-96 h-96" src={about} alt="" /> */}
          <h2 className="text-center text-8xl">TODO</h2>
          <h2 className="text-center text-2xl">img</h2>
        </div>
        <div className="lg:w-8/12">
          <h3 className="text-2xl font-bold  ">About me</h3>
          <p className="leading-7 text-[17px]">
            Hello! I’m Mahfuz, a passionate Full Stack Developer dedicated to
            building modern, efficient, and scalable web applications. With
            expertise in the MERN stack (MongoDB, Express.js, React.js,
            Node.js), I craft dynamic user experiences with clean, maintainable
            code. As a self-taught developer, I thrive on problem-solving and
            continuous learning. Whether it's designing intuitive UI components
            or developing robust backend architectures, I focus on delivering
            high-quality, performance-driven solutions.
          </p>
          <h2 className="text-2xl mt-2 font-bold"> My Full Stack Expertise</h2>
          <div className="leading-7 mt-2">
            <h3 className=" font-bold">Frontend Development (UI/UX Focus)</h3>
            <p>
              {' '}
              ✔ Languages & Frameworks: HTML5, CSS3, JavaScript (ES6+),
              TypeScript (learning).
            </p>
            <p>
              {' '}
              ✔ Frontend Libraries: React.js, Next.js, Tailwind CSS, Material
              UI.
            </p>
            <p>
              ✔ UI/UX Principles: Mobile-first design, CSS animations, Framer
              Motion.
            </p>
            <p>✔ State Management: React Context API.</p>
          </div>

          <div className="leading-7">
            <h3 className=" font-bold">Backend Development (Server & APIs).</h3>
            <p>✔ Backend Frameworks: Node.js, Express.js.</p>
            <p>✔ Databases: MongoDB , Firebase.</p>
            <p>
              ✔ API Development: RESTful APIs, Authentication (JWT, Firebase
              Auth).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
