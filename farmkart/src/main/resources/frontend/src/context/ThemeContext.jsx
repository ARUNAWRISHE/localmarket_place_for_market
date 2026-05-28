import { useCallback, useEffect, useMemo, useState } from 'react'
import { THEMES } from '../constants/theme.js'
import { ThemeContext } from './theme-context.js'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.LIGHT)

  useEffect(() => {
    const root = document.documentElement
    if (theme === THEMES.DARK) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
