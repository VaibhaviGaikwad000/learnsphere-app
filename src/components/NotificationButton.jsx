import { FiBell } from "react-icons/fi";
import { ICON_BUTTON_CLASS } from "../utils/constants";

export default function NotificationButton({ unreadCount = 3, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${unreadCount} unread notifications`}
      className={`relative ${ICON_BUTTON_CLASS}`}
    >
      <FiBell />
      {unreadCount > 0 && (
        <span className="absolute -right-1 -top-1 grid min-w-4 h-4 place-items-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold leading-none text-white">
          {unreadCount}
        </span>
      )}
    </button>
  );
}
