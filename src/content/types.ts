// A lesson is a handful of short cards followed by a quiz.
// Card bullets support **bold** for the one thing to remember.

export type Card = {
  title: string
  bullets: string[]
  tip?: string // memory trick or exam tip
}

export type Question = {
  q: string
  choices: string[]
  answer: number // index into choices
  why: string // shown after answering, right or wrong
}

export type Lesson = {
  cards: Card[]
  questions: Question[]
}
