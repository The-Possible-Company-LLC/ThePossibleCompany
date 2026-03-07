import { Link } from 'react-router-dom';

interface CTAProps {
  headline: string;
  subtext: string;
  primaryCTA: { text: string; to: string };
  secondaryCTA?: { text: string; to: string };
}

export default function CallToActionSection({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
}: CTAProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{headline}</h2>
        <p>{subtext}</p>
        <div className="cta-buttons">
          <Link to={primaryCTA.to} className="btn btn--secondary btn--lg">
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link to={secondaryCTA.to} className="btn btn--outline-white btn--lg">
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
