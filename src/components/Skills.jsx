import '../styles/skills.css'

const groups = [
  {
    title: 'Web technologies',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'MySQL', '.NET', 'C#'],
  },
  {
    title: 'Mobile development',
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Provider'],
  },
  {
    title: 'Tools & workflow',
    tags: ['Git', 'Figma handoff', 'Word', 'Excel', 'PowerPoint', 'REST APIs'],
  },
]

const marqueeItems = [
  'Flutter', 'Firebase', 'PHP', 'MySQL', 'JavaScript', 'Dart', 'Bootstrap', 'jQuery', 'C#', '.NET',
]

export default function Skills() {
  return (
    <section className="page-section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">Skills</div>
          <h2>What I work with</h2>
          <p>
            A practical toolkit built for shipping real products — from front-end interfaces to the
            backends and databases behind them.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-card" key={g.title}>
              <h4>{g.title}</h4>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
