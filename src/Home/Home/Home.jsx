import AboutMe from '../../pages/AboutMe/AboutMe';
import Banner from '../../pages/Banner/Banner';
import Contact from '../../pages/Contact/Contact';
import Project from '../../pages/Projects/Project';
import Skill from '../../pages/Skill/Skill';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
