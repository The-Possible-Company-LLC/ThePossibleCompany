import CallToActionSection from '../components/CallToActionSection';

const timeline = [
  {
    year: '2023',
    title: 'ChatGPT Triggers Mainstream Awareness',
    description:
      'Generative AI goes mainstream overnight. Organizations of every size begin asking: "Should we be using this?"',
  },
  {
    year: '2024',
    title: 'Enterprises Invest Heavily',
    description:
      'Large companies pour billions into AI infrastructure, dedicated teams, and custom models. The gap between large and small organizations begins to widen.',
  },
  {
    year: '2025',
    title: 'Small Orgs Face Critical Decisions',
    description:
      'Microsoft 365 Copilot, Google Gemini, and other tools become standard offerings. Small organizations must decide how to adopt safely — or risk falling behind.',
  },
  {
    year: '2026',
    title: 'AI Literacy Becomes a Competitive Requirement',
    description:
      'Organizations with AI-literate teams will outpace those without. This is no longer optional — it is foundational.',
  },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">About Us</span>
          <h1>From Enterprise AI to Everyday Organizations</h1>
          <p>
            The Possible Company was founded with one purpose: to bring the same quality of AI
            guidance that Fortune 500s take for granted to the organizations that need it most.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }}>
            <div style={{ maxWidth: '720px' }}>
              <span className="section-label">Our Story</span>
              <h2 style={{ marginBottom: 'var(--space-5)' }}>
                Bridging Enterprise Expertise and Real-World Needs
              </h2>
              {/* TODO: Replace with a tailored narrative from your businessdocuments folder. */}
              <p style={{ marginBottom: 'var(--space-4)' }}>
                The Possible Company LLC is a frontier firm focused on AI business solutions for
                smaller organizations that don't have big IT teams or internal AI expertise. We are
                based in Canton, Michigan, with deep involvement in local associations, nonprofit
                boards, and community organizations.
              </p>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Our founder, Nicholas Aquino, spent 25+ years in enterprise technology — including
                extensive work as a Microsoft Copilot subject matter expert — watching firsthand
                how enterprise organizations built AI literacy, governance frameworks, and practical
                adoption programs. He founded The Possible Company to bring those same principles,
                right-sized and jargon-free, to the organizations that needed them most.
              </p>
              <p>
                We understand the reality of organizations that sit between "consumer tools" and
                full enterprise IT: you need scalable, practical guidance — not a $500/hour
                consultant who doesn't understand your constraints. That's what we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Adoption Timeline */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The AI Moment We're In</span>
            <h2 className="section-title">The AI Adoption Timeline</h2>
            <p className="section-subtitle">
              We're at a critical inflection point. Here's how we got here — and why the next
              decision your organization makes about AI matters more than ever.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <p className="timeline-year">{item.year}</p>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values snapshot */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Believe</span>
            <h2 className="section-title">Literacy Before Tooling</h2>
            <p className="section-subtitle">
              We believe that deploying AI tools without building understanding first is a recipe
              for frustration, wasted money, and real risk. Everything we do is grounded in
              helping people understand before they act.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/philosophy" className="btn btn--primary btn--lg">
              Read Our Full Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionSection
        headline="Let's Talk About What's Possible"
        subtext="Whether you're just starting to explore AI or you've already tried a few things and want a clearer path forward — we'd love to connect."
        primaryCTA={{ text: 'Schedule a Consultation', to: '/contact' }}
        secondaryCTA={{ text: 'See Our Services', to: '/services' }}
      />
    </>
  );
}
