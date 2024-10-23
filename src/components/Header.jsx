import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny, IoMdClose } from 'react-icons/io';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'about', icon: <FaInfoCircle />, to: '/' },
    { id: 'contact', label: 'contact', icon: <FaEnvelope />, to: '/' },
  ];
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const toggleSlidebar = () => {
    setSideBarOpen((prev) => !prev);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  const handleDark = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <header className='fixed top-0 left-0 z-50 w-full px-4 text-white bg-gray-800'>
      <div className='flex items-center justify-between h-12'>
        <div className='md:hidden '>
          <button onClick={toggleSlidebar} aria-label='Open Sidebar'>
            {sideBarOpen ? (
              <IoMdClose className='w-6 h-6' />
            ) : (
              <FaBars className='w-6 h-6' />
            )}
          </button>
        </div>
        <h2 className='text-xl'>
          <Link to='/'>Lean Canvas</Link>
        </h2>
        <div>
          <button onClick={handleDark} aria-label='Change DarkMode'>
            {isDark ? (
              <IoMdMoon className='w-6 h-6' />
            ) : (
              <IoMdSunny className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      <aside
        className={`fixed left-0 top-12 h-full  opacity-90 z-50 bg-gray-800 p-4 transition-transform duration-300 transform ${
          sideBarOpen ? 'w-full translate-x-0' : 'w-52 -translate-x-full'
        } md:translate-x-0`}
      >
        <nav>
          <ul className='space-y-2'>
            {navItems.map(({ id, to, label }) => (
              <li key={id}>
                <NavLink
                  to={to}
                  onClick={closeSideBar}
                  className='block p-2 rounded-xl hover:bg-gray-700 hover:text-blue-400'
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}
