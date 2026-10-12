import { useSyncExternalStore } from 'react'

// Progress lives in this browser's localStorage. One record per checkpoint.
export type CheckpointProgress = {
  done: boolean
  bestScore?: number // 0-100, filled in once quizzes exist
  updatedAt: string
}

export type Progress = Record<string, CheckpointProgress>

const KEY = 'aplus-study:progress:v1'
const listeners = new Set<() => void>()

function load(): Progress {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Progress
  } catch {
    return {}
  }
}

let current: Progress = load()

function save(next: Progress) {
  current = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // Storage unavailable (private mode); progress still works for this visit.
  }
  listeners.forEach((l) => l())
}

export function setDone(id: string, done: boolean) {
  save({ ...current, [id]: { ...current[id], done, updatedAt: new Date().toISOString() } })
}

export function useProgress(): Progress {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => current,
  )
}

export function countDone(progress: Progress, ids: string[]) {
  return ids.filter((id) => progress[id]?.done).length
}
