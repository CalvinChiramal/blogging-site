"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const getFromLocalStorage = () =>
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("DARK_THEME"));

  const [isDarkTheme, setIsDarkTheme] = useState(
    getFromLocalStorage() || false
  );

  const toggleTheme = () => setIsDarkTheme(isDarkTheme => !isDarkTheme);

  useEffect(() => {
    localStorage.setItem("DARK_THEME", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`${isDarkTheme ? "dark" : undefined}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
