import { FiMoon, FiSun } from "react-icons/fi";
export default function DarkModeToggle({ theme, setTheme }) {
  const dark = theme === "dark";
  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-md text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
