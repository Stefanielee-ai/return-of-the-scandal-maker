// ============================================================
// 静态数据 - scandal-maker
// ============================================================

import type { Character, TimelineEvent, ScandalFile, Quote } from './types'

export const characters: Character[] = [
  {
    id: 'harriet',
    name: 'Harriet Listerwell',
    nameKo: '해리엇 리스터웰',
    title: 'The Scandal Maker',
    faction: 'protagonist',
    description:
      '曾经温柔善良的贵族少女，被表姐贝拉陷害背上"丑闻制造者"的骂名，名誉尽毁。当她看穿了贝拉那令人不寒而栗的微笑背后的真相，她做出了一个决定——既然世界要她成为反派，她就成为一个永远无法被遗忘的反派。',
    traits: ['复仇', '智谋', '坚韧', '魅力'],
    quote: '既然这个世界想要一个反派，那我就给他们一个永远忘不了的反派。',
  },
  {
    id: 'bella',
    name: 'Bella',
    nameKo: '벨라',
    title: 'The Smiling Villain',
    faction: 'antagonist',
    description:
      '哈丽特的表姐，表面温柔可人，实则心机深沉。她用一个微笑操控了所有人，将哈丽特推入深渊，自己却置身事外。直到哈丽特回归，她的笑容才开始出现裂缝。',
    traits: ['伪善', '操控', '野心', '表演'],
    quote: '亲爱的哈丽特，你真的以为你能赢吗？',
  },
  {
    id: 'duke',
    name: 'Duke Ashford',
    nameKo: '애쉬포드 공작',
    title: 'The Duke',
    faction: 'neutral',
    description:
      '权贵公爵，哈丽特被诬陷"觊觎其财产"的对象。冷峻而难以捉摸，随着故事发展逐渐看清了贝拉的真面目。',
    traits: ['冷静', '权势', '洞察', '神秘'],
    quote: '真相从不需要辩解，它只需要时间。',
  },
  {
    id: 'ally',
    name: 'Lady Evelyn',
    nameKo: '에블린 부인',
    title: 'The Loyal Ally',
    faction: 'ally',
    description:
      '哈丽特少数真正的朋友之一，在哈丽特最落魄时没有离开。她的忠诚和情报网络成为哈丽特复仇计划的重要支柱。',
    traits: ['忠诚', '机智', '勇敢', '温暖'],
    quote: '我从来不相信那些谣言。我了解你，哈丽特。',
  },
]

export const timeline: TimelineEvent[] = [
  {
    id: 'ev1',
    date: 'Chapter 1',
    title: '陷害',
    description: '贝拉精心设局，将自己的罪行嫁祸给哈丽特，让她背上"丑闻制造者"和"觊觎公爵财产的小偷"的骂名。',
    type: 'betrayal',
    chapter: 1,
  },
  {
    id: 'ev2',
    date: 'Chapter 3',
    title: '名誉尽毁',
    description: '哈丽特被上流社会唾弃，昔日朋友纷纷离去，家族蒙羞。她独自承受着本不属于她的罪名。',
    type: 'betrayal',
    chapter: 3,
  },
  {
    id: 'ev3',
    date: 'Chapter 7',
    title: '真相浮现',
    description: '哈丽特无意间发现了贝拉操控一切的证据，看见了那个令人不寒而栗的微笑背后的真实面目。',
    type: 'reveal',
    chapter: 7,
  },
  {
    id: 'ev4',
    date: 'Chapter 8',
    title: '觉醒',
    description: '哈丽特做出决定：不再是受害者。既然世界要她扮演反派，她就成为一个真正的、永远无法被遗忘的丑闻制造者。',
    type: 'awakening',
    chapter: 8,
  },
  {
    id: 'ev5',
    date: 'Chapter 10+',
    title: '归来',
    description: '丑闻制造者归来。哈丽特开始主动出击，用贝拉的手段对付贝拉，掌控自己的人生叙事。',
    type: 'revenge',
    chapter: 10,
  },
]

export const scandalFiles: ScandalFile[] = [
  {
    id: 'sf1',
    caseNumber: 'CASE-001',
    title: '利斯特威尔小姐诬陷事件',
    classification: 'TOP SECRET',
    date: '第一章',
    summary: '哈丽特·利斯特威尔被指控觊觎公爵财产并制造丑闻，实为其表姐贝拉一手策划的陷害。',
    details:
      '贝拉利用哈丽特对她的信任，伪造证据，操控证人，将自己的罪行完美嫁祸。整个上流社会在不知情的情况下成为了她的帮凶。',
    involvedParties: ['Harriet Listerwell', 'Bella', 'Duke Ashford'],
    status: 'ongoing',
    chapter: 1,
  },
  {
    id: 'sf2',
    caseNumber: 'CASE-002',
    title: '贝拉微笑背后的真相',
    classification: 'CONFIDENTIAL',
    date: '第七章',
    summary: '哈丽特发现贝拉长期以来的伪善面具，以及她操控社交圈的完整手段。',
    details:
      '通过一封意外截获的信件，哈丽特得以窥见贝拉真实的计划。那个永远挂在脸上的温柔微笑，不过是精心设计的武器。',
    involvedParties: ['Bella', 'Harriet Listerwell'],
    status: 'open',
    chapter: 7,
  },
  {
    id: 'sf3',
    caseNumber: 'CASE-003',
    title: '丑闻制造者的回归宣言',
    classification: 'RESTRICTED',
    date: '第八章',
    summary: '哈丽特正式宣告回归，决定以其人之道还治其人之身，展开复仇计划。',
    details:
      '这不再是一个受害者的哭诉，而是一个反派的宣言。哈丽特将用贝拉教会她的一切，亲手拆穿这个精心构建的谎言帝国。',
    involvedParties: ['Harriet Listerwell'],
    status: 'ongoing',
    chapter: 8,
  },
]

export const quotes: Quote[] = [
  {
    id: 'q1',
    text: '既然这个世界想要一个反派，那我就给他们一个永远忘不了的反派。',
    speaker: 'Harriet Listerwell',
    chapter: 8,
  },
  {
    id: 'q2',
    text: '我曾经以为善良是盾牌。现在我知道了——它只是靶子。',
    speaker: 'Harriet Listerwell',
    chapter: 9,
  },
  {
    id: 'q3',
    text: '真相从不需要辩解，它只需要时间。',
    speaker: 'Duke Ashford',
    chapter: 5,
  },
  {
    id: 'q4',
    text: '我从来不相信那些谣言。我了解你，哈丽特。',
    speaker: 'Lady Evelyn',
    chapter: 4,
  },
]
