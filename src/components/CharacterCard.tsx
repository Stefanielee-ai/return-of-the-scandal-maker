import type { Character } from '@/lib/types'
import clsx from 'clsx'

const factionColors: Record<Character['faction'], string> = {
  protagonist: 'border-scandal-gold text-scandal-gold',
  antagonist: 'border-scandal-red text-scandal-red-bright',
  neutral: 'border-scandal-cream/30 text-scandal-cream/60',
  ally: 'border-green-700 text-green-500',
}

const factionLabels: Record<Character['faction'], string> = {
  protagonist: 'PROTAGONIST',
  antagonist: 'ANTAGONIST',
  neutral: 'NEUTRAL',
  ally: 'ALLY',
}

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="group relative bg-scandal-charcoal border border-scandal-gold/20 hover:border-scandal-gold/60 transition-all duration-300 p-6 flex flex-col gap-4">
      {/* 阵营标签 */}
      <div className="flex items-center justify-between">
        <span className={clsx('font-mono text-xs tracking-widest border px-2 py-0.5', factionColors[character.faction])}>
          {factionLabels[character.faction]}
        </span>
        {character.nameKo && (
          <span className="text-scandal-muted text-xs font-mono">{character.nameKo}</span>
        )}
      </div>

      {/* 姓名 */}
      <div>
        <h2 className="font-serif font-bold text-xl text-scandal-cream group-hover:text-scandal-gold transition-colors">
          {character.name}
        </h2>
        <p className="font-body italic text-scandal-muted text-sm mt-0.5">{character.title}</p>
      </div>

      {/* 分割线 */}
      <div className="h-px bg-gradient-to-r from-scandal-gold/30 to-transparent" />

      {/* 描述 */}
      <p className="font-body text-scandal-cream/70 text-sm leading-relaxed">
        {character.description}
      </p>

      {/* 特征标签 */}
      <div className="flex flex-wrap gap-2">
        {character.traits.map((trait) => (
          <span
            key={trait}
            className="text-xs font-mono px-2 py-0.5 bg-scandal-black text-scandal-gold/70 border border-scandal-gold/20"
          >
            {trait}
          </span>
        ))}
      </div>

      {/* 经典台词 */}
      <blockquote className="border-l-2 border-scandal-red/50 pl-3 mt-auto">
        <p className="font-body italic text-scandal-cream/50 text-sm">
          &ldquo;{character.quote}&rdquo;
        </p>
      </blockquote>
    </div>
  )
}
