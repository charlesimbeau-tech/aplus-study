// Sanity checks for lesson content. Run with `npm run check`.
import { readdirSync } from 'node:fs'
import { allCheckpoints } from '../src/data/objectives.ts'
import type { Lesson } from '../src/content/types.ts'

const dir = new URL('../src/content/', import.meta.url)
const lessons: Record<string, Lesson> = {}
for (const f of readdirSync(dir).filter((f) => /^1\d+-\d+\.ts$/.test(f)))
  Object.assign(lessons, (await import(new URL(f, dir).href)).default)

const ids = new Set(allCheckpoints.map((c) => c.id))
const problems: string[] = []
const answerSpread = [0, 0, 0, 0]
for (const [id, l] of Object.entries(lessons)) {
  if (!ids.has(id)) problems.push(`${id}: not a checkpoint id`)
  if (l.cards.length < 2) problems.push(`${id}: fewer than 2 cards`)
  if (l.questions.length < 5) problems.push(`${id}: fewer than 5 questions`)
  l.questions.forEach((q, i) => {
    if (q.answer < 0 || q.answer >= q.choices.length) problems.push(`${id}#${i}: answer out of range`)
    if (new Set(q.choices).size !== q.choices.length) problems.push(`${id}#${i}: duplicate choices`)
    answerSpread[q.answer]++
  })
}
problems.forEach((p) => console.log(p))
console.log(`${Object.keys(lessons).length}/${ids.size} checkpoints have lessons. Answer positions: ${answerSpread.join('/')}`)
process.exit(problems.length ? 1 : 0)
