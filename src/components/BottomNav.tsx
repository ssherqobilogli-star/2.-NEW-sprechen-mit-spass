import { NavLink } from 'react-router';
import { Home, BookOpen, BookA, Swords, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: Home, label: 'Asosiy', path: '/' },
  { icon: BookOpen, label: 'Darslar', path: '/learn' },
  { icon: BookA, label: "Lug'at", path: '/dictionary' },
  { icon: Swords, label: 'Jang', path: '/battle' },
  { icon: User, label: 'Profil', path: '/profile' },
];

export default function BottomNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 pb-safe"
      style={{
        height: 'var(--bottom-nav-height)',
        backgroundColor: 'var(--surface)',
        borderTop: 'var(--border-default)',
        boxShadow: 'var(--shadow-nav)',
      }}
    >
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              cn(
                'flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-150',
                isActive ? 'text-[var(--primary-500)]' : 'text-[var(--text-muted)]'
              )
            }
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <item.icon
                  size={24}
                  className={isActive ? 'scale-110 transition-transform' : ''}
                />
                <span className="text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
