import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './VocalPrototype.module.css'

// ── Static data ──────────────────────────────────────
const TRACKS = [
  { pitch: -2, badge: '−2', cls: 'negative', desc: '2 semitones below original' },
  { pitch: -1, badge: '−1', cls: 'negative', desc: '1 semitone below original' },
  { pitch:  0, badge: '~',  cls: 'neutral',  desc: 'Original pitch' },
  { pitch: +1, badge: '+1', cls: 'positive', desc: '1 semitone above original' },
  { pitch: +2, badge: '+2', cls: 'positive', desc: '2 semitones above original' },
  { pitch: +3, badge: '+3', cls: 'positive', desc: '3 semitones above original' },
]
const KEYS          = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Am','B']
const WAVE_HEIGHTS  = [8,12,18,24,20,14,22,28,18,12,20,26,22,16,24,18,12,20,14,10]
const ALL_SCREENS   = ['s-song-detail','s-vocals-menu','s-detecting','s-pitch-confirmed','s-vocal-tracks','s-track-selected','s-applied-summary','s-song-vocal-active','s-recording','s-transpose','s-vocal-tracks-updated']

// ── Reusable sub-components ──────────────────────────
function Waveform() {
  return (
    <div className={styles.waveform}>
      {WAVE_HEIGHTS.map((h, i) => <span key={i} style={{ height: `${h}px` }} />)}
    </div>
  )
}

function NavBar({ title, onBack, backLabel, showToggle = false }) {
  return (
    <div className={styles.navBar}>
      {onBack
        ? <div className={styles.navBack} onClick={onBack}>← {backLabel}</div>
        : <div className={styles.navTitle}>{title}</div>
      }
      <div className={styles.navActions}>
        {showToggle && <div className={`${styles.toggle} ${styles.on}`} />}
        {!onBack && (
          <>
            <div className={styles.iconBtn}>✏️</div>
            <div className={styles.iconBtn}>☰</div>
            <div className={styles.iconBtn}>♡</div>
          </>
        )}
      </div>
    </div>
  )
}

function ChordRow() {
  return (
    <div className={styles.chordRow}>
      {['C','Am','G'].map(k => (
        <div key={k} className={styles.chordChip}>
          <div className={styles.chordLabel}>{k}</div>
          <div className={styles.chordName}>{k}</div>
          <div className={styles.chordLines}><span/><span/><span/><span/></div>
        </div>
      ))}
    </div>
  )
}

function PlaceholderList({ rows = 3 }) {
  const sizes = ['med','short','med','short']
  return (
    <div className={styles.placeholderList}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className={`${styles.placeholderRow} ${styles[sizes[i % sizes.length]]}`} />
      ))}
    </div>
  )
}

// ── Main component ───────────────────────────────────
export default function VocalPrototype() {
  const [screen,        setScreen]        = useState('s-song-detail')
  const [sortDir,       setSortDir]       = useState('asc')
  const [selectedTrack, setSelectedTrack] = useState(TRACKS[1]) // default −1
  const [activeKey,     setActiveKey]     = useState('Am')
  const [toast,         setToast]         = useState(null)

  const goTo = (id) => setScreen(id)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2800)
  }

  const sortedTracks = [...TRACKS].sort((a, b) =>
    sortDir === 'asc' ? a.pitch - b.pitch : b.pitch - a.pitch
  )

  // ── Screen renders ─────────────────────────────────
  const renderScreen = () => {
    switch (screen) {

      case 's-song-detail':
        return <>
          <NavBar title="song #334" />
          <div className={styles.tabBar}>
            <div className={`${styles.tab} ${styles.active}`}>Chords</div>
            <div className={styles.tab}>Strumming</div>
          </div>
          <div className={styles.screenBody}>
            <ChordRow />
            <div className={styles.btn}>⇅ Adjust</div>
            <div className={styles.btn} onClick={() => goTo('s-transpose')}>↕ Transpose</div>
            <div className={`${styles.btn} ${styles.btnFilled}`} onClick={() => goTo('s-vocals-menu')}>🎤 Work with Vocals</div>
            <div style={{height:'1px',background:'var(--border)'}} />
            <div className={styles.sectionLabel}>Practice</div>
            <div className={styles.toggleRow}>
              <span>Practice Vocal Track</span>
              <div className={`${styles.toggle} ${styles.disabled}`} title="Add a vocal track first" />
            </div>
            <div className={styles.infoNote}>Add a vocal track using "Work with Vocals" to enable practice mode.</div>
            <PlaceholderList />
          </div>
        </>

      case 's-vocals-menu':
        return <>
          <NavBar backLabel="Vocals" onBack={() => goTo('s-song-detail')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.sectionLabel}>Set up vocal track</div>
            {[
              { icon:'🎙️', label:'Pitch Detection', desc:'Sing a note — we\'ll detect your key', dest:'s-detecting' },
              { icon:'❓', label:'Choose Existing Vocal Track', desc:'Browse tracks sorted by pitch', dest:'s-vocal-tracks' },
              { icon:'🔊', label:'Use Recording', desc:'Upload or record from device', dest:'s-recording' },
            ].map(({ icon, label, desc, dest }) => (
              <div key={label} className={styles.menuItem} onClick={() => goTo(dest)}>
                <div className={styles.menuIcon}>{icon}</div>
                <div>
                  <div className={styles.menuLabel}>{label}</div>
                  <div className={styles.menuDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </>

      case 's-detecting':
        return <>
          <NavBar backLabel="Vocals" onBack={() => goTo('s-vocals-menu')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.micCenter}>
              <div className={styles.micOrb}>🎤<div className={styles.micPulse} /></div>
              <div className={styles.detectingLabel}>Detecting singing pitch…</div>
            </div>
            <div className={styles.sectionLabel}>How to get the best result</div>
            {[
              'Take a breath and find a comfortable note in your range.',
              'Sing a steady "ahh" — hold it for 2–3 seconds without wavering.',
              'Keep your phone about 15 cm from your mouth.',
            ].map((text, i) => (
              <div key={i} className={styles.stepItem}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepText}>{text}</div>
              </div>
            ))}
            <div className={`${styles.btn} ${styles.btnFilled}`} onClick={() => goTo('s-pitch-confirmed')} style={{marginTop:'4px'}}>
              Simulate: Pitch Detected
            </div>
          </div>
        </>

      case 's-pitch-confirmed':
        return <>
          <NavBar backLabel="Vocals" onBack={() => goTo('s-detecting')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.confirmBadge}>
              <h2>Pitch confirmed!</h2>
              <p>Detected key: A minor · Confidence 94%</p>
            </div>
            <div className={`${styles.btn} ${styles.btnFilled}`} onClick={() => goTo('s-vocal-tracks-updated')}>View Updated Tabs</div>
            <div className={`${styles.btn} ${styles.btnOutline}`} onClick={() => goTo('s-vocal-tracks')}>View Matching Tracks</div>
            <div className={styles.btn} onClick={() => goTo('s-detecting')}>Retry</div>
          </div>
        </>

      case 's-vocal-tracks':
        return <>
          <NavBar backLabel="Vocals" onBack={() => goTo('s-vocals-menu')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.pitchLegend}>
              {[{cls:'positive',badge:'+2',label:'Higher pitch'},{cls:'neutral',badge:'~',label:'Original pitch'},{cls:'negative',badge:'−2',label:'Lower pitch'}].map(({cls,badge,label}) => (
                <div key={badge} className={styles.legendItem}>
                  <span className={`${styles.legendBadge} ${styles[cls]}`}>{badge}</span>
                  {label}
                </div>
              ))}
            </div>
            <div className={styles.sortBar}>
              <span className={styles.sortLabel}>Sort by pitch:</span>
              <button className={`${styles.sortBtn} ${sortDir==='asc'?styles.active:''}`} onClick={() => setSortDir('asc')}>Low → High</button>
              <button className={`${styles.sortBtn} ${sortDir==='desc'?styles.active:''}`} onClick={() => setSortDir('desc')}>High → Low</button>
            </div>
            <div className={styles.sectionLabel}>Vocal Tracks</div>
            <div className={styles.scrollList}>
              {sortedTracks.map((t) => (
                <div key={t.pitch} className={styles.trackRow} onClick={() => { setSelectedTrack(t); goTo('s-track-selected') }}>
                  <div className={styles.playBtn}>▶</div>
                  <Waveform />
                  <div className={`${styles.trackBadge} ${styles[t.cls]}`}>{t.badge}</div>
                </div>
              ))}
            </div>
          </div>
        </>

      case 's-track-selected':
        return <>
          <NavBar backLabel="Vocal Tracks" onBack={() => goTo('s-vocal-tracks')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.sectionLabel}>Selected Track</div>
            <div className={`${styles.trackRow} ${styles.selected}`}>
              <div className={styles.playBtn}>▶</div>
              <Waveform />
              <div className={`${styles.trackBadge} ${styles[selectedTrack.cls]}`}>{selectedTrack.badge}</div>
            </div>
            <div className={styles.infoNote}>This track is {selectedTrack.desc}.</div>
            <div className={`${styles.btn} ${styles.btnOutline}`} onClick={() => goTo('s-vocal-tracks-updated')}>Preview Updated Tabs</div>
            <div className={`${styles.btn} ${styles.btnFilled}`} onClick={() => goTo('s-applied-summary')}>Use This Track</div>
          </div>
        </>

      case 's-recording':
        return <>
          <NavBar backLabel="Vocals" onBack={() => goTo('s-vocals-menu')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.sectionLabel}>Choose from device</div>
            <div className={styles.btn} onClick={() => showToast('Recording saved — select it from "Choose Existing Vocal Track".')}>Browse device recordings</div>
            <div style={{height:'1px',background:'var(--border)'}} />
            <div className={styles.sectionLabel}>Live recording</div>
            <div className={styles.recordBtn} onClick={() => showToast('Recording saved — select it from "Choose Existing Vocal Track".')}>🎙️</div>
            <div style={{textAlign:'center',fontSize:'12px',color:'var(--text-muted)',marginTop:'8px'}}>Tap to record</div>
          </div>
        </>

      case 's-applied-summary':
        return <>
          <NavBar backLabel="Back" onBack={() => goTo('s-track-selected')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.summaryCard}>
              <h2>Vocal track applied ✓</h2>
              {[['Track pitch',`${selectedTrack.badge} semitone${selectedTrack.badge==='~'?'':'s'}`],['Song key','A minor'],['Tabs updated','Yes — transposed to match'],['Practice mode','Now available']].map(([k,v]) => (
                <div key={k} className={styles.summaryRow}>
                  <span className={styles.summaryKey}>{k}</span>
                  <span className={styles.summaryVal}>{v}</span>
                </div>
              ))}
            </div>
            <div className={styles.infoNote}>Your chords and tabs now reflect the vocalist's key. Practice mode has been unlocked on the song screen.</div>
            <div className={`${styles.btn} ${styles.btnFilled}`} onClick={() => goTo('s-song-vocal-active')}>Go to Song →</div>
          </div>
        </>

      case 's-song-vocal-active':
        return <>
          <NavBar title="song #334" />
          <div className={styles.tabBar}>
            <div className={`${styles.tab} ${styles.active}`}>Chords</div>
            <div className={styles.tab}>Strumming</div>
          </div>
          <div className={styles.screenBody}>
            <div className={styles.toggleRow}>
              <span>Practice Vocal Track</span>
              <div className={`${styles.toggle} ${styles.on}`} />
            </div>
            <div className={`${styles.trackRow} ${styles.selected}`}>
              <div className={styles.playBtn}>▶</div>
              <Waveform />
              <div className={`${styles.trackBadge} ${styles[selectedTrack.cls]}`}>{selectedTrack.badge}</div>
            </div>
            <div className={styles.infoNote}>Chords and tabs are transposed to match the vocal track key (A minor).</div>
            <ChordRow />
            <div className={styles.sectionLabel}>Tabs <span className={styles.changePill}>Updated</span></div>
            <PlaceholderList rows={4} />
          </div>
        </>

      case 's-transpose':
        return <>
          <NavBar backLabel="Transpose" onBack={() => goTo('s-song-detail')} />
          <div className={styles.screenBody}>
            <div className={styles.sectionLabel}>Select key</div>
            <div className={styles.transposeGrid}>
              {KEYS.map((k) => (
                <button key={k} className={`${styles.transposeCell} ${activeKey===k?styles.active:''}`} onClick={() => setActiveKey(k)}>{k}</button>
              ))}
            </div>
            <div className={styles.sectionLabel} style={{marginTop:'8px'}}>Tabs</div>
            <PlaceholderList />
          </div>
        </>

      case 's-vocal-tracks-updated':
        return <>
          <NavBar backLabel="Vocals" onBack={() => goTo('s-pitch-confirmed')} showToggle />
          <div className={styles.screenBody}>
            <div className={styles.sectionLabel}>Updated Tabs <span className={styles.changePill}>Preview</span></div>
            <ChordRow />
            <div className={styles.infoNote}>Transposed to match your detected vocal pitch (A minor).</div>
            <PlaceholderList rows={5} />
            <div className={`${styles.btn} ${styles.btnFilled}`} onClick={() => goTo('s-applied-summary')} style={{marginTop:'auto'}}>Apply &amp; Continue →</div>
          </div>
        </>

      default:
        return null
    }
  }

  return (
    <div className={styles.page}>
      {/* Back link */}
      <div className={styles.topBar}>
        <Link to="/group-project" className={styles.backLink}>← Back to Case Study</Link>
        <span className={styles.topBarTitle}>Mid-Fi Prototype v2</span>
      </div>

      {/* Phone simulator */}
      <div className={styles.phoneWrap}>
        <div className={styles.phone}>
          {renderScreen()}
          {/* Toast */}
          {toast && <div className={`${styles.toast} ${styles.show}`}>{toast}</div>}
        </div>
      </div>

      {/* Jump-to nav */}
      <div className={styles.screenNav}>
        <span className={styles.screenNavLabel}>JUMP TO SCREEN:</span>
        {ALL_SCREENS.map((id) => (
          <button key={id} className={`${styles.btn} ${styles.small} ${screen===id?styles.current:''}`} onClick={() => goTo(id)}>
            {id.replace('s-', '').replace(/-/g, ' ')}
          </button>
        ))}
      </div>
    </div>
  )
}
