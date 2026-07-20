import { useState } from "react";
import { FiArrowRight, FiClock, FiStar, FiUsers } from "react-icons/fi";
import CourseDetailsModal from "./CourseDetailsModal";
import FavoriteButton from "./FavoriteButton";
import { PRIMARY_BUTTON_CLASS, STATUS_STYLES } from "../utils/constants";
import { formatStudents } from "../utils/helpers";
export default function CourseCard({
  course,
  toggleFavorite,
  compact = false,
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <article
        className={`group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${compact ? "min-w-[285px]" : ""}`}
      >
      <div className="relative h-40 overflow-hidden">
        <img
          loading="lazy"
          src={course.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-700">
          {course.category}
        </div>
        <div className="absolute right-3 top-3">
          <FavoriteButton
            active={course.favorite}
            onClick={() => toggleFavorite(course.id)}
          />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[course.status]}`}
          >
            {course.status}
          </span>
          <span className="text-xs font-medium text-slate-500">
            {course.difficulty}
          </span>
        </div>
        <h3 className="mt-4 break-words font-display text-lg font-bold text-slate-900 dark:text-white">
          {course.title}
        </h3>
        {!compact && (
          <p className="mt-2 min-h-10 break-words text-sm leading-5 text-slate-500 dark:text-slate-400">
            {course.description}
          </p>
        )}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {course.instructor}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <FiClock />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <FiStar className="fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <FiUsers />
            {formatStudents(course.students)}
          </span>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex justify-between text-xs font-semibold text-slate-500">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              style={{ width: `${course.progress}%` }}
              className="h-full rounded-full bg-indigo-600 transition-all duration-700"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setDetailsOpen(true)}
          className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-indigo-600 px-4 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/40"
        >
          View Details
        </button>
        <button className={`mt-3 inline-flex w-full items-center justify-center gap-2 ${PRIMARY_BUTTON_CLASS}`}>
          {course.status === "Completed"
            ? "Review course"
            : course.status === "Locked"
              ? "Locked"
              : "Continue learning"}{" "}
          <FiArrowRight />
        </button>
      </div>
      </article>
      {detailsOpen && (
        <CourseDetailsModal
          course={course}
          onClose={() => setDetailsOpen(false)}
        />
      )}
    </>
  );
}
