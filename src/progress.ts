import { useSyncExternalStore } from 'react'

// Everything lives in this browser's localStorage.

export type CheckpointProgress = {
  done: boolean
  bestScore?: number // 0-100
  updatedAt: string
}

export type Progress = Record<string, CheckpointProgress>

// Spaced review of missed questions (Leitner boxes). Box 0 is due tomorrow,
// each right answer moves it up a box; clearing the last box retires it.
export type ReviewItem = { box: number; due: string } // due: YYYY-MM-DD
export type ReviewQueue = Record<string, ReviewItem> // keyed by question id

export type Streak = { count: number; last?: string } // last: YYYY-MM-DD

export type State = { progress: Progress; review: ReviewQueue; streak: Streak }

const KEYS = {
  progress: 'aplus-study:progress:v1',
  review: 'aplus-study:review:v1',
  streak: 'aplus-study:streak:v1',
} as const

const BOX_DAYS = [1, 3, 7, 14]

const listeners = new Set<() => void>()

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

let state: State = {
  progress: read<Progress>(KEYS.progress, {}),
  review: read<ReviewQueue>(KEYS.review, {}),
  streak: read<Streak>(KEYS.streak, { count: 0 }),
}

function commit(next: Partial<State>) {
  state = { ...state, ...next }
  for (const k of Object.keys(next) as (keyof State)[]) {
    try {
      localStorage.setItem(KEYS[k], JSON.stringify(state[k]))
    } catch {
      // Storage unavailable (private mode); progress still works for this visit.
    }
  }
  listeners.forEach((l) => l())
}

export function today(offsetDays = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function bumpStreak(): Streak {
  const { count, last } = state.streak
  if (last === today()) return state.streak
  return { count: last === today(-1) ? count + 1 : 1, last: today() }
}

export function setDone(id: string, done: boolean) {
  commit({ progress: { ...state.progress, [id]: { ...state.progress[id], done, updatedAt: new Date().toISOString() } } })
}

export const PASS_SCORE = 80

// Records a finished quiz. Missed questions join the review queue.
export function recordQuiz(checkpointId: string, score: number, missedIds: string[]) {
  const prev = state.progress[checkpointId]
  const review = { ...state.review }
  for (const id of missedIds) review[id] = { box: 0, due: today(BOX_DAYS[0]) }
  commit({
    progress: {
      ...state.progress,
      [checkpointId]: {
        done: !!prev?.done || score >= PASS_SCORE,
        bestScore: Math.max(prev?.bestScore ?? 0, score),
        updatedAt: new Date().toISOString(),
      },
    },
    review,
    streak: bumpStreak(),
  })
}

export function recordReview(questionId: string, correct: boolean) {
  const review = { ...state.review }
  const item = review[questionId]
  if (correct) {
    const box = (item?.box ?? 0) + 1
    if (box >= BOX_DAYS.length) delete review[questionId]
    else review[questionId] = { box, due: today(BOX_DAYS[box]) }
  } else {
    review[questionId] = { box: 0, due: today(BOX_DAYS[0]) }
  }
  commit({ review, streak: bumpStreak() })
}

export function dueReviewIds(review: ReviewQueue) {
  const t = today()
  return Object.entries(review)
    .filter(([, r]) => r.due <= t)
    .map(([id]) => id)
}

export function useStore(): State {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => state,
  )
}

export function countDone(progress: Progress, ids: string[]) {
  return ids.filter((id) => progress[id]?.done).length
}

// Streak shown to the user: still alive if they studied today or yesterday.
export function liveStreak(streak: Streak) {
  return streak.last === today() || streak.last === today(-1) ? streak.count : 0
}
