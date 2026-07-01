import { NavLink } from 'react-router';
import { Home, BookOpen, BookA, Swords, FileText, Trophy, User, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { icon: Home, label: 'Asosiy', path: '/' },
  { icon: BookOpen, label: 'Video Darslar', path: '/learn' },
  { icon: BookA, label: "Lug'at", path: '/dictionary' },
  { icon: Swords, label: 'Bellashuv', path: '/battle' },
  { icon: FileText, label: 'Mock Imtihon', path: '/mock' },
  { icon: Trophy, label: 'Reyting', path: '/leaderboard' },
  { icon: User, label: 'Profil', path: '/profile' },
];

export default function NavigationRail() {
  return (
    <aside
      className="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 z-30"
      style={{
        width: 'var(--rail-width)',
        backgroundColor: 'var(--surface)',
        borderRight: 'var(--border-default)',
      }}
    >
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-md"
          style={{ background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))' }}
        >
          <img src="/icon-192.png" alt="PaPa.De" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-display font-extrabold text-base text-[var(--text-primary)]">PaPa.De</span>
          <span className="text-[11px] font-medium" style={{ color: 'var(--papa-orange-600)' }}>Sprachen mit Spaß</span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-150 text-sm',
                isActive
                  ? 'text-[var(--primary-700)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]'
              )
            }
            style={({ isActive }: { isActive: boolean }) =>
              isActive
                ? {
                    backgroundColor: 'var(--primary-100)',
                    borderLeft: '3px solid var(--primary-500)',
                  }
                : undefined
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom: Settings + Theme */}
      <div className="p-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
        <NavLink
          to="/settings"
          className={({ isActive }: { isActive: boolean }) =>
            cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-150 text-sm mb-3',
              isActive
                ? 'bg-[var(--primary-100)] text-[var(--primary-700)]'
                : 'text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]'
            )
          }
        >
          <Settings size={20} />
          <span>Sozlamalar</span>
        </NavLink>
        <ThemeToggle />
      </div>
    </aside>
  );
}
