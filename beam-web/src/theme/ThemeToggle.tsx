import { motion } from 'framer-motion';
import { CloudMoon, Moon, Sun, type LucideIcon } from 'lucide-react';
import { THEMES, useTheme, type Theme } from './ThemeProvider';

const ICONS: Record<Theme, LucideIcon> = {
  light: Sun,
  dim: CloudMoon,
  dark: Moon,
};

export function ThemeToggle() {
  const { theme, setTheme, cycleTheme } = useTheme();
  const CurrentIcon = ICONS[theme];
  const currentLabel = THEMES.find((t) => t.id === theme)!.label;

  return (
    <>
      {/* sm and up: three-way segmented control with a sliding indicator */}
      <div
        role="radiogroup"
        aria-label="Color theme"
        className="hidden sm:flex items-center gap-0.5 rounded-full border border-line bg-surface p-1"
      >
        {THEMES.map(({ id, label }) => {
          const Icon = ICONS[id];
          const active = theme === id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={label}
              title={label}
              onClick={() => setTheme(id)}
              className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                active ? 'text-white' : 'text-slate hover:text-foreground'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="theme-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-cobalt to-cobalt-dark"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <Icon size={14} className="relative" />
            </button>
          );
        })}
      </div>

      {/* phones: one compact button that cycles Light -> Dim -> Lights out */}
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={`Theme: ${currentLabel}. Tap to switch.`}
        title={`Theme: ${currentLabel}`}
        className="sm:hidden flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-foreground"
      >
        <CurrentIcon size={16} />
      </button>
    </>
  );
}