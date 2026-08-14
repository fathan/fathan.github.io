"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-(--border) bg-(--background)/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-(--foreground)"
        >
          F <span className="text-(--primary)">R</span>
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-(--foreground] transition-colors hover:text-(--primary)"
          >
            Home
          </Link>

          <Link
            href="about"
            className="text-sm font-medium text-(--foreground] transition-colors hover:text-(--primary)"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm font-medium text-(--foreground) transition-colors hover:text-(--primary)"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-(--foreground) transition-colors hover:text-(--primary)"
          >
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--card) text-(--foreground) transition-all hover:scale-105 hover:bg-(--border)"
        >
          {darkMode ? (
            // Sun icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            // Moon icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;