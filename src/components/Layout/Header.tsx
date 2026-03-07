import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header-logo" aria-label="The Possible Company — Home">
            <img src="/logo_orange_transparent.png" alt="The Possible Company" height="40" />
          </Link>

          <Navigation isOpen={navOpen} onToggle={() => setNavOpen((o) => !o)} />

          <div className="header-actions">
            <Link to="/contact" className="btn btn--primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
