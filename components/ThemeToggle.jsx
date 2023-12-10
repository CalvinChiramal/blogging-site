"use client";

import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => toggleTheme()}>
      {isDarkTheme ? "To Light" : "To dark"}
    </button>
  );
};

export default ThemeToggle;
