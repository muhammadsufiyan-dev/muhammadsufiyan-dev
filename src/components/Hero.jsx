import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import headshotCutout from '../assets/headshot-cutout.png'
import '../styles/hero.css'

export default function Hero() {
  const photoRef = useRef(null)
  const eyebrowRef = useRef(null)
  const hl1Ref = useRef(null)
  const hl2Ref = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(photoRef.current, { opacity: 1 })
        gsap.set([hl1Ref.current, hl2Ref.current], { y: '0%' })
        gsap.set([descRef.current, ctaRef.current, statsRef.current], { opacity: 1, y: 0 })
        return
      }

      // one-time entrance sequence on load — no scroll-linked animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        photoRef.current,
        { opacity: 0, scale: 1.08, filter: 'blur(26px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5 }
      )
        .fromTo(eyebrowRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.85')
        .to(hl1Ref.current, { y: '0%', duration: 0.75 }, '-=0.25')
        .to(hl2Ref.current, { y: '0%', duration: 0.75 }, '-=0.5')
        .fromTo(descRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.3')
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.28')
        .fromTo(statsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.28')
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-photo-wrap">
          <img className="hero-photo" ref={photoRef} src={headshotCutout} alt="Muhammad Sufiyan" />
        </div>
        <div className="hero-vignette" />
      </div>

      <div className="hero-content wrap">
        <p className="eyebrow" ref={eyebrowRef}>
          WEB &amp; MOBILE APP DEVELOPER
        </p>
        <h1 className="hero-headline">
          <span className="line">
            <span className="in" ref={hl1Ref}>
              IDEAS,
            </span>
          </span>
          <span className="line">
            <span className="in" ref={hl2Ref}>
              SHIPPED<i className="accent-dot">.</i>
            </span>
          </span>
        </h1>
        <p className="hero-desc" ref={descRef}>
          I'm Muhammad Sufiyan. I design and build web and mobile products — from the first line of
          code to the client's hands.
        </p>
        <div className="hero-cta-row" ref={ctaRef}>
          <a href="#work" className="pill-btn">
            View my work
            <span className="pill-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </a>
          <a href="#contact" className="text-link">
            GET IN TOUCH
          </a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div>
            <strong>2+</strong>
            <span>Projects delivered</span>
          </div>
          <div>
            <strong>9+</strong>
            <span>Technologies</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Responsive builds</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="ln" />
      </div>
    </section>
  )
}
