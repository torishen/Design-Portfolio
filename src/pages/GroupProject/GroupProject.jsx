import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress'
import ProjectNav from '../../components/ProjectNav/ProjectNav'
import styles from './GroupProject.module.css'

const NAV_SECTIONS = [
  { href:'#research',    label:'Research & Testing' },
  { href:'#prototyping', label:'Prototyping'         },
  { href:'#final',       label:'Final Prototype'     },
]

export default function GroupProject() {
  useScrollReveal(0.1)

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backPill}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M7.5 1.5L3 6L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Portfolio
      </Link>
      <ScrollProgress />
      <ProjectNav
        logoAccent="Ultimate Guitar"
        logoText="Vocal Track Case Study"
        sections={NAV_SECTIONS}
      />

      {/* ── PROJECT OVERVIEW ── */}
      <section className={styles.section} style={{paddingTop:'48px',paddingBottom:'48px',borderBottom:'1px solid var(--border)'}}>
        <div style={{marginBottom:'36px'}}>
          <div className={styles.secNum} style={{marginBottom:'10px'}}>UX Case Study · Guitar Learning App</div>
          <h1 style={{fontFamily:'var(--serif)',fontSize:'clamp(36px,5vw,72px)',lineHeight:1.0,letterSpacing:'-0.02em',color:'var(--text)',marginBottom:'20px'}}>Designing the <em style={{fontStyle:'italic',color:'var(--gold)'}}>Vocal Track</em> Feature</h1>
          <p style={{fontSize:'17px',color:'var(--text-2)',maxWidth:'640px',lineHeight:1.7,marginBottom:'28px'}}>A new feature for <em>Ultimate Guitar</em> that bridges the gap between learning guitar and singing — letting users match their vocal pitch to their tabs automatically.</p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'32px'}}>
            {[['Platform','Ultimate Guitar'],['Role','Product Designer'],['Tools','Figma · HTML Mid-Fi']].map(([label,value]) => (
              <div key={label} style={{display:'flex',flexDirection:'column',gap:'4px'}}>
                <span style={{fontFamily:'var(--mono)',fontSize:'9px',letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--text-3)'}}>{label}</span>
                <span style={{fontFamily:'var(--mono)',fontSize:'12px',color:'var(--text-2)'}}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a className={`${styles.cta} ${styles.ctaGold}`} href="https://www.figma.com/proto/ura8KlGpJpb1JZPanvwxsT/Group-Assignment-7--Copy-?node-id=389-8410&t=m5eKJi2cLtWtPIxq-1" target="_blank" rel="noreferrer">View Figma Prototype →</a>
            <a className={`${styles.cta} ${styles.ctaOutline}`} href="#research">Read Case Study</a>
          </div>
        </div>
        <hr style={{border:'none',borderTop:'1px solid var(--border)',margin:'36px 0'}} />
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'start'}}>
          <div>
            <div className={styles.secNum} style={{marginBottom:'12px'}}>The Problem</div>
            <p style={{lineHeight:1.75,color:'var(--text-2)',maxWidth:'480px'}}>Ultimate Guitar has 14 million monthly users — and no way for a player to match a song's tabs to their vocal range. We identified that gap and designed a feature to close it, from field research through a fully linked hi-fi prototype.</p>
          </div>
          <div>
            <div className={styles.secNum} style={{marginBottom:'12px'}}>What's Here</div>
            {[
              ['01','Research & user testing','Four findings from field observation and 5-user prototype tests.'],
              ['02','Prototyping process','Sketches → HTML mid-fi → Figma hi-fi, with the decision at each stage.'],
              ['03','Final prototype','Three vocal entry paths, fully interactive in Figma.'],
            ].map(([num, title, body]) => (
              <div key={num} className={styles.finding} style={{padding:'12px 0'}}>
                <div className={styles.fNum}>{num}</div>
                <div className={styles.fText}><strong>{title} — </strong>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 RESEARCH & TESTING ── */}
      <section className={styles.section} id="research">
        <div className="reveal"><div className={styles.secNum}>01 — Research &amp; User Testing</div></div>
        <h2 className={`${styles.secTitle} reveal d1`}>Field research, four findings, five users.</h2>
        <p className="reveal" style={{maxWidth:'720px',marginBottom:'40px'}}>
          We observed guitar learners in their practice environments, then ran usability tests on both mid-fi and hi-fi prototypes with five participants. Each round of testing surfaced a specific failure — and drove a specific fix.
        </p>

        {/* Key findings */}
        <div className="reveal" style={{marginBottom:'52px'}}>
          {[
            ['F-01','Navigation complexity.','Users struggled to move between chord view and vocal setup. Every extra screen increased drop-off risk.'],
            ['F-02','Pitch reference gap.','Beginners needed audio confirmation they were in the right key — visual indicators alone weren\'t enough.'],
            ['F-03','Tabs as primary content.','The vocal feature had to support the tab experience, not compete with it. Tabs are why users are there.'],
            ['F-04','Missing closure.','Users completed flows without knowing what had changed. Task completion felt open-ended.'],
          ].map(([num, strong, body]) => (
            <div key={num} className={styles.finding}>
              <div className={styles.fNum}>{num}</div>
              <div className={styles.fText}><strong>{strong}</strong> {body}</div>
            </div>
          ))}
        </div>

        {/* User testing */}
        <div className={styles.secNum} style={{marginBottom:'16px'}}>User Testing — 5 Participants</div>
        <div className={styles.threeCol} style={{marginBottom:'32px'}}>
          {[
            ['Navigation','The feature was a bit difficult to navigate, but the addition of chord charts was extremely helpful for a guitar learner.'],
            ['Focal Point','The emphasis on voice adjustment could be reduced — more focus should go to the tabs, which are the main content during playing.'],
            ['Feedback Clarity','The interface design and flow were effective together — improvement for feedback detail would be helpful in the final screen.'],
          ].map(([label, text], i) => (
            <div key={label} className={`${styles.feedbackCard} reveal ${['','d1',''][i]}`}>
              <div className={styles.fbPerson}>{label}</div>
              <p className={styles.fbText}>{text}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.pullQuote} reveal`}>The feature was useful once users understood it. The path to understanding was the design problem.</div>

        {/* Changes made */}
        <h3 className="reveal" style={{fontFamily:'var(--serif)',fontSize:'22px',marginTop:'48px',marginBottom:'20px',color:'var(--text)'}}>Three changes driven by testing</h3>
        <div>
          {[
            ['01','Context at entry.','A short explanation at the top of the vocal flow tells users what pitch matching does before they commit.'],
            ['02','Post-recording direction.','The screen after recording now explicitly tells users what to do next — the primary drop-off point, fixed.'],
            ['03','Summary on completion.','A confirmation screen shows the applied key, pitch adjustment, tab status, and newly unlocked practice mode.'],
          ].map(([num, strong, body]) => (
            <div key={num} className={`${styles.finding} reveal`}>
              <div className={styles.fNum}>{num}</div>
              <div className={styles.fText}><strong>{strong}</strong> {body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 PROTOTYPING ── */}
      <section className={styles.section} id="prototyping">
        <div className="reveal"><div className={styles.secNum}>02 — Low-Fidelity Prototyping</div></div>
        <h2 className={`${styles.secTitle} reveal d1`}>Sketches before screens.</h2>
        <p className="reveal" style={{maxWidth:'800px'}}>The full interaction flow was mapped by hand first: song detail → vocals menu → pitch detection or track selection → tabs updated. Getting that sequence right on paper meant fewer wrong turns in Figma.</p>
        <div className={`${styles.iterFlow} reveal d1`}>
          {['Hand sketch','Flow map','HTML mid-fi','Figma hi-fi'].map((step, i, arr) => (
            <span key={step} style={{display:'contents'}}>
              <div className={styles.iterStep}>{step}</div>
              {i < arr.length - 1 && <div className={styles.iterArrow}>→</div>}
            </span>
          ))}
        </div>

        <div className="reveal">
          <div className={styles.secNum} style={{marginBottom:'10px'}}>Lo-Fi · UI Storyboard</div>
          <h3 style={{fontFamily:'var(--serif)',fontSize:'clamp(22px,2.4vw,36px)',color:'var(--text)',marginBottom:'14px'}}>Hand-drawn flow</h3>
          <p style={{marginBottom:'28px',maxWidth:'640px'}}>Every screen state, navigation path, and branch sketched before opening any design tool.</p>
          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r)',display:'inline-block'}}>
            <img src="/assets/sketch.png" alt="Lo-fi UI storyboard sketch" style={{width:'auto',maxWidth:'600px',display:'block',borderRadius:'var(--r)'}} />
          </div>
        </div>
      </section>

      {/* ── 03 FINAL ── */}
      <section className={styles.section} id="final">
        <div className="reveal"><div className={styles.secNum} style={{marginBottom:'14px'}}>03 — Final Prototype</div></div>
        <h3 className="reveal" style={{fontFamily:'var(--serif)',fontSize:'clamp(24px,2.6vw,40px)',marginBottom:'28px',color:'var(--text)'}}>High-fidelity in <em style={{fontStyle:'italic',color:'var(--gold)'}}>Figma</em></h3>
        <div className={styles.twoCol} style={{alignItems:'center'}}>
          <div>
            <p className="reveal">Built in Figma using Ultimate Guitar's existing visual language: dark backgrounds, amber accents, and the same typographic scale as the live product.</p>
            <p className="reveal d1" style={{marginTop:'16px'}}>All original UI elements were kept intact. The only thing made visually dominant was "Work with Vocals" — amber at full weight, impossible to miss.</p>
            <div style={{marginTop:'28px',display:'flex',gap:'12px',flexWrap:'wrap'}} className="reveal d2">
              <a className={`${styles.cta} ${styles.ctaGold}`} href="https://www.figma.com/proto/ura8KlGpJpb1JZPanvwxsT/Group-Assignment-7--Copy-?node-id=389-8410&t=m5eKJi2cLtWtPIxq-1" target="_blank" rel="noreferrer">Open Figma Prototype →</a>
            </div>
          </div>
          <div className="reveal d1">
            <div className={styles.gifBlock} style={{border:'none',padding:0}}>
              <img src="/assets/goback.gif" alt="Go back screen interaction" />
              <div className={styles.gifText}>
                <div className={styles.gifTextLabel}>Design Decision</div>
                <h4>"Work with Vocals" Button Prominence</h4>
                <p>The CTA uses Ultimate Guitar's amber accent at full weight. Zero users triggered the go-back prompt during testing — the color hierarchy worked exactly as intended.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three feature flows */}
        <div className="reveal"><div className={styles.secNum} style={{marginTop:'100px',marginBottom:'16px'}}>Final Feature Flows</div></div>
        <h3 className="reveal" style={{fontFamily:'var(--serif)',fontSize:'clamp(22px,2.4vw,36px)',marginBottom:'12px',color:'var(--text)'}}>Three entry points, one problem solved.</h3>
        <p className="reveal d1" style={{marginBottom:'40px',maxWidth:'900px'}}>Three distinct flows, each for a different user: the beginner who doesn't know their key, the band player matching a vocalist's range, and the user who already has a reference recording.</p>
        <div className={`${styles.gifTrio} reveal`}>
          {[
            { label:'Option 1', img:'/assets/pitchdetect.gif', alt:'Pitch detection flow', title:'Pitch Detection', body:'Sing into the microphone — the app detects pitch and transposes tabs automatically. For players who don\'t know their key.' },
            { label:'Option 2', img:'/assets/chooseexisting.gif', alt:'Choose existing track', title:'Choose Existing Track', body:'Browse tracks ordered by pitch, low to high. Select one and tabs adjust. For band players matching a vocalist\'s known range.' },
            { label:'Option 3', img:'/assets/uploadorrecord.gif', alt:'Upload or record', title:'Upload or Record', body:'Upload a file or record live. The app extracts pitch and transposes accordingly. For users who already have a reference recording.' },
          ].map(({ label, img, alt, title, body }) => (
            <div key={label} className={styles.gifTrioCol}>
              <img src={img} alt={alt} />
              <div className={styles.gifTrioText}>
                <div className={styles.gifTrioLabel}>{label}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.protoFrame} reveal d1`} style={{minHeight:'260px',marginTop:'100px',marginLeft:'auto',marginRight:'auto',maxWidth:'800px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <div className={styles.protoLabel} style={{marginBottom:'6px'}}><b>Final Hi-Fi · Figma</b></div>
          <p style={{fontSize:'14px',color:'var(--text-3)',textAlign:'center',maxWidth:'260px',lineHeight:'1.6'}}>11 screens, 3 entry paths, automatic tab transposition.</p>
          <a className={`${styles.cta} ${styles.ctaGold}`} href="https://www.figma.com/proto/ura8KlGpJpb1JZPanvwxsT/Group-Assignment-7--Copy-?node-id=389-8410&t=m5eKJi2cLtWtPIxq-1" target="_blank" rel="noreferrer" style={{fontSize:'12px',padding:'10px 20px',marginBottom:'10px'}}>Open Final Prototype →</a>
          <Link className={`${styles.cta} ${styles.ctaOutline}`} to="/vocal-prototype" style={{fontSize:'12px',padding:'8px 18px'}}>View Mid-Fi (HTML)</Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Ultimate Guitar · Vocal Track Feature · UX Case Study · 2025</p>
        <p>Product Design</p>
      </footer>
    </div>
  )
}
