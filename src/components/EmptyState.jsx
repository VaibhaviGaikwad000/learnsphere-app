import { FiCompass } from "react-icons/fi";
export default function EmptyState({ onReset }) {
  return (
    <div className="grid min-h-72 place-items-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
      <div>
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-indigo-100 text-2xl text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
          <FiCompass />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
          No courses found
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Try another search or reset your filters to see every course.
        </p>
        <button
          onClick={onReset}
          className="mt-5 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
