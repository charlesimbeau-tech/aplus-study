import type { Lesson, Question } from './types'

// Each domain file exports a map of checkpoint id -> lesson.
const modules = import.meta.glob<Record<string, Lesson>>('./1*.ts', { eager: true, import: 'default' })

export const lessons: Record<string, Lesson> = Object.assign({}, ...Object.values(modules))

export function questionId(checkpointId: string, index: number) {
  return `${checkpointId}#${index}`
}

export function findQuestion(id: string): { checkpointId: string; question: Question } | undefined {
  const [checkpointId, i] = id.split('#')
  const question = lessons[checkpointId]?.questions[Number(i)]
  return question ? { checkpointId, question } : undefined
}
