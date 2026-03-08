import { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';
import CallToActionSection from '../components/CallToActionSection';

export default function Resources() {
  const [showArchived, setShowArchived] = useState(false);

  const featured = articles.find((a) => a.featured && !a.archived);
  const active = articles.filter((a) => !a.featured && !a.archived);
  const archived = articles.filter((a) => a.archived);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">Resources</span>
          <h1>Practical AI Guidance for Smaller Organizations</h1>
          <p>
            Articles, guides, and workshop recaps to help your organization understand AI,
            make smart decisions, and adopt responsibly.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Start Here</span>
              <h2 className="section-title">Featured Resource</h2>
            </div>

            <div
              className="card"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: 'var(--space-10)',
                borderLeft: '4px solid var(--color-primary)',
              }}
            >
              <span className="resource-card-tag">{featured.tag}</span>
              <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-2xl)' }}>
                {featured.title}
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>{featured.excerpt}</p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-6)',
                  flexWrap: 'wrap',
                }}
              >
                <span className="resource-card-meta">
                  {featured.date}
                  {featured.readTime && ` · ${featured.readTime}`}
                </span>
                <Link to={`/resources/${featured.slug}`} className="btn btn--primary">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* More Resources */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">More Resources</span>
            <h2 className="section-title">Coming Soon</h2>
            <p className="section-subtitle">
              We&rsquo;re building out a library of practical guides, workshop recaps, and how-to
              articles. Check back soon &mdash; or contact us to request a topic.
            </p>
          </div>

          <div className="grid grid--3">
            {active.map((resource) => (
              <article key={resource.slug} className="resource-card">
                <div className="resource-card-body">
                  <span className="resource-card-tag">{resource.tag}</span>
                  <h3>
                    {resource.readTime ? (
                      <Link to={`/resources/${resource.slug}`}>{resource.title}</Link>
                    ) : (
                      resource.title
                    )}
                  </h3>
                  <p>{resource.excerpt}</p>
                  <p className="resource-card-meta">{resource.date}</p>
                  {resource.readTime && (
                    <Link
                      to={`/resources/${resource.slug}`}
                      className="btn btn--outline"
                      style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)' }}
                    >
                      Read article
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Archived Section */}
      {archived.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Archive</span>
              <h2 className="section-title">Archived Resources</h2>
              <p className="section-subtitle">Older articles kept for reference.</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <button
                className="btn btn--outline"
                onClick={() => setShowArchived((v) => !v)}
                aria-expanded={showArchived}
              >
                {showArchived
                  ? 'Hide Archived'
                  : `Show ${archived.length} Archived Article${archived.length === 1 ? '' : 's'}`}
              </button>
            </div>

            {showArchived && (
              <div className="grid grid--3">
                {archived.map((resource) => (
                  <article key={resource.slug} className="resource-card">
                    <div className="resource-card-body">
                      <span className="resource-card-tag">{resource.tag}</span>
                      <h3>
                        {resource.readTime ? (
                          <Link to={`/resources/${resource.slug}`}>{resource.title}</Link>
                        ) : (
                          resource.title
                        )}
                      </h3>
                      <p>{resource.excerpt}</p>
                      <p className="resource-card-meta">{resource.date}</p>
                      {resource.readTime && (
                        <Link
                          to={`/resources/${resource.slug}`}
                          className="btn btn--outline"
                          style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)' }}
                        >
                          Read article
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <CallToActionSection
        headline="Want to Learn More in a Workshop?"
        subtext="Our AI literacy workshops are tailored to your team, your workflows, and your level of familiarity with AI. No jargon. No hype. Just practical understanding."
        primaryCTA={{ text: 'Request a Workshop', to: '/contact' }}
        secondaryCTA={{ text: 'See All Services', to: '/services' }}
      />
    </>
  );
}
