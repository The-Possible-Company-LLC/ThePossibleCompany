import AudienceCard from '../components/AudienceCard';
import CallToActionSection from '../components/CallToActionSection';

const audiences = [
  {
    icon: '🏢',
    title: 'Small Businesses',
    description:
      'You have between 5 and 50 employees. You use Microsoft 365 for email and documents. But your AI tools are sitting unused in your subscription while your larger competitors are pulling ahead. We help you close that gap safely.',
    traits: [
      'Microsoft 365 already licensed — Copilot often included',
      'No dedicated IT staff or AI program',
      'Competitive pressure from larger, AI-equipped rivals',
      'Real workflows that AI can help today (email, documents, scheduling)',
    ],
  },
  {
    icon: '💙',
    title: 'Nonprofit Organizations',
    description:
      'Your mission is too important to let limited resources hold you back — and too important to cut corners on data security. We help nonprofits find the AI wins that stretch every dollar while keeping donor and beneficiary data safe.',
    traits: [
      'Productivity gains that stretch tight budgets',
      'Strong requirements around donor data security and compliance',
      'Mix of paid staff, volunteers, and board members',
      'Reporting and grant writing are time sinks AI can help with',
    ],
  },
  {
    icon: '🏘️',
    title: 'Community Organizations, HOAs & Local Boards',
    description:
      'Volunteer-led organizations are especially time-constrained. Communication, documentation, and coordination are constant burdens. We bring practical, no-jargon AI support to the organizations that keep communities running.',
    traits: [
      'Volunteer leadership with limited bandwidth',
      'Heavy reliance on email, newsletters, and meeting minutes',
      'Budget constraints that require high-value, low-cost solutions',
      'Local and community-focused — we understand your world',
    ],
  },
];

const challenges = [
  {
    problem: '"We know we should be using AI, but we don\'t know where to start."',
    solution: 'Our Assess phase maps your readiness and identifies high-impact entry points.',
  },
  {
    problem: '"We tried Copilot but it didn\'t really work for us."',
    solution:
      'Adoption without literacy rarely sticks. Our Educate workshops make the difference.',
  },
  {
    problem: '"We\'re worried about data security and privacy."',
    solution:
      'Our Implement phase includes governance frameworks and security review before any rollout.',
  },
  {
    problem: '"We can\'t afford enterprise-level consulting."',
    solution:
      'We are purpose-built for your size. No enterprise overhead, no unnecessary complexity.',
  },
];

export default function WhoWeServe() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">Who We Serve</span>
          <h1>For Organizations That Get Left Behind</h1>
          <p>
            We specialize in the organizations that enterprise AI consultants overlook: small
            businesses, nonprofits, and community groups with real needs and real constraints.
          </p>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Audiences</span>
            <h2 className="section-title">We Understand Your World</h2>
            <p className="section-subtitle">
              We're not repurposed enterprise consultants. We built our practice around the
              specific constraints, needs, and goals of smaller organizations.
            </p>
          </div>
          <div className="grid grid--3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Sound Familiar?</span>
            <h2 className="section-title">Common Challenges We Solve</h2>
          </div>
          <div className="grid grid--2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {challenges.map((item, i) => (
              <div key={i} className="card">
                <p
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-4)',
                    fontWeight: 500,
                  }}
                >
                  {item.problem}
                </p>
                <p style={{ fontSize: 'var(--text-sm)' }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Our answer: </strong>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local angle */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Local Expertise</span>
            <h2 style={{ marginBottom: 'var(--space-5)' }}>
              We Know This World Because We Live In It
            </h2>
            {/* TODO: Expand with specific local involvement details from businessdocuments. */}
            <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)' }}>
              Based in Canton, Michigan, our founder is personally active in local associations,
              nonprofit boards, and community organizations. We don't just understand your
              challenges from a consulting perspective — we understand them from the inside.
            </p>
            <p>
              That local grounding shapes everything we do: we know what it's like to run a
              volunteer board meeting, to stretch a nonprofit budget, to be the only "tech person"
              in the room. We speak your language.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionSection
        headline="Does This Sound Like Your Organization?"
        subtext="Let's have an honest conversation about where you are and what's realistic for your size, budget, and goals."
        primaryCTA={{ text: 'Talk to Us', to: '/contact' }}
        secondaryCTA={{ text: 'See Our Services', to: '/services' }}
      />
    </>
  );
}
