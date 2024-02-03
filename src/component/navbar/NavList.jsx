import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const NavList = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Menambahkan state untuk kontrol visibilitas menu
  const activeLink = 'text-lime-300';
  const inactiveLink = 'text-gray-300 hover:text-lime-300 transition-all duration-500 ease-in-out';

  return (
    <>
      <div className='text-white fixed right-6 cursor-pointer md:hidden z-10'  onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <FontAwesomeIcon className='active:text-neutral-800' icon={faBars} size="2x" />
      </div>
      {/* Menampilkan menu navigasi untuk tampilan mobile */}
      <div className={`md:hidden ${isMenuVisible ? 'flex' : 'hidden'} bg-neutral-700 border w-1/3 z-10 fixed right-14 top-7 rounded-lg flex-col text-center`}>
        {[
          ['About', '/About'],
          ['Project', '/Project'],
          ['Experience', '/Experience'],
          ['Blog', '/Blog'],
        ].map(([title, url]) => (
          <NavLink
            key={title} // Menambahkan key untuk performa rendering yang lebih baik
            to={url}
            className={({ isActive }) =>
              isActive ? `${activeLink} text-sm font-semibold px-3 py-2` : `${inactiveLink} text-sm font-medium px-3 py-2`
            }
            onClick={() => setIsMenuVisible(false)} // Menutup menu ketika salah satu link diklik
          >
            {title}
          </NavLink>
        ))}
      </div>
      {/* Menu navigasi untuk tampilan non-mobile (lg dan lebih besar) */}
      <nav className='hidden md:flex border rounded-full px-3 border-gray-300'>
        {[
          ['About', '/About'],
          ['Project', '/Project'],
          ['Experience', '/Experience'],
          ['Blog', '/Blog'],
        ].map(([title, url]) => (
          <NavLink
            key={title} // Menambahkan key untuk performa rendering yang lebih baik
            to={url}
            className={({ isActive }) =>
              isActive ? `${activeLink} text-sm font-semibold px-3 py-2` : `${inactiveLink} text-sm font-medium px-3 py-2`
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default NavList;
