import { CATEGORIES } from "../utils/constants";
export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${active === category ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
