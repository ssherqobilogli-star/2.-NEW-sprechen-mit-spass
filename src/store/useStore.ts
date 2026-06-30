import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Level } from '../types';

export type ThemeColor = 'ocean' | 'forest';
export type ThemeMode = 'light' | 'dark';

interface AppState {
  user: User | null;
  themeColor: ThemeColor;
  themeMode: ThemeMode;
  selectedLevel: Level;
  xpPopup: { amount: number; visible: boolean };

  setUser: (user: User | null) => void;
  setThemeColor: (color: ThemeColor) => void;
  setThemeMode: (mode: ThemeMode) => void;
  setSelectedLevel: (level: Level) => void;
  addXp: (amount: number) => void;
  showXpPopup: (amount: number) => void;
  hideXpPopup: () => void;
}

function applyTheme(color: ThemeColor, mode: ThemeMode) {
  const html = document.documentElement;
  html.setAttribute('data-color', color);
  if (mode === 'dark') {
    html.setAttribute('data-theme', 'dark');
    html.classList.add('dark');
  } else {
    html.removeAttribute('data-theme');
    html.classList.remove('dark');
  }
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: {
        id: 'demo-user',
        telegramId: '12345678',
        username: 'learner',
        firstName: 'Nemis',
        lastName: 'O\'rganuvchi',
        avatarUrl: '',
        level: 'A1',
        xp: 245,
        streak: 5,
        maxStreak: 12,
        wordsLearned: 47,
        totalWords: 360,
        isPro: false,
      } as User,
      themeColor: 'ocean',
      themeMode: 'light',
      selectedLevel: 'A1',
      xpPopup: { amount: 0, visible: false },

      setUser: (user) => set({ user }),

      setThemeColor: (color) => {
        set((state) => {
          applyTheme(color, state.themeMode);
          return { themeColor: color };
        });
      },

      setThemeMode: (mode) => {
        set((state) => {
          applyTheme(state.themeColor, mode);
          return { themeMode: mode };
        });
      },

      setSelectedLevel: (selectedLevel) => set({ selectedLevel }),

      addXp: (amount) =>
        set((state) => ({
          user: state.user ? { ...state.user, xp: state.user.xp + amount } : null,
          xpPopup: { amount, visible: true },
        })),

      showXpPopup: (amount) => set({ xpPopup: { amount, visible: true } }),

      hideXpPopup: () => set({ xpPopup: { amount: 0, visible: false } }),
    }),
    {
      name: 'sprechen-mit-spass-storage',
      partialize: (state) => ({
        themeColor: state.themeColor,
        themeMode: state.themeMode,
        selectedLevel: state.selectedLevel,
        user: state.user,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.themeColor, state.themeMode);
        }
      },
    }
  )
);
