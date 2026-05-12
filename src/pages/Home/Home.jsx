import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import CustomCursor from '../../components/CustomCursor/CustomCursor'
import styles from './Home.module.css'

const PROJECTS = [
  {
    num: '001',
    tag: 'Figma Prototype',
    title: ['Ultimate Guitar', 'Functionality Improvement'],
    desc: 'A new feature for Ultimate Guitar that bridges the gap between learning guitar and singing — letting users match tabs to their vocal pitch automatically.',
    to: '/group-project',
    accent: 'amber',
    ctaLabel: 'View Case Study',
  },
  {
    num: '002',
    tag: 'Figma Prototype',
    title: ['Political Theory', 'Learning App'],
    desc: 'An interactive micro-learning app mapping political philosophers on an ideological compass with five-minute lessons, quizzes, and a progress tracker.',
    to: '/political-theorists',
    accent: 'blue',
    ctaLabel: 'View Case Study',
  },
  {
    num: '003',
    tag: 'Web Development',
    title: ['Chinese Food', '& Belonging'],
    desc: 'A podcast documentary website exploring food, identity, and belonging in the Chinese diaspora. Original audio, archival imagery, and immersive editorial design.',
    href: 'https://torishen.github.io/Chinese-Food-Culture-Final-Project/',
    github: 'https://github.com/torishen/Web-Documentary-Food-and-Belonging',
    accent: 'terra',
    ctaLabel: 'Visit Site',
  },
]

export default function Home() {
  useScrollReveal(0.08)

  return (
    <div className={styles.page}>
      <CustomCursor light />

      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoName}>Tori Shen</span>
        </div>
        <nav className={styles.nav}>
          <a href="mailto:torishen915@gmail.com" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* ── About strip ── */}
      <div className={styles.about}>
        <div className={styles.aboutLeft}>
          <h1 className={styles.aboutName}>Yixuan (Tori) Shen</h1>
          <p className={styles.aboutBio}>
            MS Computer Science (AI) · Georgia Tech · Available May – Sep 2026
          </p>
          <p className={styles.aboutDesc}>
            I build things end-to-end — from ML research and data pipelines to React frontends and interactive prototypes.
            Product design is new territory for me (I picked it up in 2026), but thinking about how things <em>feel</em> turns out to be just as interesting as making them <em>work</em>. 
            More to come...
          </p>
          <div className={styles.aboutSkills}>
            {['Figma','React','HTML / CSS','Python','UX Research','TypeScript'].map(s => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
        </div>
        <div className={styles.aboutRight}>
          <a href={`${import.meta.env.BASE_URL}Tori_Shen_Resume.pdf`} download className={`${styles.btn} ${styles.btnPrimary}`}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2v8M7 10L4 7M7 10l3-3M2 12h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
          <a href="mailto:torishen915@gmail.com" className={`${styles.btn} ${styles.btnOutline}`}>
            torishen915@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/tori-shen" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
            LinkedIn ↗
          </a>
          <div className={styles.aboutAvail}>
            <span className={styles.availDot} />
            Open to internships · May – Sep 2026
          </div>
        </div>
      </div>

      {/* ── Work ── */}
      <section id="work" className={styles.work} aria-label="Projects">
        <div className={`${styles.workHeader} reveal`}>
          <span className={styles.workNum}>01</span>
          <span className={styles.workLabel}>Projects</span>
          <div className={styles.workRule} aria-hidden="true" />
          <span className={styles.workCount}>3 selected</span>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => {
            const cardClass = [
              styles.card,
              styles[p.accent],
              i === 2 ? styles.cardWide : '',
              'reveal',
              i === 0 ? 'reveal-delay-1' : i === 1 ? 'reveal-delay-2' : '',
            ].filter(Boolean).join(' ')

            const inner = (
              <>
                {/* Top row */}
                <div className={styles.cardMeta}>
                  <span className={styles.cardNum}>{p.num}</span>
                  <span className={`${styles.cardTag} ${styles[p.accent + 'Tag']}`}>
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className={styles.cardTitle}>
                  {p.title.map((line, j) => (
                    <span key={j} className={styles.cardTitleLine}>{line}</span>
                  ))}
                </h2>

                {/* Description */}
                <p className={styles.cardDesc}>{p.desc}</p>

                {/* Footer */}
                <div className={styles.cardFooter}>
                  {p.github ? (
                    // Card 003: two separate link buttons, card itself is not a link
                    <>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.cardCtaLink}
                        onClick={e => e.stopPropagation()}
                      >
                        <span className={styles.cardCta}>{p.ctaLabel}</span>
                        <svg className={styles.cardArrow} width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M13 8L9.5 4.5M13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.cardCtaLink}
                        onClick={e => e.stopPropagation()}
                      >
                        <span className={styles.cardCta}>GitHub</span>
                        <svg className={styles.cardArrow} width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M13 8L9.5 4.5M13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </>
                  ) : (
                    <>
                      <span className={styles.cardCta}>{p.ctaLabel}</span>
                      <svg className={styles.cardArrow} width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M13 8L9.5 4.5M13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </div>

                {/* Hover accent bar */}
                <div className={`${styles.accentBar} ${styles[p.accent + 'Bar']}`} aria-hidden="true" />
              </>
            )

            // Card 003 has github links handled inside, so render as plain div
            if (p.github) {
              return (
                <div key={p.num} className={cardClass} data-card>
                  {inner}
                </div>
              )
            }

            return p.href
              ? (
                <a key={p.num} href={p.href} target="_blank" rel="noreferrer"
                   className={cardClass} data-card>
                  {inner}
                </a>
              )
              : (
                <Link key={p.num} to={p.to} className={cardClass} data-card>
                  {inner}
                </Link>
              )
          })}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <span>© 2025 Yixuan (Tori) Shen</span>
        <span className={styles.footerDot} aria-hidden="true" />
        <span>CS 6460 · Georgia Tech</span>
        <span className={styles.footerDot} aria-hidden="true" />
        <a href="mailto:torishen915@gmail.com" className={styles.footerLink}>
          torishen915@gmail.com
        </a>
      </footer>
    </div>
  )
}
