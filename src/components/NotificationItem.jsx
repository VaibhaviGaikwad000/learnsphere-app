export default function NotificationItem({ notification }) {
  return (
    <article
      className={`flex gap-3 px-4 py-3 ${notification.unread ? "bg-indigo-50/60 dark:bg-indigo-950/30" : "bg-white dark:bg-slate-950"}`}
    >
      <span
        aria-hidden="true"
        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${notification.unread ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"}`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-sm font-semibold text-slate-900 dark:text-white">
            {notification.title}
          </h3>
          <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
            {notification.time}
          </span>
        </div>
        <p className="mt-1 break-words text-sm text-slate-600 dark:text-slate-300">
          {notification.message}
        </p>
        <span
          className={`mt-2 inline-block text-xs font-medium ${notification.unread ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-slate-400"}`}
        >
          {notification.unread ? "Unread" : "Read"}
        </span>
      </div>
    </article>
  );
}
