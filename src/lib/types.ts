// ============================================================
// 类型定义 - scandal-maker
// ============================================================

export interface Character {
  id: string
  name: string
  nameKo?: string
  title: string
  faction: 'protagonist' | 'antagonist' | 'neutral' | 'ally'
  description: string
  traits: string[]
  quote: string
  imageUrl?: string
}

export interface TimelineEvent {
  id: string
  date: string       // 故事内时间，如 "Chapter 1"
  title: string
  description: string
  type: 'betrayal' | 'awakening' | 'revenge' | 'reveal'
  chapter?: number
}

export interface ScandalFile {
  id: string
  caseNumber: string
  title: string
  classification: 'TOP SECRET' | 'CONFIDENTIAL' | 'RESTRICTED'
  date: string
  summary: string
  details: string
  involvedParties: string[]
  status: 'open' | 'closed' | 'ongoing'
  chapter?: number
}

export interface Quote {
  id: string
  text: string
  speaker: string
  context?: string
  chapter?: number
}
