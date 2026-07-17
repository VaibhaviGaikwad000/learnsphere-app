import { FiHeart } from "react-icons/fi";
export default function FavoriteButton({ active, onClick }) {
  return (
    <button
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      onClick={onClick}
      className={`grid h-9 w-9 place-items-center rounded-full bg-white/95 shadow-sm transition hover:scale-110 ${active ? "text-rose-500" : "text-slate-500"}`}
    >
      <FiHeart className={active ? "fill-current" : ""} />
    </button>
  );
}
