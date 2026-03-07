import { NavLink } from 'react-router-dom';

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'Philosophy', to: '/philosophy' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export default function Navigation({ isOpen, onToggle }: NavigationProps) {
  return (
    <>
      <button
        className="nav-toggle"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={onToggle}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="site-nav"
        className={`site-nav${isOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="nav-list" role="list">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => onToggle()}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
