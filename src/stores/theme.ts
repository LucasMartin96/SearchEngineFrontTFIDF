import { defineStore } from 'pinia'

export type ThemeType = 'scifi'

interface Theme {
  name: string
  description: string
  icon: string
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'scifi' as ThemeType,
    themes: {
      scifi: {
        name: 'Sci-Fi',
        description: 'Futuristic vibes',
        icon: '🚀'
      }
    } as Record<ThemeType, Theme>
  }),

  actions: {
    initTheme() {
      this.currentTheme = 'scifi'
    }
  }
})
