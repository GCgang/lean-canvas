import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny, IoMdClose } from 'react-icons/io';

import { NavLink } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'about', icon: <FaInfoCircle />, to: '/' },
    { id: 'contact', label: 'contact', icon: <FaEnvelope />, to: '/' },
  ];
  return (
    <header>
      <div>
        <div>
          <button>
            <FaBars />
            <IoMdClose />
          </button>
        </div>
        <h2>
          <Link to='/'>Lean Canvas</Link>
        </h2>
        <div>
          <button>
            <IoMdMoon />
            <IoMdSunny />
          </button>
        </div>
      </div>

      <aside>
        <nav>
          <ul>
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
