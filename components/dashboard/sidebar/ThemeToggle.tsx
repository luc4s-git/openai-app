'use client';

import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const themes = { light: 'light', dark: 'dark' };

export default function ThemeToggle() {
  const [theme, setTheme] = useState(themes.light);

  const handleThemeChange = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button className="btn btn-sm btn-outline" onClick={handleThemeChange}>
      <label className="swap swap-rotate">
        {theme === themes.light ? (
          <FaMoon className="h-3 w-3" />
        ) : (
          <FaSun className="h-3 w-3" />
        )}
      </label>
    </button>
  );
}
