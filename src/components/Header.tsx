import { useStore } from '../store/useStore';
import StreakCounter from './StreakCounter';
import { Zap, User } from 'lucide-react';

export default function Header() {
  const { user, selectedLevel } = useStore();

  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between px-4 lg:px-6"
      style={{
        height: 'var(--header-height)',
        backgroundColor: 'rgba(var(--surface-rgb, 255, 255, 255), 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: 'var(--border-default)',
      }}
    >
      {/* Left: Logo + Level badge (mobile only) */}
      <div className="flex items-center gap-3 lg:hidden">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm"
          style={{ background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))' }}
        >
          S
        </div>
        <div
          className="px-2 py-1 rounded-md text-xs font-bold"
          style={{
            backgroundColor: 'var(--primary-100)',
            color: 'var(--primary-600)',
          }}
        >
          {selectedLevel}
        </div>
      </div>

      {/* Right: XP + Streak + Avatar */}
      <div className="flex items-center gap-3 ml-auto">
        {/* XP Badge */}
        <div
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold"
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            color: 'var(--warning)',
          }}
        >
          <Zap size={16} fill="currentColor" />
          <span>{user?.xp || 0} XP</span>
        </div>

        {/* Streak */}
        <StreakCounter />

        {/* Avatar */}
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden transition-transform hover:scale-105"
          style={{ border: '2px solid var(--primary-500)' }}
        >
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt="Profil" className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)' }}
            >
              <User size={16} />
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
