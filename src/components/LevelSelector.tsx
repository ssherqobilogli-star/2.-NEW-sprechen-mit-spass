import { cn } from '../lib/utils';
import type { Level } from '../types';

interface LevelSelectorProps {
  selected: Level;
  onSelect: (level: Level) => void;
}

const levels: Level[] = ['A1', 'A2', 'B1', 'B2'];

export default function LevelSelector({ selected, onSelect }: LevelSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-150',
            selected === level
              ? 'text-white shadow-md'
              : 'bg-[var(--primary-50)] text-[var(--text-secondary)] hover:bg-[var(--primary-100)]'
          )}
          style={
            selected === level
              ? {
                  background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }
              : undefined
          }
        >
          {level}
        </button>
      ))}
    </div>
  );
}
