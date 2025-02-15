import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { ITEMS } from '@/utils/items.ts';

const Navbar: React.FC = () => {
  return (
    <nav className={'Navbar'}>
      {ITEMS.map((item) => (
        <NavLink
          key={item}
          to={`/${item}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
