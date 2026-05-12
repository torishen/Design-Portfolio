import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

/**
 * Custom dot + ring cursor.
 * Props:
 *   light — use dark-on-light variant (for light-themed pages)
 */
export default function CustomCursor({ light = false }) {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const pos       = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef    = useRef(null)

  useEffect(() => {
    document.body.style.cursor = 'none'
    const expandedClass = light ? styles.expandedLight : styles.expanded

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
    }

    const onEnter = (e) => {
      if (e.target.closest('a') || e.target.closest('[data-card]'))
        ringRef.current?.classList.add(expandedClass)
    }
    const onLeave = () => {
      ringRef.current?.classList.remove(styles.expanded, styles.expandedLight)
    }

    const animate = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px'
        ringRef.current.style.top  = p.ry + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout',  onLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout',  onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [light])

  return (
    <>
      <div ref={cursorRef} className={`${styles.cursor} ${light ? styles.cursorLight : ''}`} />
      <div ref={ringRef}   className={`${styles.ring}   ${light ? styles.ringLight   : ''}`} />
    </>
  )
}
