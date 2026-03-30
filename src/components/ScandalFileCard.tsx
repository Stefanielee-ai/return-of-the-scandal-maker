'use client'

import { useState } from 'react'
import type { ScandalFile } from '@/lib/types'
import clsx from 'clsx'
import { ChevronDown, ChevronUp, Lock } from 'lucide-react'

const classificationStyle: Record<ScandalFile['classification'], string> = {
  'TOP SECRET': 'text-scandal-red-bright border-scandal-red',
  CONFIDENTIAL: 'text-scandal-gold border-scandal-gold',
  RESTRICTED: 'text-scandal-cream/60 border-scandal-cream/40',
}

const statusLabel: Record<ScandalFile['status'], string> = {
  open: '⬤ OPEN',
  closed: '⬤ CLOSED',
  ongoing: '⬤ ONGOING',
}

const statusColor: Record<ScandalFile['status'], string> = {
  open: 'text-scandal-red-bright',
  closed: 'text-scandal-muted',
  ongoing: 'text-scandal-gold',
}

export default function ScandalFileCard({ file }: { file: ScandalFile }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-scandal-charcoal border border-scandal-gold/20 hover:border-scandal-gold/40 transition-all duration-300 font-mono">
      {/* 文件头 */}
      <div className="p-4 border-b border-scandal-gold/10 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-scandal-muted text-xs">{file.caseNumber}</span>
          <h3 className="font-serif font-bold text-scandal-cream text-base">{file.title}</h3>
          <span className="text-xs text-scandal-muted">{file.date}</span>
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          {/* 机密级别印章 */}
          <span className={clsx('stamp text-xs', classificationStyle[file.classification])}>
            {file.classification}
          </span>
          {/* 状态 */}
          <span className={clsx('text-xs', statusColor[file.status])}>
            {statusLabel[file.status]}
          </span>
        </div>
      </div>

      {/* 摘要 */}
      <div className="p-4">
        <p className="text-scandal-cream/70 text-sm leading-relaxed">{file.summary}</p>

        {/* 展开详情按钮 */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-scandal-gold/60 hover:text-scandal-gold text-xs transition-colors"
        >
          <Lock size={12} />
          {expanded ? 'HIDE DETAILS' : 'VIEW CLASSIFIED DETAILS'}
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>

        {/* 详情内容 */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-scandal-gold/10">
            <p className="text-scandal-cream/60 text-sm leading-relaxed mb-4">{file.details}</p>
            <div>
              <span className="text-scandal-muted text-xs">INVOLVED PARTIES:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {file.involvedParties.map((party) => (
                  <span
                    key={party}
                    className="text-xs px-2 py-0.5 border border-scandal-gold/30 text-scandal-gold/70"
                  >
                    {party}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
