import { FiSearch, FiX } from "react-icons/fi";
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        aria-label="Search courses"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search courses"
        className="w-full rounded-md border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-800 shadow-sm transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      {value && (
        <button
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
        >
          <FiX />
        </button>
      )}
    </div>
  );
}
