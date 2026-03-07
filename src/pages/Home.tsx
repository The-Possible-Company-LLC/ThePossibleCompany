import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import AudienceCard from '../components/AudienceCard';
import CallToActionSection from '../components/CallToActionSection';

const services = [
  {
    icon: '🔍',
    title: 'Assess',
    description: 'Understand where you stand before making any moves.',
    bullets: [
      'Evaluate your existing Microsoft 365 licenses',
      'Identify high-impact AI use cases for your team',
      'Spot risks, gaps, and quick wins',
      'Deliver a clear AI-readiness report',
    ],
  },
  {
    icon: '🎓',
    title: 'Educate',
    description: 'Build confidence and understanding before deploying tools.',
    bullets: [
      'Hands-on AI literacy workshops',
      'Copilot training tailored to your workflows',
      'Help staff understand what AI can — and cannot — do',
      'Foster a culture of responsible AI use',
    ],
  },
  {
    icon: '🚀',
    title: 'Implement',
    description: 'Deploy AI tools the right way — safely and effectively.',
    bullets: [
      'Pilot programs scoped to your real workflows',
      'Governance and data security frameworks',
      'Guided rollout with minimal disruption',
      'Customized for your size and budget',
    ],
  },
  {
    icon: '🤝',
    title: 'Support',
    description: 'We stay with you as your organization grows its AI capability.',
    bullets: [
      'Ongoing advisory and fractional CAO support',
      'Answer questions as they come up in real work',
      'Expand AI use as confidence grows',
      'Stay current with a fast-moving AI landscape',
    ],
  },
];

const audiences = [
  {
    icon: '🏢',
    title: 'Small Businesses',
    description:
      'You have Microsoft 365 but no dedicated IT team. AI tools are already in your subscription — let\'s unlock them safely.',
    traits: [
      '5–50 employees',
      'Microsoft 365 already in use',
      'No internal AI expertise',
      'Ready to compete smarter',
    ],
  },
  {
    icon: '💙',
    title: 'Nonprofit Organizations',
    description:
      'Maximize your impact with limited resources while keeping donor data and beneficiary privacy front and center.',
    traits: [
      'Productivity-focused goals',
      'Strong data security requirements',
      'Volunteer and staff mix',
      'Compliance-sensitive operations',
    ],
  },
  {
    icon: '🏘️',
    title: 'Community Organizations & HOAs',
    description:
      'Volunteer-led boards and local organizations deserve the same practical AI support as any enterprise — just right-sized.',
    traits: [
      'Volunteer leadership',
      'Limited time and budget',
      'Communication-heavy workflows',
      'Local and community-focused',
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        label="Anything's Possible"
        title="Bridging the AI Literacy Gap"
        subtitle="We help small businesses, nonprofits, and community organizations adopt AI safely, practically, and confidently — without enterprise budgets or big IT teams."
        primaryCTA={{ text: 'Schedule a Consultation', to: '/contact' }}
        secondaryCTA={{ text: 'Explore Our Services', to: '/services' }}
      />

      {/* Why it matters */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The AI Literacy Gap</span>
            <h2 className="section-title">Why This Matters Now</h2>
            <p className="section-subtitle">
              Large enterprises are investing billions in AI — and smaller organizations already have access to the same
              tools. The gap isn't access. It's literacy, governance, and practical support.
            </p>
          </div>

          {/* TODO: Replace these stats with sourced data from your businessdocuments folder or research. */}
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">77%</span>
              <p className="stat-label">of employees use AI without employer guidance</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">$4.6T</span>
              <p className="stat-label">enterprise AI investment projected by 2026</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">M365</span>
              <p className="stat-label">Copilot is already in most small org subscriptions</p>
            </div>
            <div className="stat-item">
              <span className="stat-value">Literacy</span>
              <p className="stat-label">is now a competitive requirement, not a "nice to have"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-title">Built for Organizations Like Yours</h2>
            <p className="section-subtitle">
              We specialize in the organizations that get left behind in technology adoption —
              and we're here to change that.
            </p>
          </div>
          <div className="grid grid--3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Four Pillars of AI Adoption</h2>
            <p className="section-subtitle">
              Our proven framework takes you from where you are today to confident, responsible AI use — at your pace.
            </p>
          </div>
          <div className="grid grid--4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionSection
        headline="Ready to Start Your AI Journey?"
        subtext="Let's have a conversation about where your organization is today and what's possible with the right support."
        primaryCTA={{ text: 'Talk About AI Readiness', to: '/contact' }}
        secondaryCTA={{ text: 'Learn Our Approach', to: '/philosophy' }}
      />
    </>
  );
}
