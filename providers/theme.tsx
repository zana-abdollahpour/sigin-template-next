"use client";

import { createContext, use, useCallback, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

const DEFAULT_THEME = "light";

const ThemeContext = createContext<ThemeContext | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    return (document.documentElement.dataset.theme as Theme) || DEFAULT_THEME;
  });

  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      const newTheme = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = newTheme;
      return newTheme;
    });
  }, []);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider component");
  }

  return context;
}
