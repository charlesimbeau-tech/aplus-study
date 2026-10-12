import { useEffect, useState } from 'react'
import { exams, findCheckpoint, type Exam } from './data/objectives'
import { countDone, setDone, useProgress, type Progress } from './progress'

// Routes: "#/" (map, Core 1), "#/core2" (map, Core 2), "#/c/<checkpoint id>"
function useHashRoute() {
  const [hash, setHash] = useState(location.hash)
  useEffect(() => {
    const onChange = () => {
      setHash(location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash.replace(/^#\/?/, '')
}

export default function App() {
  const route = useHashRoute()
  const progress = useProgress()

  if (route.startsWith('c/')) return <CheckpointScreen id={route.slice(2)} progress={progress} />
  const exam = route === 'core2' ? exams[1] : exams[0]
  return <MapScreen exam={exam} progress={progress} />
}

function nextUp(exam: Exam, progress: Progress) {
  for (const d of exam.domains) for (const c of d.checkpoints) if (!progress[c.id]?.done) return { domain: d, checkpoint: c }
  return undefined
}

function MapScreen({ exam, progress }: { exam: Exam; progress: Progress }) {
  const examIds = exam.domains.flatMap((d) => d.checkpoints.map((c) => c.id))
  const done = countDone(progress, examIds)
  const pct = Math.round((done / examIds.length) * 100)
  const next = nextUp(exam, progress)

  return (
    <main className="page">
      <header className="top">
        <h1>A+ Study</h1>
        <nav className="tabs" aria-label="Exam">
          {exams.map((e) => (
            <a key={e.id} href={e.id === '1201' ? '#/' : '#/core2'} className={e.id === exam.id ? 'tab active' : 'tab'}>
              {e.name}
            </a>
          ))}
        </nav>
      </header>

      <section className="overall">
        <div className="overall-row">
          <span>
            {exam.name} <span className="muted">({exam.code})</span>
          </span>
          <strong>{pct}%</strong>
        </div>
        <Bar value={done} max={examIds.length} />
        <p className="muted small">
          {done} of {examIds.length} checkpoints done
        </p>
      </section>

      {next ? (
        <a className="next-up" href={`#/c/${next.checkpoint.id}`}>
          <span className="next-label">Next up</span>
          <span className="next-title">{next.checkpoint.short}</span>
          <span className="next-meta">
            {next.domain.name} · {next.checkpoint.number}
          </span>
        </a>
      ) : (
        <div className="next-up finished">
          <span className="next-title">🎉 Every {exam.name} checkpoint done</span>
        </div>
      )}

      {exam.domains.map((d) => {
        const ids = d.checkpoints.map((c) => c.id)
        const dDone = countDone(progress, ids)
        return (
          <section key={d.id} className="domain">
            <div className="domain-head">
              <h2>
                {d.number}.0 {d.name}
              </h2>
              <span className="chip" title="Share of the exam">
                {d.weight}% of exam
              </span>
            </div>
            <Bar value={dDone} max={ids.length} />
            <ol className="path">
              {d.checkpoints.map((c) => {
                const state = progress[c.id]?.done ? 'done' : next?.checkpoint.id === c.id ? 'next' : 'todo'
                return (
                  <li key={c.id} className={`node ${state}`}>
                    <a href={`#/c/${c.id}`}>
                      <span className="dot" aria-hidden="true">
                        {state === 'done' ? '✓' : ''}
                      </span>
                      <span className="node-text">
                        <span className="node-num">{c.number}</span> {c.short}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </section>
        )
      })}
    </main>
  )
}

function CheckpointScreen({ id, progress }: { id: string; progress: Progress }) {
  const found = findCheckpoint(id)
  if (!found)
    return (
      <main className="page">
        <a className="back" href="#/">
          ← Map
        </a>
        <p>That checkpoint doesn't exist.</p>
      </main>
    )
  const { exam, domain, checkpoint } = found
  const done = !!progress[checkpoint.id]?.done
  const mapHref = exam.id === '1201' ? '#/' : '#/core2'

  return (
    <main className="page">
      <a className="back" href={mapHref}>
        ← {exam.name} map
      </a>
      <p className="muted small">
        {exam.code} · {domain.number}.0 {domain.name}
      </p>
      <h1 className="cp-title">
        <span className="node-num">{checkpoint.number}</span> {checkpoint.short}
      </h1>
      <blockquote className="official">
        <span className="muted small">Official objective</span>
        {checkpoint.official}
      </blockquote>

      <div className="card soon">
        <strong>Lesson and quiz coming soon.</strong>
        <p className="muted">For now you can mark this checkpoint done yourself to track progress.</p>
      </div>

      <button className={done ? 'btn secondary' : 'btn'} onClick={() => setDone(checkpoint.id, !done)}>
        {done ? 'Mark as not done' : 'Mark as done ✓'}
      </button>
    </main>
  )
}

function Bar({ value, max }: { value: number; max: number }) {
  return (
    <div className="bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className="bar-fill" style={{ width: `${max ? (value / max) * 100 : 0}%` }} />
    </div>
  )
}
