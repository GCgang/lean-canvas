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
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const toggleSlidebar = () => {
    setSideBarOpen((prev) => !prev);
  };
  const handleDark = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <header className='bg-gray-800 text-white px-4'>
      <div className='flex justify-between h-12 items-center'>
        <div className='md:hidden '>
          <button onClick={toggleSlidebar}>
            {sideBarOpen ? (
              <IoMdClose className='h-6 w-6' />
            ) : (
              <FaBars className='h-6 w-6' />
            )}
          </button>
        </div>
        <h2 className='text-xl'>
          <Link to='/'>Lean Canvas</Link>
        </h2>
        <div>
          <button onClick={handleDark}>
            {isDark ? (
              <IoMdMoon className='h-6 w-6' />
            ) : (
              <IoMdSunny className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      <aside
        className={`fixed left-0 top-12 h-full w-52 bg-gray-800 p-4 transition-transform duration-300 transform ${
          sideBarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <nav>
          <ul className='space-y-2'>
            {navItems.map(({ id, to, label }) => (
              <li key={id}>
                <NavLink to={to}> {label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}
