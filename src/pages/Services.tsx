import React from 'react';
import CallToActionSection from '../components/CallToActionSection';

const pillars = [
  {
    icon: '🔍',
    title: 'Assess',
    tagline: 'Know before you go.',
    description:
      'Every engagement starts with a clear-eyed look at where you are today. We evaluate your existing technology, workflows, and team readiness — so we can find the highest-impact opportunities without unnecessary disruption.',
    bullets: [
      'Audit your existing Microsoft 365 licenses and features',
      'Identify which teams and workflows are best positioned for AI gains',
      'Map risks: data handling, privacy, compliance, security concerns',
      'Deliver a practical AI-readiness report with prioritized next steps',
    ],
  },
  {
    icon: '🎓',
    title: 'Educate',
    tagline: 'Understanding before adoption.',
    description:
      'AI tools are only as good as the people using them. Before we deploy anything, we build genuine understanding across your team — what AI can do, what it can\'t, where it goes wrong, and how to use it responsibly in your specific context.',
    bullets: [
      'Customized AI literacy workshops for your team',
      'Hands-on Microsoft 365 Copilot training for real workflows',
      'Leadership briefings on AI strategy and governance',
      'Q&A sessions that address your organization\'s real concerns',
    ],
  },
  {
    icon: '🚀',
    title: 'Implement',
    tagline: 'Practical adoption, safely done.',
    description:
      'When your team is ready, we guide the rollout — scoped, staged, and secured. We help you establish governance policies, pilot AI in the right areas first, and expand at a pace that matches your organization\'s capacity.',
    bullets: [
      'Scoped pilot programs in highest-ROI areas',
      'Governance and acceptable-use policy frameworks',
      'Data security and privacy review before deployment',
      'Change management support to reduce friction',
    ],
  },
  {
    icon: '🤝',
    title: 'Support',
    tagline: 'We grow with you.',
    description:
      'AI adoption isn\'t a one-time project — it\'s an ongoing capability. We provide the continuing guidance, fractional Chief AI Officer support, and evolving expertise to help your organization stay current and confident.',
    bullets: [
      'Ongoing advisory calls and check-ins',
      'Fractional CAO-style guidance for strategic AI decisions',
      'Updates as AI tools evolve and new capabilities appear',
      'Expansion planning as your team\'s confidence grows',
    ],
  },
];

const flowSteps = [
  { step: '01', label: 'Assess', description: 'Understand where you are' },
  { step: '02', label: 'Educate', description: 'Build literacy and confidence' },
  { step: '03', label: 'Pilot', description: 'Start small, prove value' },
  { step: '04', label: 'Expand', description: 'Scale what works' },
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">Our Services</span>
          <h1>A Practical Framework for AI Adoption</h1>
          <p>
            Four pillars, one goal: help your organization adopt AI with confidence, clarity, and
            the right governance in place.
          </p>
        </div>
      </section>

      {/* Service Pillars */}
      {pillars.map((pillar, index) => (
        <section
          key={pillar.title}
          className={`section${index % 2 === 1 ? ' section--alt' : ''}`}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'var(--space-10)',
                alignItems: 'start',
                maxWidth: '860px',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  paddingTop: '0.2rem',
                }}
                aria-hidden="true"
              >
                {pillar.icon}
              </div>
              <div>
                <span className="section-label">{pillar.tagline}</span>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>{pillar.title}</h2>
                <p style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-lg)' }}>
                  {pillar.description}
                </p>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  {pillar.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 'var(--space-3)',
                        alignItems: 'flex-start',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <span
                        style={{ color: 'var(--color-success)', fontWeight: 700, flexShrink: 0 }}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Engagement Flow */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Typical Engagement Flow</h2>
            <p className="section-subtitle">
              Most engagements follow a natural progression — but we meet you where you are.
              If you've already completed an assessment elsewhere, we can start at Educate. If
              you need only a pilot, we can start there.
            </p>
          </div>
          <div className="flow-steps">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.step}>
                <div className="flow-step">
                  <div className="flow-step-number">{step.step}</div>
                  <strong style={{ marginBottom: 'var(--space-1)' }}>{step.label}</strong>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    {step.description}
                  </span>
                </div>
                {i < flowSteps.length - 1 && (
                  <span className="flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionSection
        headline="Ready to Take the First Step?"
        subtext="Every journey starts with a conversation. Let's talk about what an AI assessment could look like for your organization."
        primaryCTA={{ text: 'Request a Consultation', to: '/contact' }}
        secondaryCTA={{ text: 'Who We Serve', to: '/who-we-serve' }}
      />
    </>
  );
}
