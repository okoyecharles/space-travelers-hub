import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const Header = () => (
  <>
    <nav className="container border-bottom border-3 d-flex align-items-center justify-content-between p-3">
      <div className="d-flex align-items-center justify-content-start">
        <img src={logo} alt="planet" className="logo" />
        <h1 className="ms-3">Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="my-0 d-flex align-items-center justify-content-around">
        <li className="px-3">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
            Rocket
          </NavLink>
        </li>
        <li className="border-start px-3">
          <NavLink to="/Missions" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
            Missions
          </NavLink>
        </li>
        <li className="border-start px-3">
          <NavLink to="/Profile" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Header;
