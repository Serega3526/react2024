import { ReactNode, useState } from 'react';
import { ThemeContext } from './contextTheme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const change = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
