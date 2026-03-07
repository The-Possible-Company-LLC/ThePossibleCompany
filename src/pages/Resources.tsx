import CallToActionSection from '../components/CallToActionSection';

// TODO: Replace placeholder resources with real articles from businessdocuments.
// This structure is designed to grow into a full blog or knowledge base.
const resources = [
  {
    tag: 'Featured Article',
    title: 'Bridging the AI Literacy Gap: How Small Organizations Can Adopt AI Without Enterprise Budgets',
    summary:
      'The gap between large enterprises and smaller organizations isn\'t about access to AI tools — it\'s about literacy, governance, and practical support. This article explores the widening divide and what smaller organizations can do about it today.',
    date: 'March 2025',
    readTime: '8 min read',
    // TODO: Replace with real article URL or internal route when content is ready.
    href: '#',
    featured: true,
  },
  {
    tag: 'Workshop Recap',
    title: 'AI Literacy in the Nonprofit Sector: Key Takeaways',
    summary:
      'A summary of common questions, concerns, and "aha moments" from our nonprofit AI literacy workshops. What leaders really want to know about AI — and what surprises them most.',
    date: 'Coming Soon',
    readTime: null,
    href: '#',
    featured: false,
  },
  {
    tag: 'Guide',
    title: 'Microsoft 365 Copilot: What Small Organizations Actually Get',
    summary:
      'A plain-language breakdown of what Microsoft 365 Copilot does, what it costs, and which features matter most for organizations with 5–50 employees.',
    date: 'Coming Soon',
    readTime: null,
    href: '#',
    featured: false,
  },
  {
    tag: 'Best Practices',
    title: 'Before You Turn On Copilot: A 5-Step Governance Checklist',
    summary:
      'Five things every organization should have in place before enabling AI tools — from acceptable-use policies to data hygiene basics.',
    date: 'Coming Soon',
    readTime: null,
    href: '#',
    featured: false,
  },
];

export default function Resources() {
  const [featured, ...rest] = resources;

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
            <p style={{ marginBottom: 'var(--space-6)' }}>{featured.summary}</p>
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
              {/* TODO: Update href when full article is published. */}
              <a href={featured.href} className="btn btn--primary">
                Read Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Resources */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">More Resources</span>
            <h2 className="section-title">Coming Soon</h2>
            <p className="section-subtitle">
              We're building out a library of practical guides, workshop recaps, and how-to
              articles. Check back soon — or contact us to request a topic.
            </p>
          </div>

          <div className="grid grid--3">
            {rest.map((resource, i) => (
              <article key={i} className="resource-card">
                <div className="resource-card-body">
                  <span className="resource-card-tag">{resource.tag}</span>
                  <h3>
                    <a href={resource.href}>{resource.title}</a>
                  </h3>
                  <p>{resource.summary}</p>
                  <p className="resource-card-meta">{resource.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
