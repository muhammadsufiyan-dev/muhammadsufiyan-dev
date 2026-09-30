import '../styles/contact.css'

const links = [
  {
    href: 'mailto:sufiyanshahid.dev@gmail.com',
    label: 'sufiyanshahid.dev@gmail.com',
    sub: 'Email',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="m4 6 8 7 8-7" />
      </svg>
    ),
  },
  {
    href: 'tel:+923093827037',
    label: '+92 309 3827037',
    sub: 'Phone',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/muhammad-sufiyan01',
    label: 'Muhammad Sufiyan',
    sub: 'LinkedIn',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/sufiyanshahid01',
    label: '@sufiyanshahid01',
    sub: 'Instagram',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="wrap">
        <div className="contact-card">
          <div>
            <div className="section-label">Contact</div>
            <h2>Let's build something.</h2>
            <p>
              Have a project in mind — a website, an app, or both? I'm open to freelance work and
              always happy to talk through an idea, even an early one.
            </p>
          </div>
          <div className="contact-links">
            {links.map((l) => (
              <a
                className="contact-link"
                href={l.href}
                key={l.sub}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
              >
                {l.icon}
                <span>
                  {l.label}
                  <span className="sub">{l.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
