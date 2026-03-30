export interface TimelineEvent {
  id: string;
  chapter: number;
  title: string;
  type: 'BETRAYAL' | 'AWAKENING' | 'REVENGE' | 'REVEAL';
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: 'e1',
    chapter: 1,
    title: '陷害',
    type: 'BETRAYAL',
    description: 'Harriet 被表姐 Bella 陷害，失去一切'
  },
  {
    id: 'e2',
    chapter: 5,
    title: '觉醒',
    type: 'AWAKENING',
    description: 'Harriet 意识到真相，决定反击'
  },
  {
    id: 'e3',
    chapter: 10,
    title: '复仇开始',
    type: 'REVENGE',
    description: 'Harriet 开始策划她的复仇计划'
  },
  {
    id: 'e4',
    chapter: 15,
    title: '真相揭露',
    type: 'REVEAL',
    description: 'Bella 的罪行被公之于众'
  }
];
