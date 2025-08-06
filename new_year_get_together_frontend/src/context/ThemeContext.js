import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

/**
 * PUBLIC_INTERFACE
 * ThemeProvider gives access to theme and toggleTheme callback.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'festive' : 'light'));

  // Festive mode uses a deeper red scheme (CSS in App.css)
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useTheme hook to consume theme context.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
