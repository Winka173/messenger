"use client";
import React, { createContext, useState, useContext } from "react";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

type theme = "dark" | "light";

interface ThemeContext {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<theme>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be inside themeContextProvider");
  }

  return context;
}
