import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Nav from './Nav'
import Footer from './Footer'
import Slider from './Slider'
import '../styles/detail.css'

function EcommerceIcon() {
  return (
    <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="1">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff7a30" />
          <stop offset="100%" stopColor="#ffb454" />
        </linearGradient>
      </defs>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const highlights = project.features.slice(0, 3)

  return (
    <>
      <Nav />
      <div className="detail-view active">
        <div className="wrap">
          <Link to="/#work" className="detail-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all projects
          </Link>

          <div className="detail-head">
            <div className="section-label">{project.label}</div>
            <h1>{project.title}</h1>
            <p>{project.tagline}</p>
          </div>

          {/* ---- hero panel: portrait media + quick info ---- */}
          <div className="detail-hero-panel">
            <div className="detail-media-frame">
              <div className="detail-media-glow" />
              {project.thumbType === 'image' && project.heroImage ? (
                <img className="detail-media-portrait" src={project.heroImage} alt={`${project.title} case study cover page`} />
              ) : (
                <div className="detail-media-icon">
                  <EcommerceIcon />
                </div>
              )}
            </div>

            <div className="detail-quick-info">
              {project.stats && (
                <div className="detail-stats">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="detail-highlights">
                {highlights.map((h) => (
                  <li key={h}>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="detail-cta-row">
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="pill-btn">
                    Live demo
                    <span className="pill-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <span className="btn-outline disabled">Live demo — coming soon</span>
                )}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    GitHub
                  </a>
                ) : (
                  <span className="btn-outline disabled">GitHub — coming soon</span>
                )}
              </div>
            </div>
          </div>

          {/* ---- overview + role ---- */}
          <div className="detail-grid">
            <div className="detail-block">
              <h3>Overview</h3>
              <p className="detail-text">{project.description}</p>
              <h3 style={{ marginTop: 32 }}>My role</h3>
              <p className="detail-text">{project.role}</p>
            </div>
            <div className="detail-block">
              <h3>Key features</h3>
              <ul className="detail-list">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: 32 }}>Tech stack</h3>
              <div className="project-tags">
                {project.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ---- full case study (pdf) ---- */}
          {project.pdfUrl && (
            <div className="case-study">
              <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="case-study-thumb">
                {project.pdfCover && <img src={project.pdfCover} alt={`${project.title} case study cover`} />}
                <span className="case-study-badge">PDF</span>
              </a>
              <div className="case-study-body">
                <h3>Full case study</h3>
                <p className="detail-text">
                  {project.pdfBlurb || 'A detailed walkthrough of every screen and decision behind this project.'}
                </p>
                {project.pdfPages && <span className="case-study-pages">{project.pdfPages} pages</span>}
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn"
                  style={{ marginTop: project.pdfPages ? 0 : 16 }}
                >
                  {project.pdfLabel || 'View PDF'}
                  <span className="pill-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          )}

          {/* ---- gallery ---- */}
          {project.gallery.length > 0 && (
            <div className="detail-gallery">
              <h3>A closer look</h3>
              <p className="detail-gallery-sub">
                Browse all {project.gallery.length} pages of the case study right here — no download needed.
              </p>
              <Slider images={project.gallery} />
            </div>
          )}

          {/* ---- closing cta ---- */}
          <div className="detail-closing">
            <h3>Like what you see?</h3>
            <p>I'm open to freelance work — let's talk about what you're building.</p>
            <Link to="/#contact" className="pill-btn">
              Let's build something
              <span className="pill-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
