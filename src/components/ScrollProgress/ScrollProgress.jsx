import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

/**
 * Thin progress bar fixed to the top of the page.
 * Color comes from --gold on the nearest ancestor (the page wrapper).
 */
export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      setWidth((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className={styles.bar} style={{ width: `${width}%` }} />
}
