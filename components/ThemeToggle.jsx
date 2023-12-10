"use client";

import { useContext, useId } from "react";

import { ThemeContext } from "./ThemeProvider";
import Image from "next/image";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const id = useId();

  return (
    <div className="flex space-x-2">
      <Image
        alt="light theme image"
        className="mt-1"
        width={32}
        height={32}
        src="/light.svg"
      />
      <div className="toggle-switch">
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={toggleTheme}
          className="checkbox"
          id={id}
        />
        <label className="label" htmlFor={id}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <Image
        className="mt-1"
        alt="dark theme image"
        width={32}
        height={32}
        src="/dark.svg"
      />
    </div>
  );
};

export default ThemeToggle;
