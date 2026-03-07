import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}logo_orange_transparent.png`} alt="The Possible Company" height="36" />
            <p>
              Bridging the AI Literacy Gap for small businesses, nonprofits, and community
              organizations. Anything's possible.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-heading">Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/who-we-serve">Who We Serve</Link></li>
                <li><Link to="/philosophy">Philosophy</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="footer-heading">Services</p>
            <ul className="footer-links">
              <li><Link to="/services">Assess</Link></li>
              <li><Link to="/services">Educate</Link></li>
              <li><Link to="/services">Implement</Link></li>
              <li><Link to="/services">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Contact</p>
            <div className="footer-contact-item">
              <span>Nicholas Aquino</span>
              <a href="mailto:Nick.Aquino@ThePossibleCompany.ai">
                Nick.Aquino@ThePossibleCompany.ai
              </a>
            </div>
            <div className="footer-contact-item">
              <a href="tel:7347566012">734-756-6012</a>
            </div>
            <div className="footer-contact-item">
              <a
                href="https://linkedin.com/in/nick-aquino-b725352"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="footer-contact-item">
              <span>Canton, Michigan</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} The Possible Company LLC. All rights reserved.</p>
          <p>Canton, Michigan · AI Literacy &amp; Consulting</p>
        </div>
      </div>
    </footer>
  );
}
