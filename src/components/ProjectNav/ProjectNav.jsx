import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectNav.module.css'

/**
 * Shared nav for the two case-study pages.
 *
 * Props:
 *   logoAccent  — colored first word(s) in the logo
 *   logoText    — plain second part of the logo
 *   sections    — array of { href, label } for in-page anchor links
 */
export default function ProjectNav({ logoAccent, logoText, sections = [] }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoAccent}>{logoAccent}</span>
        <span className={styles.logoDot}>·</span>
        <span>{logoText}</span>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.backLink}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.5 1.5L3 6L7.5 10.5" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Work
        </Link>
        {sections.map((s) => (
          <a key={s.href} href={s.href} className={styles.link}>{s.label}</a>
        ))}
      </div>
    </nav>
  )
}
