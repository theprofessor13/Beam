import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dim' | 'dark';

export const THEMES: { id: Theme; label: string }[] = [
  { id: 'light', label: 'Light' },
  { id: 'dim', label: 'Dim' },
  { id: 'dark', label: 'Lights out' },
];

const STORAGE_KEY = 'beam-theme';
const META_COLORS: Record<Theme, string> = { light: '#F6F7FB', dim: '#15202B', dark: '#000000' };

const isTheme = (v: unknown): v is Theme => v === 'light' || v === 'dim' || v === 'dark';

/** First visit: follow the device (dark -> Dim, the softer option). Afterwards: the saved choice. */
function readInitialTheme(): Theme {
  // index.html sets data-theme before React loads (prevents a white flash), so trust it first.
  const fromDom = document.documentElement.dataset.theme;
  if (isTheme(fromDom)) return fromDom;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isTheme(saved)) return saved;
  } catch {
    /* storage can be unavailable (private mode, sandboxed iframe) */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dim' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle('dark', theme !== 'light'); // powers Tailwind's dark: variant
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    window.setTimeout(() => root.classList.remove('theme-transition'), 400);
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const cycleTheme = useCallback(() => {
    const index = THEMES.findIndex((t) => t.id === theme);
    setTheme(THEMES[(index + 1) % THEMES.length].id);
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, setTheme, cycleTheme }), [theme, setTheme, cycleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}