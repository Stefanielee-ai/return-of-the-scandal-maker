export interface Archive {
  id: string;
  caseNumber: string;
  classification: 'TOP SECRET' | 'CONFIDENTIAL';
  title: string;
  summary: string;
  details: string;
  status: 'OPEN' | 'CLOSED' | 'ONGOING';
}

export const archives: Archive[] = [
  {
    id: 'a1',
    caseNumber: 'SC-001',
    classification: 'TOP SECRET',
    title: 'Listerwell 家族陷害案',
    summary: 'Harriet Listerwell 被指控盗窃家族珠宝',
    details: '经调查，所有证据均为伪造，真凶为其表姐 Bella',
    status: 'CLOSED'
  },
  {
    id: 'a2',
    caseNumber: 'SC-002',
    classification: 'CONFIDENTIAL',
    title: 'Bella 的秘密交易',
    summary: 'Bella 与地下势力的不正当交易记录',
    details: '发现多笔可疑资金往来，涉及贵族圈层腐败',
    status: 'ONGOING'
  },
  {
    id: 'a3',
    caseNumber: 'SC-003',
    classification: 'TOP SECRET',
    title: 'Duke Ashford 的证词',
    summary: 'Duke 目睹陷害过程但选择沉默',
    details: '关键证人，掌握案件核心真相',
    status: 'OPEN'
  }
];
