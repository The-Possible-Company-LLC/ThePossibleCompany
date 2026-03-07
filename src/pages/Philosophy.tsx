import CallToActionSection from '../components/CallToActionSection';

const principles = [
  {
    icon: '📚',
    title: 'Literacy Before Tooling',
    description:
      'We never deploy AI tools before building genuine understanding. People who understand what AI is — and what it isn\'t — make better decisions about when and how to use it. Skipping this step is the single biggest reason AI adoptions fail.',
    inPractice:
      'Every engagement begins with education. We don\'t hand you a tool and walk away.',
  },
  {
    icon: '🧭',
    title: 'Practical, Human-Centered Adoption',
    description:
      'We focus on real workflows and real pain points — not AI hype. The goal isn\'t to make your organization look AI-forward. The goal is to make your people more effective, less burdened, and more confident at the work they already do.',
    inPractice:
      'We observe your actual workflows before recommending anything. We ask "what\'s eating your time?" before "what AI can we add?"',
  },
  {
    icon: '🔒',
    title: 'Responsible AI',
    description:
      'Security, privacy, and ethical use aren\'t afterthoughts — they\'re part of every recommendation we make. For nonprofits and community organizations handling sensitive data, this is non-negotiable.',
    inPractice:
      'We establish governance frameworks and acceptable-use policies before any AI is deployed. We review data flows, sharing permissions, and compliance requirements upfront.',
  },
  {
    icon: '🎯',
    title: 'Quality Over Quantity',
    description:
      'We take on a limited number of engagements at a time. We would rather do outstanding work with five organizations than mediocre work with fifty. If we\'re not the right fit for your situation, we\'ll tell you honestly.',
    inPractice:
      'We are selective about new engagements. We ask: is this organization ready to adopt? Do we have the right expertise for their specific needs? Is this the right moment?',
  },
];

export default function Philosophy() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">Our Philosophy</span>
          <h1>How We Think About AI Adoption</h1>
          <p>
            Four principles that guide every engagement, every recommendation, and every
            conversation we have with the organizations we serve.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-8)',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {principles.map((principle, i) => (
              <div key={i} className="principle-card">
                <div className="principle-icon" aria-hidden="true">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>{principle.description}</p>
                <div
                  style={{
                    padding: 'var(--space-4)',
                    background: 'var(--color-bg-alt)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>
                    In practice:
                  </span>
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)' }}>{principle.inPractice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">The Bigger Picture</span>
            <h2 style={{ marginBottom: 'var(--space-5)' }}>
              AI Should Empower People, Not Replace Them
            </h2>
            {/* TODO: Expand this section with content from businessdocuments / philosophy deck. */}
            <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>
              We believe AI is most powerful when it amplifies the judgment, creativity, and
              humanity of the people using it — not when it substitutes for those things.
            </p>
            <p>
              For small organizations, nonprofits, and community groups, that means AI should free
              up your volunteers, staff, and leaders to focus on what only humans can do: build
              relationships, make judgment calls, serve your community. The administrative burden
              — the scheduling, the document drafting, the data cleanup — that's where AI earns
              its keep.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionSection
        headline="These Principles in Action"
        subtext="Ready to see how our philosophy translates into a practical engagement for your organization? Let's start the conversation."
        primaryCTA={{ text: 'Request a Consultation', to: '/contact' }}
        secondaryCTA={{ text: 'Explore Our Services', to: '/services' }}
      />
    </>
  );
}
