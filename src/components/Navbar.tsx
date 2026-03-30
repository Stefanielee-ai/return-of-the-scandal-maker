'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/story', label: 'STORY' },
  { href: '/characters', label: 'CHARACTERS' },
  { href: '/archives', label: 'ARCHIVES' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-scandal-black/90 backdrop-blur-sm border-b border-scandal-gold/20">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif font-bold text-scandal-gold text-sm tracking-widest hover:text-scandal-gold-light transition-colors">
          TSM
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'font-mono text-xs tracking-widest transition-colors',
                  pathname === link.href
                    ? 'text-scandal-gold border-b border-scandal-gold pb-0.5'
                    : 'text-scandal-cream/60 hover:text-scandal-cream'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-scandal-cream/60 hover:text-scandal-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-scandal-charcoal border-b border-scandal-gold/20">
          <ul className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'font-mono text-xs tracking-widest block py-1',
                    pathname === link.href
                      ? 'text-scandal-gold'
                      : 'text-scandal-cream/60'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
