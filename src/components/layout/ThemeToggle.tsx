import { useUiStore } from '../../stores/useUiStore'

export function ThemeToggle() {
  const theme = useUiStore((state) => state.theme)
  const toggleTheme = useUiStore((state) => state.toggleTheme)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--page-surface)',
        color: 'var(--page-text)',
        borderColor: 'var(--page-border)',
        boxShadow: 'var(--page-shadow)',
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
    </button>
  )
}
