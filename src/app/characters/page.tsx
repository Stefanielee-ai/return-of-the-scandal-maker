'use client';

import { characters } from '@/data/characters';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CharactersPage() {
  const { t } = useLanguage();
  
  const campColors = {
    protagonist: 'border-[#d4af37]',
    villain: 'border-[#8b0000]',
    neutral: 'border-[#f5f0e8]',
    ally: 'border-[#d4af37]',
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-12 text-center">
          {t.characters.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((char) => (
            <div
              key={char.id}
              className={`border-2 ${campColors[char.camp]} p-6 hover:bg-[#f5f0e8]/5 transition-colors`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#d4af37]">{char.name}</h2>
                  <p className="text-[#f5f0e8]/70 italic">{char.title}</p>
                </div>
                <span className="text-sm font-mono text-[#d4af37] border border-[#d4af37] px-2 py-1">
                  {t.characters.camps[char.camp]}
                </span>
              </div>
              <p className="text-[#f5f0e8] mb-4">{char.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {char.traits.map((trait) => (
                  <span key={trait} className="bg-[#d4af37]/20 text-[#d4af37] px-2 py-1 text-sm">
                    {trait}
                  </span>
                ))}
              </div>
              <blockquote className="text-[#f5f0e8]/70 italic border-l-2 border-[#d4af37] pl-4">
                "{char.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
