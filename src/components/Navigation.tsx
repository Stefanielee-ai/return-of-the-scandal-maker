'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/data/translations';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/story', label: t.nav.story },
    { href: '/characters', label: t.nav.characters },
    { href: '/archives', label: t.nav.archives },
    { href: '/generator', label: t.nav.generator },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm z-50 border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-[#d4af37] text-xl font-bold">
            TSM
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-[#d4af37]'
                    : 'text-[#f5f0e8] hover:text-[#d4af37]'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-[#0a0a0a] text-[#d4af37] border border-[#d4af37] px-2 py-1"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="ko">한국어</option>
            </select>
          </div>

          <button
            className="md:hidden text-[#d4af37]"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#d4af37]/20">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 ${
                pathname === link.href ? 'text-[#d4af37]' : 'text-[#f5f0e8]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 py-3">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="w-full bg-[#0a0a0a] text-[#d4af37] border border-[#d4af37] px-2 py-1"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="ko">한국어</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
