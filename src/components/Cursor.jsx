import { useEffect, useRef } from 'react'
import '../styles/cursor.css'

/**
 * Custom amber cursor (dot + trailing ring) for fine-pointer devices.
 * Automatically disabled for touch devices and prefers-reduced-motion.
 */
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduced || !fine) return

    document.body.classList.add('cursor-ready')

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let raf

    const handleMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }

    const handleOver = (e) => {
      if (e.target.closest('a, button')) ring.classList.add('hover')
    }
    const handleOut = (e) => {
      if (e.target.closest('a, button')) ring.classList.remove('hover')
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      cancelAnimationFrame(raf)
      document.body.classList.remove('cursor-ready')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
