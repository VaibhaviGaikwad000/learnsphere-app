export default function LoadingSpinner() {
  return (
    <div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Loading courses"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="h-40 animate-pulse bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-10 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      ))}
    </div>
  );
}
