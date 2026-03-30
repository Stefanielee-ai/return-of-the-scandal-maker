'use client';

import { timeline } from '@/data/timeline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StoryPage() {
  const { t } = useLanguage();
  
  const typeColors = {
    BETRAYAL: 'bg-[#8b0000]',
    AWAKENING: 'bg-[#d4af37]',
    REVENGE: 'bg-[#8b0000]',
    REVEAL: 'bg-[#d4af37]',
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-12 text-center">
          {t.story.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border-2 border-[#d4af37] p-6">
            <h2 className="text-2xl font-bold text-[#d4af37] mb-4">{t.story.harriet}</h2>
            <p className="text-[#f5f0e8]">{t.story.harrietDesc}</p>
          </div>
          <div className="border-2 border-[#8b0000] p-6">
            <h2 className="text-2xl font-bold text-[#8b0000] mb-4">{t.story.bella}</h2>
            <p className="text-[#f5f0e8]">{t.story.bellaDesc}</p>
          </div>
        </div>

        <div className="space-y-8">
          {timeline.map((event) => (
            <div key={event.id} className="border-l-4 border-[#d4af37] pl-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`${typeColors[event.type]} text-[#f5f0e8] px-3 py-1 text-sm font-mono`}>
                  {event.type}
                </span>
                <span className="text-[#d4af37] font-mono">Chapter {event.chapter}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#f5f0e8] mb-2">{event.title}</h3>
              <p className="text-[#f5f0e8]/80">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
