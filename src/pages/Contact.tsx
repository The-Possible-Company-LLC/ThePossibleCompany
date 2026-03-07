import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  organization: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message.trim()) errors.message = 'Please tell us how we can help.';
  return errors;
}

const contactDetails = [
  {
    icon: '👤',
    label: 'Contact',
    value: 'Nicholas Aquino',
    href: null,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'Nick.Aquino@ThePossibleCompany.ai',
    href: 'mailto:Nick.Aquino@ThePossibleCompany.ai',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '734-756-6012',
    href: 'tel:7347566012',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nick-aquino-b725352',
    href: 'https://linkedin.com/in/nick-aquino-b725352',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Canton, Michigan',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // TODO: Connect to a real form backend (e.g., Formspree, Netlify Forms, or a custom API).
    // For now, this is a client-side-only placeholder.
    console.log('Form submitted:', formData);
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">Contact Us</span>
          <h1>Let's Start a Conversation</h1>
          <p>
            Whether you're curious about AI readiness, ready to schedule a workshop, or just
            want to talk through your situation — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Page Body */}
      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p style={{ marginBottom: 'var(--space-8)' }}>
                We respond to all inquiries within one business day. If you'd prefer to schedule a
                call directly, reach out by phone or email and we'll find a time that works.
              </p>

              <div className="contact-details">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="contact-detail">
                    <span className="contact-detail-icon" aria-hidden="true">{detail.icon}</span>
                    <div className="contact-detail-content">
                      <span className="contact-detail-label">{detail.label}</span>
                      <span className="contact-detail-value">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.href.startsWith('http') ? '_blank' : undefined}
                            rel={
                              detail.href.startsWith('http') ? 'noopener noreferrer' : undefined
                            }
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon" aria-hidden="true">✅</div>
                  <h3>Thank You!</h3>
                  <p>
                    We've received your message and will be in touch within one business day.
                    We look forward to talking with you.
                  </p>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="Jane Smith"
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="form-error" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your Organization Name"
                        autoComplete="organization"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="jane@yourorg.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="form-error" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        How Can We Help? <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        rows={5}
                        placeholder="Tell us about your organization and what you're hoping to accomplish with AI..."
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="form-error" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
