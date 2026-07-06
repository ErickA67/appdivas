import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryText: string;
  border: string;
  bannerBg: string;
  headerBg: string;
}

export const lightTheme: Theme = {
  mode: 'light',
  background: '#FFF5F8',
  surface: '#ffffff',
  text: '#2B1B22',
  textMuted: '#7A5A66',
  primary: '#C0185C',
  primaryText: '#ffffff',
  border: '#eeeeee',
  bannerBg: '#fff0f5',
  headerBg: '#C0185C',
};

export const darkTheme: Theme = {
  mode: 'dark',
  background: '#1a1014',
  surface: '#2a1820',
  text: '#f5e6ec',
  textMuted: '#b89aa6',
  primary: '#E91E63',
  primaryText: '#ffffff',
  border: '#3a2530',
  bannerBg: '#2a1820',
  headerBg: '#8a1144',
};

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const theme = mode === 'dark' ? darkTheme : lightTheme;
  const toggleTheme = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));
  return (
    <ThemeContext.Provider value={{ theme, isDark: mode === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
