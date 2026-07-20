import { FiMoon, FiSun } from "react-icons/fi";
import { ICON_BUTTON_CLASS } from "../utils/constants";
export default function DarkModeToggle({ theme, setTheme }) {
  const dark = theme === "dark";
  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={ICON_BUTTON_CLASS}
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
