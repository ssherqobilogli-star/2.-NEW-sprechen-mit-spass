import { useState } from 'react';
import { motion } from 'framer-motion';
import AudioButton from './AudioButton';

interface FlipCardProps {
  german: string;
  article?: 'der' | 'die' | 'das';
  uzbek: string;
  example?: string;
  exampleUz?: string;
  pronunciation?: string;
}

export default function FlipCard({ german, article, uzbek, example, exampleUz, pronunciation }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-60 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped); }}
      aria-label="So'zni aylantirish uchun bosing"
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden card flex flex-col items-center justify-center text-center p-6">
          <div className="absolute top-4 right-4" onClick={(e) => e.stopPropagation()}>
            <AudioButton text={`${article ? article + ' ' : ''}${german}`} />
          </div>
          {article && (
            <span className="text-xs font-bold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
              {article}
            </span>
          )}
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-display">{german}</h2>
          {pronunciation && (
            <p className="font-phonetic text-[15px] text-[var(--text-muted)] mt-2">
              /{pronunciation}/
            </p>
          )}
          <p className="text-xs text-[var(--text-muted)] mt-4">Aylantirish uchun bosing</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden card flex flex-col items-center justify-center text-center p-6"
          style={{
            transform: 'rotateY(180deg)',
            borderColor: 'var(--primary-500)',
            borderWidth: '2px',
            backgroundColor: 'var(--primary-50)',
          }}
        >
          <h2 className="text-xl font-bold font-display" style={{ color: 'var(--primary-600)' }}>
            {uzbek}
          </h2>
          {example && (
            <div className="mt-3 p-3 rounded-lg text-sm italic text-[var(--text-secondary)] bg-[var(--surface)] max-w-full">
              "{example}"
            </div>
          )}
          {exampleUz && (
            <div className="mt-2 p-3 rounded-lg text-sm text-[var(--text-muted)] bg-[var(--surface)] max-w-full">
              {exampleUz}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
