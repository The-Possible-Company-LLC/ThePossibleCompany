import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from '../data/articles';
import CallToActionSection from '../components/CallToActionSection';

// Map each slug to its lazily-loaded content component.
// Add a new entry here whenever you create a new article file.
const contentComponents: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  'bridging-ai-literacy-gap': lazy(() => import('../articles/bridging-ai-literacy-gap')),
};

export default function ResourceArticle() {
  const { slug } = useParams<{ slug: string }>();

  const article = articles.find((a) => a.slug === slug);
  const ContentComponent = slug ? contentComponents[slug] : undefined;

  if (!article || !ContentComponent) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--space-24) var(--container-padding)' }}>
          <span className="section-label">404</span>
          <h1 style={{ marginBottom: 'var(--space-4)' }}>Article Not Found</h1>
          <p style={{ marginBottom: 'var(--space-8)' }}>
            This article doesn't exist yet — check back soon, or browse all resources below.
          </p>
          <Link to="/resources" className="btn btn--primary">
            ← Back to Resources
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Article Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">{article.tag}</span>
          <h1>{article.title}</h1>
          <p className="article-meta">
            {article.date}
            {article.readTime && ` · ${article.readTime}`}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="article-layout">
            <div className="article-back">
              <Link to="/resources" className="btn btn--outline">
                ← Back to Resources
              </Link>
            </div>

            <Suspense fallback={<p>Loading…</p>}>
              <ContentComponent />
            </Suspense>

            <div className="article-back" style={{ marginTop: 'var(--space-12)' }}>
              <Link to="/resources" className="btn btn--outline">
                ← Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionSection
        headline="Found This Helpful?"
        subtext="Our AI literacy workshops and advisory sessions are tailored to your organization — no jargon, no hype, just practical guidance."
        primaryCTA={{ text: 'Request a Workshop', to: '/contact' }}
        secondaryCTA={{ text: 'See All Services', to: '/services' }}
      />
    </>
  );
}
