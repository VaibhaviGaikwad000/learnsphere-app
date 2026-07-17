export default function StatsCard({ icon, value, label, accent }) {
  return (
    <article className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <span
        className={`grid h-11 w-11 place-items-center rounded-md ${accent}`}
      >
        {icon}
      </span>
      <div>
        <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          {value}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    </article>
  );
}
