"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("mate-theme") as Theme | null
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches
    const initialTheme = storedTheme ?? (systemPrefersLight ? "light" : "dark")
    setThemeState(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("mate-theme", theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setThemeState((current) => (current === "dark" ? "light" : "dark")),
      setTheme: (next: Theme) => setThemeState(next),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
