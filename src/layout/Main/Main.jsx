import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx/Navbar';
import useAOS from '../../hooks/useAOS';


const Main = () => {
  useAOS()
  return (
    <div data-aos="fade-up">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;