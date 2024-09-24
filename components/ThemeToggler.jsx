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
    <Button onClick={handleThemeToggle}>
      {theme === "light" ? (
        <FaMoon className="w-[25px] h-[25px]" />
      ) : (
        <FaSun className="w-[25px] h-[25px]" />
      )}
    </Button>
  );
};

export default ThemeToggler;
