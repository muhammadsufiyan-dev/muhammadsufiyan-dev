import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/projects.css'

function EcommerceIcon() {
  return (
    <svg className="ecom-icon" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.3">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
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

export default function Projects() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))
    return ['All', ...unique]
  }, [])

  const [active, setActive] = useState('All')

  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="page-section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">Work</div>
          <h2>Selected projects</h2>
          <p>
            A couple of projects that show the range — a client-facing e-commerce site and a
            full-stack travel app with its own admin panel.
          </p>
        </div>

        {categories.length > 2 && (
          <div className="filter-row" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`filter-pill${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {visible.length === 0 ? (
          <p className="projects-empty">No projects in this category yet.</p>
        ) : (
          <div className="projects-grid">
            {visible.map((p, i) => (
              <Link to={`/project/${p.id}`} className="project-card" key={p.id}>
                <div className="project-thumb">
                  {p.thumbType === 'image' ? (
                    <img src={p.thumbImage} alt={`${p.title} preview`} />
                  ) : (
                    <EcommerceIcon />
                  )}
                  <div className="project-overlay">
                    <span className="project-overlay-cta">
                      View project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                  <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="project-body">
                  <div className="project-category">{p.category}</div>
                  <h3>{p.title}</h3>
                  <p>{p.tagline}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
