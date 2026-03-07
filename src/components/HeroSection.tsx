import { Link } from 'react-router-dom';

interface HeroSectionProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryCTA?: { text: string; to: string };
  secondaryCTA?: { text: string; to: string };
  variant?: 'dark' | 'light';
}

export default function HeroSection({
  label,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = 'dark',
}: HeroSectionProps) {
  return (
    <section className={`hero hero--${variant}`} aria-label="Page hero">
      <div className="container">
        <div className="hero-inner">
          {label && <span className="hero-label">{label}</span>}
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {(primaryCTA || secondaryCTA) && (
            <div className="hero-ctas">
              {primaryCTA && (
                <Link to={primaryCTA.to} className="btn btn--secondary btn--lg">
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.to} className="btn btn--outline-white btn--lg">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
