"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

//components
import Nav from "./Nav";

import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light"); // Initialize theme to light

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle theme on button click
  };
  return (
    <header className="py-8 xl:py-12 text-primary ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-primary">Derrick.</h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button onClick={handleThemeToggle}>
            {theme === "light" ? (
              <FaSun className="w-[25px] h-[25px]" />
            ) : (
              <FaMoon className="w-[25px] h-[25px]" />
            )}
          </Button>
        </div>

        {/* mobile nav and hire me button*/}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
