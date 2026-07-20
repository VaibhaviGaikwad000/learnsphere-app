import { FiBell } from "react-icons/fi";
import NotificationItem from "./NotificationItem";

const notifications = [
  {
    id: 1,
    title: "New course available",
    message: "Advanced React Patterns has been added to your learning path.",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Lesson reminder",
    message: "Continue your JavaScript Fundamentals course where you left off.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Achievement unlocked",
    message: "You completed your 7-day learning streak.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 4,
    title: "Course update",
    message: "New resources were added to UI/UX Design Essentials.",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 5,
    title: "Welcome to LearnSphere",
    message: "Explore courses tailored to your learning goals.",
    time: "3 days ago",
    unread: false,
  },
];

export default function NotificationPanel({ onClose }) {
  return (
    <section
      aria-label="Notifications"
      className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:absolute sm:inset-x-auto sm:right-0 sm:top-12 sm:w-96"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <FiBell className="text-indigo-600" />
          <h2 className="font-semibold text-slate-900 dark:text-white">
            Notifications
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Close
        </button>
      </div>

      <div className="max-h-[calc(100vh-6rem)] divide-y divide-slate-100 overflow-y-auto dark:divide-slate-800 sm:max-h-96">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </section>
  );
}
