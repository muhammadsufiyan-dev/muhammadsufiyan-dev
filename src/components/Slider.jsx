import { useState, useRef, useEffect, useCallback } from 'react'
import '../styles/slider.css'

/**
 * Dependency-free image slider.
 * Props:
 *   images: [{ src, alt, caption? }]
 */
export default function Slider({ images }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const rootRef = useRef(null)

  const go = useCallback(
    (i) => {
      if (!images || images.length === 0) return
      const next = (i + images.length) % images.length
      setIndex(next)
    },
    [images]
  )

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(index - 1)
      if (e.key === 'ArrowRight') go(index + 1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [index, go])

  if (!images || images.length === 0) return null

  const showDots = images.length <= 10
  const current = images[index]

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 40) go(index - 1)
    else if (delta < -40) go(index + 1)
    touchStartX.current = null
  }

  return (
    <div className="slider" ref={rootRef} tabIndex={0} aria-label="Image slider">
      <div className="slider-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img) => (
            <div className="slider-slide" key={img.alt}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <button className="slider-arrow prev" onClick={() => go(index - 1)} aria-label="Previous slide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="slider-arrow next" onClick={() => go(index + 1)} aria-label="Next slide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <span className="slider-counter">
          {index + 1} / {images.length}
        </span>
      </div>

      <div className="slider-footer">
        {showDots ? (
          <div className="slider-dots">
            {images.map((img, i) => (
              <button
                key={img.alt}
                className={`slider-dot${i === index ? ' active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        ) : (
          <div className="slider-scrub" role="slider" aria-valuemin={1} aria-valuemax={images.length} aria-valuenow={index + 1}>
            <input
              type="range"
              min={0}
              max={images.length - 1}
              value={index}
              onChange={(e) => go(Number(e.target.value))}
              aria-label="Jump to page"
            />
          </div>
        )}
        {current.caption && <span className="slider-caption">{current.caption}</span>}
      </div>
    </div>
  )
}
