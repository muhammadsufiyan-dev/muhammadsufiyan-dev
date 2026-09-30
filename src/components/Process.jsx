import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/process.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Discover', body: 'Understand the goal and the user before writing a line of code.' },
  { num: '02', title: 'Design', body: 'Wireframe the flow, then the interface — function before polish.' },
  { num: '03', title: 'Develop', body: 'Build it clean, responsive, and fast on the right stack.' },
  { num: '04', title: 'Deliver', body: 'Ship it, test it, and stay around to support it after launch.' },
]

export default function Process() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="page-section process" id="process" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">How I work</div>
          <h2>Four steps, one process.</h2>
          <p>A simple, repeatable approach that keeps every project on track from first idea to launch.</p>
        </div>
        <div className="process-cards">
          {steps.map((step, i) => (
            <div className="process-card" key={step.num} ref={(el) => (cardsRef.current[i] = el)}>
              <span className="num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
