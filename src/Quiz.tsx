import { useMemo, useState } from 'react'
import type { Question } from './content/types'
import { Rich } from './Rich'

export type QuizItem = { id: string; question: Question }
export type QuizResult = { id: string; correct: boolean }

function shuffle<T>(xs: T[]) {
  const a = [...xs]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// One question on screen at a time, instant feedback, then Continue.
export function Quiz({
  items,
  onAnswer,
  onFinish,
}: {
  items: QuizItem[]
  onAnswer?: (r: QuizResult) => void
  onFinish: (results: QuizResult[]) => void
}) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [results, setResults] = useState<QuizResult[]>([])

  const item = items[index]
  // Shuffle choice order once per question so position isn't a clue.
  const order = useMemo(() => shuffle(item.question.choices.map((_, i) => i)), [item])

  const answered = picked !== null
  const correct = picked === item.question.answer

  function pick(choice: number) {
    if (answered) return
    setPicked(choice)
    const r = { id: item.id, correct: choice === item.question.answer }
    setResults((rs) => [...rs, r])
    onAnswer?.(r)
  }

  function next() {
    if (index + 1 >= items.length) return onFinish(results)
    setIndex(index + 1)
    setPicked(null)
  }

  return (
    <div className="quiz">
      <Steps count={items.length} current={index} />
      <h2 className="q">
        <Rich text={item.question.q} />
      </h2>
      <div className="choices">
        {order.map((c) => {
          let cls = 'choice'
          if (answered && c === item.question.answer) cls += ' right'
          else if (answered && c === picked) cls += ' wrong'
          else if (answered) cls += ' faded'
          return (
            <button key={c} className={cls} onClick={() => pick(c)} disabled={answered}>
              <Rich text={item.question.choices[c]} />
            </button>
          )
        })}
      </div>
      {answered && (
        <div className={correct ? 'feedback right' : 'feedback wrong'} role="status">
          <strong>{correct ? 'Nice, that’s right.' : 'Not quite.'}</strong>
          <p>
            <Rich text={item.question.why} />
          </p>
        </div>
      )}
      {answered && (
        <button className="btn sticky" onClick={next} autoFocus>
          {index + 1 >= items.length ? 'See results' : 'Continue'}
        </button>
      )}
    </div>
  )
}

export function Steps({ count, current }: { count: number; current: number }) {
  return (
    <div className="steps" aria-label={`Step ${current + 1} of ${count}`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={i < current ? 'step done' : i === current ? 'step now' : 'step'} />
      ))}
    </div>
  )
}
