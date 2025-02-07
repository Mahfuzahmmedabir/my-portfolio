import React from 'react';
// import Marquee from 'react-fast-marquee';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'Tailwindcss', level: 90 },
  { name: 'JavaScript', level: 65 },
  { name: 'React', level: 60 },
  { name: 'Node.js', level: 50 },
  { name: 'MongoDB', level: 40 },
  { name: 'Firebase', level: 90 },
];
const Skill = () => {
  return (
    <div id="skill" className="mt-14 z-10">
      <h2 className="text-center text-3xl font-bold">My Skill</h2>
      <div className="">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={skillsData} layout="vertical">
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              style={{ backgroundColor: '#ffffff' }}
              dataKey="name"
              width={100}
            />
            <Tooltip />
            <Bar dataKey="level" fill="#1f2124" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Skill;
