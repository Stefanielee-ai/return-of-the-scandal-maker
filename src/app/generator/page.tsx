'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GeneratorPage() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const headlines = [
    'SHOCKING SCANDAL EXPOSED!',
    'BETRAYAL IN HIGH SOCIETY!',
    'THE TRUTH REVEALED!',
    'SCANDAL OF THE CENTURY!',
  ];

  const generateScandal = () => {
    if (!name.trim() || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const headline = headlines[Math.floor(Math.random() * headlines.length)];
    
    ctx.fillStyle = '#f5f0e8';
    ctx.fillRect(0, 0, 800, 600);
    
    ctx.fillStyle = '#0a0a0a';
    ctx.font = 'bold 48px serif';
    ctx.textAlign = 'center';
    ctx.fillText('THE SCANDAL TIMES', 400, 80);
    
    ctx.font = '20px serif';
    ctx.fillText('Est. 1885 • Price: 2 Pence', 400, 110);
    
    ctx.strokeStyle = '#0a0a0a';
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 140, 700, 400);
    
    ctx.font = 'bold 36px serif';
    ctx.fillText(headline, 400, 220);
    
    ctx.font = 'bold 56px serif';
    ctx.fillStyle = '#8b0000';
    ctx.fillText(name.toUpperCase(), 400, 300);
    
    ctx.fillStyle = '#0a0a0a';
    ctx.font = '24px serif';
    ctx.fillText('Caught in Scandalous Affair!', 400, 360);
    ctx.fillText('Society in Shock!', 400, 400);
    
    ctx.font = 'italic 18px serif';
    ctx.fillText('"This changes everything!" - Anonymous Source', 400, 480);

    setGenerated(true);
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `scandal-${name}.png`;
    a.click();
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-4 text-center">
          {t.generator.title}
        </h1>
        <p className="text-xl text-[#f5f0e8]/70 mb-12 text-center">
          {t.generator.subtitle}
        </p>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.generator.inputName}
            className="px-4 py-3 bg-[#0a0a0a] border-2 border-[#d4af37] text-[#f5f0e8] text-center text-xl"
            maxLength={30}
          />
          <button
            onClick={generateScandal}
            className="px-8 py-3 bg-[#d4af37] text-[#0a0a0a] font-bold hover:bg-[#f5f0e8] transition-colors"
          >
            {t.generator.generate}
          </button>
        </div>

        <div className="flex justify-center mb-8">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="border-2 border-[#d4af37] max-w-full h-auto"
          />
        </div>

        {generated && (
          <div className="flex justify-center gap-4">
            <button
              onClick={downloadImage}
              className="px-6 py-2 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors"
            >
              {t.generator.download}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
