import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/#about', label: 'ABOUT' },
    { to: '/#skills', label: 'SKILLS' },
    { to: '/#work', label: 'WORK' },
    { to: '/#contact', label: 'CONTACT' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="logo">
          <span className="mark" />
          SUFIYAN
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link to="/#contact" className="nav-cta">
          GET IN TOUCH
        </Link>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
