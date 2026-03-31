import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

type UiState = {
  theme: ThemeMode
  mobileNavOpen: boolean
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
  setMobileNavOpen: (mobileNavOpen: boolean) => void
}

export const useUiStore = create<UiState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      mobileNavOpen: false,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
      setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
    }),
    {
      name: 'landingforge-ui',
      partialize: ({ theme }) => ({ theme }),
    },
  ),
)
