import { useStore } from '../store/useStore';
import type { ThemeColor, ThemeMode } from '../store/useStore';

const colorOptions: { value: ThemeColor; label: string }[] = [
  { value: 'ocean', label: 'PaPa.De' },
  { value: 'forest', label: 'O\'rmon' },
];

const modeOptions: { value: ThemeMode; label: string }[] = [
  { value: 'light', label: 'Kun' },
  { value: 'dark', label: 'Tun' },
];

export default function ThemeToggle() {
  const { themeColor, themeMode, setThemeColor, setThemeMode } = useStore();

  return (
    <div className="space-y-2">
      <span className="text-xs font-medium text-[var(--text-secondary)]">Rang</span>
      <div className="flex gap-1 p-1 rounded-xl bg-[var(--surface-hover)]">
        {colorOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setThemeColor(opt.value)}
            className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
              themeColor === opt.value
                ? 'text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            style={
              themeColor === opt.value
                ? { background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))' }
                : undefined
            }
          >
            {opt.label}
          </button>
        ))}
      </div>

      <span className="text-xs font-medium text-[var(--text-secondary)] block mt-3">Mavzu</span>
      <div className="flex gap-1 p-1 rounded-xl bg-[var(--surface-hover)]">
        {modeOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setThemeMode(opt.value)}
            className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
              themeMode === opt.value
                ? 'text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            style={
              themeMode === opt.value
                ? { background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))' }
                : undefined
            }
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
