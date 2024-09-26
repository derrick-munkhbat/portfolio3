// ThemeToggler.js

import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-mode", newTheme === "dark");
    console.log(`Theme changed to: ${newTheme}`);
  };

  return (
    <Button
      onClick={handleThemeToggle}
      className="bg-slate-600 hover:bg-slate-800 dark:bg-slate-300 dark:hover:bg-slate-200"
    >
      {theme === "light" ? (
        <FaMoon className="w-[15px] h-[15px] text-white dark:text-slate-800 " />
      ) : (
        <FaSun className="w-[15px] h-[15px] " />
      )}
    </Button>
  );
};

export default ThemeToggler;
