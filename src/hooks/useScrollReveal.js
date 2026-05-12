import { useEffect } from 'react'

/**
 * Adds the "visible" class to every .reveal element when it enters
 * the viewport. The CSS for .reveal / .reveal.visible lives in globals.css.
 *
 * @param {number} threshold  - IntersectionObserver threshold (0–1)
 */
export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
