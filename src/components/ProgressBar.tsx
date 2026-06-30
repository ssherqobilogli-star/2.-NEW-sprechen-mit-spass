import { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  height?: 'h-2' | 'h-3';
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export default function ProgressBar({ progress, height = 'h-2', showLabel = true, label, className = '' }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setWidth(Math.min(100, Math.max(0, progress)));
    });
    return () => cancelAnimationFrame(timer);
  }, [progress]);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[var(--text-secondary)]">{label}</span>
          <span className="text-lg font-extrabold font-display" style={{ color: 'var(--primary-500)' }}>
            {Math.round(progress)}%
          </span>
        </div>
      )}
      <div
        className={`w-full ${height} rounded-full overflow-hidden`}
        style={{ backgroundColor: 'var(--primary-100)' }}
      >
        <div
          className={`${height} rounded-full`}
          style={{
            width: `${width}%`,
            background: `linear-gradient(135deg, var(--primary-500), var(--primary-700))`,
            transition: 'width 800ms cubic-bezier(0, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  );
}
