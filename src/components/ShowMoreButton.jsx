export default function ShowMoreButton({ expanded, onClick, remaining }) {
  return (
    <div className="mt-10 text-center">
      <button
        onClick={onClick}
        className="rounded-md border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 dark:border-indigo-900 dark:bg-slate-900 dark:text-indigo-300 dark:hover:bg-slate-800"
      >
        {expanded ? "Show less" : `Show ${remaining} more courses`}
      </button>
    </div>
  );
}
