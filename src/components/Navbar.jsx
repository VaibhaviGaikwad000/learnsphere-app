import { useState } from "react";
import { FiBookOpen, FiMenu, FiSearch, FiX } from "react-icons/fi";
import DarkModeToggle from "./DarkModeToggle";
const links = ["Home", "Explore Courses", "My Learning", "Profile"];
export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-indigo-600 text-white">
            <FiBookOpen />
          </span>
          LearnSphere
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <a
              key={link}
              href={index === 1 ? "#explore" : "#top"}
              className={`text-sm font-medium transition hover:text-indigo-600 ${index === 0 ? "text-indigo-600" : "text-slate-600 dark:text-slate-300"}`}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a
            aria-label="Search courses"
            href="#explore"
            className="grid h-9 w-9 place-items-center rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <FiSearch />
          </a>
          <DarkModeToggle theme={theme} setTheme={setTheme} />
          <div className="ml-1 grid h-8 w-8 place-items-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
        VG
          </div>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
            className="ml-1 grid h-9 w-9 place-items-center rounded-md lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-slate-100 px-4 py-3 shadow-lg lg:hidden dark:border-slate-800">
          {links.map((link, index) => (
            <a
              onClick={() => setOpen(false)}
              key={link}
              href={index === 1 ? "#explore" : "#top"}
              className="block rounded-md px-3 py-3 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-900"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
