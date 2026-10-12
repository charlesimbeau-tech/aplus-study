import { useEffect, useMemo, useState } from 'react'
import { findQuestion, lessons, questionId } from './content'
import type { Lesson } from './content/types'
import { exams, findCheckpoint, type Exam } from './data/objectives'
import {
  PASS_SCORE,
  countDone,
  dueReviewIds,
  liveStreak,
  recordQuiz,
  recordReview,
  setDone,
  useStore,
  type Progress,
} from './progress'
import { Quiz, Steps, type QuizItem, type QuizResult } from './Quiz'
import { Rich } from './Rich'

// Routes: "#/" (map, Core 1), "#/core2" (map, Core 2), "#/c/<checkpoint id>", "#/review"
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
  if (route.startsWith('c/')) return <CheckpointScreen key={route} id={route.slice(2)} />
  if (route === 'review') return <ReviewScreen />
  return <MapScreen exam={route === 'core2' ? exams[1] : exams[0]} />
}

function nextUp(exam: Exam, progress: Progress) {
  for (const d of exam.domains) for (const c of d.checkpoints) if (!progress[c.id]?.done) return { domain: d, checkpoint: c }
  return undefined
}

function MapScreen({ exam }: { exam: Exam }) {
  const { progress, review, streak } = useStore()
  const examIds = exam.domains.flatMap((d) => d.checkpoints.map((c) => c.id))
  const done = countDone(progress, examIds)
  const pct = Math.round((done / examIds.length) * 100)
  const next = nextUp(exam, progress)
  const due = dueReviewIds(review).filter((id) => findQuestion(id)).length
  const days = liveStreak(streak)

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
          {days > 0 && <span className="streak"> · 🔥 {days}-day streak</span>}
        </p>
      </section>

      {due > 0 && (
        <a className="review-card" href="#/review">
          <span>
            <strong>Quick review</strong>
            <span className="muted small"> · {due} question{due === 1 ? '' : 's'} you missed before</span>
          </span>
          <span aria-hidden="true">→</span>
        </a>
      )}

      {next ? (
        <a className="next-up" href={`#/c/${next.checkpoint.id}`}>
          <span className="next-label">Next up</span>
          <span className="next-title">{next.checkpoint.short}</span>
          <span className="next-meta">
            {next.domain.name} · {next.checkpoint.number}
            {lessons[next.checkpoint.id] && ` · about ${minutes(lessons[next.checkpoint.id])} min`}
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
                const best = progress[c.id]?.bestScore
                return (
                  <li key={c.id} className={`node ${state}`}>
                    <a href={`#/c/${c.id}`}>
                      <span className="dot" aria-hidden="true">
                        {state === 'done' ? '✓' : ''}
                      </span>
                      <span className="node-text">
                        <span className="node-num">{c.number}</span> {c.short}
                        {!lessons[c.id] && <span className="soon-tag">soon</span>}
                      </span>
                      {best !== undefined && <span className="best">{best}%</span>}
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

// Rough time: ~40s per card, ~30s per question.
function minutes(lesson: Lesson) {
  return Math.max(3, Math.round((lesson.cards.length * 40 + lesson.questions.length * 30) / 60))
}

type Phase = { kind: 'intro' } | { kind: 'card'; index: number } | { kind: 'quiz' } | { kind: 'result'; results: QuizResult[] }

function CheckpointScreen({ id }: { id: string }) {
  const { progress } = useStore()
  const [phase, setPhase] = useState<Phase>({ kind: 'intro' })
  const found = findCheckpoint(id)
  const lesson = lessons[id]
  const quizItems = useMemo<QuizItem[]>(
    () => (lesson ? lesson.questions.map((question, i) => ({ id: questionId(id, i), question })) : []),
    [id, lesson],
  )

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

  if (lesson && phase.kind === 'card') {
    const card = lesson.cards[phase.index]
    const last = phase.index + 1 >= lesson.cards.length
    return (
      <main className="page focus">
        <TopBar href={mapHref} label={checkpoint.short} />
        <Steps count={lesson.cards.length} current={phase.index} />
        <article className="lesson-card">
          <h2>{card.title}</h2>
          <ul>
            {card.bullets.map((b, i) => (
              <li key={i}>
                <Rich text={b} />
              </li>
            ))}
          </ul>
          {card.tip && (
            <p className="tip">
              💡 <Rich text={card.tip} />
            </p>
          )}
        </article>
        <div className="row sticky">
          {phase.index > 0 && (
            <button className="btn secondary narrow" onClick={() => setPhase({ kind: 'card', index: phase.index - 1 })}>
              Back
            </button>
          )}
          <button className="btn" onClick={() => setPhase(last ? { kind: 'quiz' } : { kind: 'card', index: phase.index + 1 })}>
            {last ? 'Start quiz' : 'Next'}
          </button>
        </div>
      </main>
    )
  }

  if (lesson && phase.kind === 'quiz')
    return (
      <main className="page focus">
        <TopBar href={mapHref} label={`Quiz · ${checkpoint.short}`} />
        <Quiz
          items={quizItems}
          onFinish={(results) => {
            const score = Math.round((results.filter((r) => r.correct).length / results.length) * 100)
            recordQuiz(
              checkpoint.id,
              score,
              results.filter((r) => !r.correct).map((r) => r.id),
            )
            setPhase({ kind: 'result', results })
          }}
        />
      </main>
    )

  if (lesson && phase.kind === 'result') {
    const right = phase.results.filter((r) => r.correct).length
    const score = Math.round((right / phase.results.length) * 100)
    const passed = score >= PASS_SCORE
    const nextCp = nextUp(exam, progress)
    return (
      <main className="page focus">
        <div className={passed ? 'result passed' : 'result'}>
          <div className="result-emoji">{passed ? '🎉' : '💪'}</div>
          <h1>
            {right} / {phase.results.length}
          </h1>
          <p>
            {passed
              ? 'Checkpoint cleared. Nice work.'
              : `You need ${PASS_SCORE}% to clear it. The ones you missed will come back in your quick review.`}
          </p>
        </div>
        {passed && nextCp ? (
          <a className="btn" href={`#/c/${nextCp.checkpoint.id}`}>
            Next: {nextCp.checkpoint.short}
          </a>
        ) : (
          !passed && (
            <button className="btn" onClick={() => setPhase({ kind: 'card', index: 0 })}>
              Look at the cards again
            </button>
          )
        )}
        {!passed && (
          <button className="btn secondary" onClick={() => setPhase({ kind: 'quiz' })}>
            Retry the quiz
          </button>
        )}
        <a className="btn secondary" href={mapHref}>
          Take a break (back to map)
        </a>
      </main>
    )
  }

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

      {lesson ? (
        <>
          <div className="card">
            <strong>
              {lesson.cards.length} short cards, then {lesson.questions.length} questions
            </strong>
            <p className="muted">
              About {minutes(lesson)} minutes. Get {PASS_SCORE}% to clear the checkpoint.
              {progress[checkpoint.id]?.bestScore !== undefined && ` Your best so far: ${progress[checkpoint.id]?.bestScore}%.`}
            </p>
          </div>
          <button className="btn" onClick={() => setPhase({ kind: 'card', index: 0 })}>
            Start
          </button>
          <button className="btn secondary" onClick={() => setPhase({ kind: 'quiz' })}>
            I know this, skip to the quiz
          </button>
        </>
      ) : (
        <>
          <div className="card soon">
            <strong>Lesson and quiz coming soon.</strong>
            <p className="muted">For now you can mark this checkpoint done yourself to track progress.</p>
          </div>
          <button className={done ? 'btn secondary' : 'btn'} onClick={() => setDone(checkpoint.id, !done)}>
            {done ? 'Mark as not done' : 'Mark as done ✓'}
          </button>
        </>
      )}
    </main>
  )
}

function ReviewScreen() {
  const { review } = useStore()
  // Freeze the list when the screen opens so answering doesn't reshuffle it.
  const [items] = useState<QuizItem[]>(() =>
    dueReviewIds(review)
      .map((id) => ({ id, found: findQuestion(id) }))
      .filter((x) => x.found)
      .slice(0, 10)
      .map((x) => ({ id: x.id, question: x.found!.question })),
  )
  const [finished, setFinished] = useState<QuizResult[] | null>(null)

  if (finished || items.length === 0) {
    const right = finished?.filter((r) => r.correct).length ?? 0
    return (
      <main className="page focus">
        <div className="result passed">
          <div className="result-emoji">✅</div>
          <h1>{finished ? `${right} / ${finished.length}` : 'All caught up'}</h1>
          <p>
            {finished
              ? 'Review done. Ones you got right come back later, spaced further apart.'
              : 'Nothing to review right now.'}
          </p>
        </div>
        <a className="btn" href="#/">
          Back to map
        </a>
      </main>
    )
  }

  return (
    <main className="page focus">
      <TopBar href="#/" label="Quick review" />
      <Quiz items={items} onAnswer={(r) => recordReview(r.id, r.correct)} onFinish={setFinished} />
    </main>
  )
}

function TopBar({ href, label }: { href: string; label: string }) {
  return (
    <div className="topbar">
      <a href={href} className="close" aria-label="Leave and go back to the map">
        ✕
      </a>
      <span className="topbar-label">{label}</span>
    </div>
  )
}

function Bar({ value, max }: { value: number; max: number }) {
  return (
    <div className="bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className="bar-fill" style={{ width: `${max ? (value / max) * 100 : 0}%` }} />
    </div>
  )
}
