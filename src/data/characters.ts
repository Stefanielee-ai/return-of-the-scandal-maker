export interface Character {
  id: string;
  name: string;
  title: string;
  camp: 'protagonist' | 'villain' | 'neutral' | 'ally';
  description: string;
  traits: string[];
  quote: string;
}

export const characters: Character[] = [
  {
    id: 'harriet',
    name: 'Harriet Listerwell',
    title: 'The Scandal Maker',
    camp: 'protagonist',
    description: '被表姐陷害后觉醒，从受害者蜕变为复仇者',
    traits: ['智慧', '坚韧', '复仇'],
    quote: 'I was broken. Now I break the rules.'
  },
  {
    id: 'bella',
    name: 'Bella',
    title: 'The Betrayer',
    camp: 'villain',
    description: '陷害 Harriet 的表姐，贪婪且狡诈',
    traits: ['贪婪', '狡诈', '虚伪'],
    quote: 'Everything I did was for survival.'
  },
  {
    id: 'duke',
    name: 'Duke Ashford',
    title: 'The Witness',
    camp: 'neutral',
    description: '目睹一切的旁观者，立场摇摆',
    traits: ['观察', '犹豫', '理性'],
    quote: 'Truth is a luxury few can afford.'
  },
  {
    id: 'maid',
    name: 'Rose',
    title: 'The Loyal Maid',
    camp: 'ally',
    description: 'Harriet 唯一信任的女仆，忠诚的盟友',
    traits: ['忠诚', '勇敢', '机智'],
    quote: 'I will stand by you, no matter what.'
  }
];
