import { Flame } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function StreakCounter() {
  const { user } = useStore();
  const streak = user?.streak || 0;

  return (
    <div
      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${
        streak >= 30 ? 'ring-2' : ''
      }`}
      style={{
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        color: 'var(--warning)',
        boxShadow: streak >= 30 ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none',
      }}
    >
      <Flame
        size={16}
        fill="currentColor"
        className={streak >= 7 ? 'streak-pulse' : ''}
      />
      <span>{streak}</span>
      <span className="text-[10px] font-medium opacity-80">kun</span>
    </div>
  );
}
