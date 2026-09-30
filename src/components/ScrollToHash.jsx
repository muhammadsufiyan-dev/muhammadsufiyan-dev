import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router doesn't auto-scroll to #hash targets on navigation.
 * This watches the current location and handles it manually — used once,
 * near the top of the app, so it works no matter which page you're on.
 */
export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // small delay lets the target page finish rendering first
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return null
}
