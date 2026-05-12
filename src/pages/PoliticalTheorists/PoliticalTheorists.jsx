import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress'
import ProjectNav from '../../components/ProjectNav/ProjectNav'
import styles from './PoliticalTheorists.module.css'

const NAV_SECTIONS = [
  { href: '#rationale', label: 'Rationale' },
  { href: '#prototype', label: 'Prototype' },
]

export default function PoliticalTheorists() {
  useScrollReveal(0.08)

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backPill}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M7.5 1.5L3 6L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Portfolio
      </Link>
      <ScrollProgress />
      <ProjectNav
        logoAccent="Portfolio"
        logoText="Micro-Learning App"
        sections={NAV_SECTIONS}
      />

      {/* ── PROJECT OVERVIEW ── */}
      <section className={styles.section} style={{paddingTop:'48px',paddingBottom:'48px',borderBottom:'1px solid var(--border)'}}>
        <div style={{marginBottom:'36px'}}>
          <div className={styles.secNum} style={{marginBottom:'10px'}}>Individual Project · Micro-Learning App</div>
          <h1 style={{fontFamily:'var(--serif)',fontSize:'clamp(36px,5vw,72px)',lineHeight:1.0,letterSpacing:'-0.02em',color:'var(--text)',marginBottom:'20px'}}>Political Theorists<br />&amp; <em style={{fontStyle:'italic',color:'var(--gold)'}}>Theories</em></h1>
          <p style={{fontSize:'17px',color:'var(--text-2)',maxWidth:'640px',lineHeight:1.7,marginBottom:'28px'}}>A mobile micro-learning app that places political thinkers on an ideological compass, then walks users through five-minute lessons, quizzes, and a progress tracker — all in Figma.</p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'32px'}}>
            {[['Tool','Figma'],['Device','iPhone 14 Pro'],['Screens','9 screens · interactive']].map(([label,value]) => (
              <div key={label} style={{display:'flex',flexDirection:'column',gap:'4px'}}>
                <span style={{fontFamily:'var(--mono)',fontSize:'9px',letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--text-3)'}}>{label}</span>
                <span style={{fontFamily:'var(--mono)',fontSize:'12px',color:'var(--text-2)'}}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a className={`${styles.cta} ${styles.ctaGold}`} href="https://www.figma.com/proto/cGnUC1QbOoXtjOdp7CmFHL/Political-Theorists-%E2%80%93-Micro-Learning-App?node-id=110-1701&t=pDfRTDVWel4OCwm1-1" target="_blank" rel="noreferrer">View Figma Prototype →</a>
            <a className={`${styles.cta} ${styles.ctaOutline}`} href="#rationale">Read Rationale</a>
          </div>
        </div>
        <hr style={{border:'none',borderTop:'1px solid var(--border)',margin:'36px 0'}} />
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'start'}}>
          <div>
            <div className={styles.secNum} style={{marginBottom:'12px'}}>The Problem</div>
            <p style={{lineHeight:1.75,color:'var(--text-2)',maxWidth:'480px'}}>Political theory is usually taught in isolation, with no sense of how ideas relate to each other. The design challenge was making ideological position spatial — so a user understands where a thinker sits before engaging with what they argued.</p>
          </div>
          <div>
            <div className={styles.secNum} style={{marginBottom:'12px'}}>What's Here</div>
            {[
              ['01','Design rationale','The spatial layout, visual system, and user flow — and why each was chosen.'],
              ['02','Five feature demos','GIF walkthroughs of every key interaction.'],
              ['03','Full Figma prototype','9 linked screens — open and interact with the real prototype.'],
            ].map(([num, title, body]) => (
              <div key={num} className={styles.finding} style={{padding:'12px 0',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',gap:'16px',alignItems:'flex-start'}}>
                <div style={{fontFamily:'var(--mono)',fontSize:'11px',color:'var(--gold)',letterSpacing:'0.1em',paddingTop:'2px',flexShrink:0}}>{num}</div>
                <div style={{fontSize:'14px',lineHeight:1.7,color:'var(--text-2)'}}><strong style={{color:'var(--text)'}}>{title} — </strong>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 RATIONALE ── */}
      <section className={styles.section} id="rationale">
        <div className="reveal"><div className={styles.secNum}>01 — Design Rationale</div></div>
        <h2 className={`${styles.secTitle} reveal d1`}>One spatial insight, three design choices.</h2>

        <div className={styles.twoCol}>
          <div>
            <p className="reveal">The compass isn't decorative — it's the thesis. Placing thinkers in two-dimensional ideological space before users read about them changes how the content lands. Position becomes context.</p>
            <div className={`${styles.rBlock} reveal d1`} style={{marginTop:'18px'}}>
              <div className={styles.rBlockNum}>User Flow</div>
              <h3>Discovery → Study → Quiz → Progress</h3>
              <p>Browse quadrant → tap lesson card → scroll content → three-question quiz → per-answer feedback → progress tracker.</p>
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <div className={`${styles.rBlock} reveal d2`}>
              <div className={styles.rBlockNum}>Design Decisions</div>
              <h3>Visual system</h3>
              <div className={styles.decisions} style={{marginTop:'16px'}}>
                {[
                  ['01','Dark editorial palette with gold accents — signals depth, not gamification.'],
                  ['02','Figma Auto Layout throughout — every screen adapts cleanly to content length.'],
                  ['03','Progress surfaces at two levels: per-answer feedback and a completion dashboard by theorist and ideology.'],
                ].map(([num, text]) => (
                  <div key={num} className={styles.decision}>
                    <div className={styles.dNum}>{num}</div>
                    <div className={styles.dText}>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{marginTop:'56px'}}>
          <div className={`${styles.secNum} reveal`} style={{marginBottom:'14px'}}>Main User Flow</div>
          <div className={`${styles.flowLine} reveal d1`}>
            {['Browse Quadrant','Lesson Card','Lesson Content','Quiz','Feedback','Lesson Complete','Progress Tracker'].map((step, i, arr) => (
              <span key={step}>
                <div className={styles.flowStep}>{step}</div>
                {i < arr.length - 1 && <div className={styles.flowArrow}>→</div>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 PROTOTYPE ── */}
      <section className={styles.section} id="prototype">
        <div className="reveal"><div className={styles.secNum}>02 — Prototype Demos</div></div>
        <h2 className={`${styles.secTitle} reveal d1`}>Five interactions.</h2>
        <p className="reveal d2" style={{marginBottom:'64px',maxWidth:'800px'}}>GIF walkthroughs of each key screen. The full interactive prototype is linked at the bottom.</p>

        {[
          { num:'Feature 01', img:'/assets/bytheoristbyideology.gif', alt:'By Theorist and By Ideology tab switch', flip:false,
            title:'Browse by Theorist or by Ideology',
            body:'Two views of the library: by theorist, or filtered by ideology (Liberalism, Communism, Conservatism, Anarchism) via a scrollable chip strip. The filter persists while browsing.' },
          { num:'Feature 02', img:'/assets/johnlocke.gif', alt:'John Locke lesson card and content', flip:true,
            title:'Lesson Card → Content → Quiz Entry',
            body:'Lesson Detail shows the theorist portrait, ideology tags, and completion state, with a pinned Start Lesson CTA. Content is scrollable with a reading progress bar fixed at top.' },
          { num:'Feature 03', img:'/assets/incorrect.gif', alt:'Incorrect answer feedback', flip:false,
            title:'Incorrect Answer — Feedback & Retry',
            body:'Wrong answers highlight red on tap. The feedback screen reveals the correct answer with an explanation callout, then offers Try Again or Next Question.' },
          { num:'Feature 04', img:'/assets/correct.gif', alt:'Correct answer and lesson complete', flip:true,
            title:'Correct Answer → Lesson Complete',
            body:'Correct answers confirm with a green ✓ and a gold explanation box. The final question lands on a Lesson Complete screen with two paths: keep learning or view progress.' },
          { num:'Feature 05', img:'/assets/viewprogress.gif', alt:'Progress tracker', flip:false,
            title:'Progress Tracker',
            body:'Two donut charts show completion across theorists and ideologies. Each thinker has a named progress bar and percentage — a clear read on what\'s been covered and what\'s left.' },
        ].map(({ num, img, alt, flip, title, body }) => (
          <div key={num} className={`${styles.gifRow} ${flip ? styles.flip : ''} reveal`}>
            <img className={styles.gifPhone} src={img} alt={alt} />
            <div className={styles.gifCopy}>
              <div className={styles.gifNum}>{num}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        ))}

        <div className={`${styles.protoCta} reveal`}>
          <div className={styles.protoCtaText}>
            <div className={styles.secNum} style={{marginBottom:'8px'}}>Full Prototype</div>
            <h3>9 linked screens, fully interactive.</h3>
            <p style={{maxWidth:'560px'}}>Quadrant home → lesson card → content → quiz → feedback → progress tracker. Open it in Figma and click through the real flow.</p>
          </div>
          <div className={styles.protoCtaActions}>
            <a className={`${styles.cta} ${styles.ctaGold}`} href="https://www.figma.com/proto/cGnUC1QbOoXtjOdp7CmFHL/Political-Theorists-%E2%80%93-Micro-Learning-App?node-id=110-1701&t=pDfRTDVWel4OCwm1-1" target="_blank" rel="noreferrer" style={{whiteSpace:'nowrap'}}>Open in Figma →</a>
            <a className={`${styles.cta} ${styles.ctaOutline}`} href="#rationale" style={{whiteSpace:'nowrap',textAlign:'center'}}>Back to Rationale</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Political Theorists &amp; Theories · Micro-Learning App · Figma Prototype · 2025</p>
        <p>UX / UI · Product Design</p>
      </footer>
    </div>
  )
}
