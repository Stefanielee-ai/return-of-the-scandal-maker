'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { characters } from '@/data/characters';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const randomQuote = characters[Math.floor(Math.random() * characters.length)].quote;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-[#d4af37] text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {t.home.title}
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-[#f5f0e8] text-center mb-12 italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {t.home.subtitle}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          href="/story"
          className="px-8 py-3 bg-[#d4af37] text-[#0a0a0a] font-bold hover:bg-[#f5f0e8] transition-colors"
        >
          {t.home.enterStory}
        </Link>
        <Link
          href="/characters"
          className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-bold hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors"
        >
          {t.home.viewCharacters}
        </Link>
      </motion.div>

      <motion.blockquote
        className="text-center text-[#f5f0e8]/70 italic max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        "{randomQuote}"
      </motion.blockquote>
    </main>
  );
}
