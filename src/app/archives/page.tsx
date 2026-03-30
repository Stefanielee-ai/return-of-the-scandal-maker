'use client';

import { useState } from 'react';
import { archives } from '@/data/archives';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ArchivesPage() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const classColors = {
    'TOP SECRET': 'text-[#8b0000]',
    'CONFIDENTIAL': 'text-[#d4af37]',
  };

  const statusColors = {
    OPEN: 'bg-[#d4af37]',
    CLOSED: 'bg-[#8b0000]',
    ONGOING: 'bg-[#f5f0e8]',
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-12 text-center">
          {t.archives.title}
        </h1>

        <div className="space-y-6">
          {archives.map((archive) => (
            <div
              key={archive.id}
              className="border-2 border-[#d4af37] p-6 bg-[#0a0a0a] hover:bg-[#f5f0e8]/5 transition-colors cursor-pointer"
              onClick={() => setExpanded(expanded === archive.id ? null : archive.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-mono text-[#d4af37] text-sm mb-1">
                    CASE #{archive.caseNumber}
                  </p>
                  <h2 className="text-2xl font-bold text-[#f5f0e8]">{archive.title}</h2>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`${classColors[archive.classification]} font-mono text-sm font-bold`}>
                    {archive.classification}
                  </span>
                  <span className={`${statusColors[archive.status]} text-[#0a0a0a] px-2 py-1 text-xs font-mono`}>
                    {archive.status}
                  </span>
                </div>
              </div>

              <p className="text-[#f5f0e8]/80 mb-4">{archive.summary}</p>

              {expanded === archive.id && (
                <div className="border-t border-[#d4af37]/30 pt-4 mt-4">
                  <p className="text-[#f5f0e8]">{archive.details}</p>
                </div>
              )}

              <p className="text-[#d4af37] text-sm mt-4">
                {expanded === archive.id ? `▲ ${t.archives.collapse}` : `▼ ${t.archives.expand}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
