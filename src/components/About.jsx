import headshotCutout from '../assets/headshot-cutout.png'
import '../styles/about.css'

const facts = [
  {
    label: 'Location',
    value: 'Karachi, PK',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Focus',
    value: 'Web & Flutter apps',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: 'Education',
    value: 'Software Eng. — Aptech',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m22 10-10-5L2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo">
              <div className="about-photo-glow" />
              <img src={headshotCutout} alt="Muhammad Sufiyan portrait" />
            </div>

            <div className="status-pill">
              <span className="status-dot" />
              Available for freelance work
            </div>

            <div className="about-facts">
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <span className="fact-icon">{f.icon}</span>
                  <span className="fact-text">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-body">
            <div className="section-label">About</div>
            <h2 style={{ marginBottom: 22, textTransform: 'none' }}>
              A developer who cares about the details.
            </h2>
            <p>
              I'm a detail-oriented web and mobile app developer with hands-on experience across
              front-end, back-end, and cross-platform mobile development. I build responsive,
              user-friendly products using Flutter, PHP, and JavaScript.
            </p>

            <blockquote className="pull-quote">
              I care as much about how something feels to use as how it's built underneath.
            </blockquote>

            <p>
              Most of my work comes from freelance client projects: designing interfaces, wiring up
              front-end and back-end logic, and polishing the UI/UX until it feels right. I'm
              currently deepening my software engineering foundations through a course at Aptech,
              alongside shipping real projects.
            </p>
            <h3>How I work</h3>
            <p>
              I start from the user's problem, not the tech stack — then pick tools that fit the
              job, whether that's a Bootstrap and PHP site for a client's shop or a full Flutter app
              backed by Firebase. Clear communication and clean, maintainable code matter to me as
              much as the final pixel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
