import { FiClock, FiStar, FiUsers, FiX } from "react-icons/fi";
import {
  ICON_BUTTON_CLASS,
  PRIMARY_BUTTON_CLASS,
  STATUS_STYLES,
} from "../utils/constants";
import { formatStudents } from "../utils/helpers";

export default function CourseDetailsModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-details-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-2xl dark:bg-slate-900"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
          <h2
            id="course-details-title"
            className="font-display text-lg font-bold text-slate-900 dark:text-white"
          >
            Course Details
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close course details"
            className={ICON_BUTTON_CLASS}
          >
            <FiX />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <img
            src={course.image}
            alt=""
            className="h-48 w-full rounded-lg object-cover sm:h-64"
          />
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {course.category}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[course.status]}`}
            >
              {course.status}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {course.difficulty}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">
            {course.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {course.description}
          </p>
          <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">
            Instructor: {course.instructor}
          </p>

          <div className="mt-5 grid gap-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-300 sm:grid-cols-2">
            <span className="flex items-center gap-2">
              <FiClock className="text-indigo-600" /> {course.duration}
            </span>
            <span className="flex items-center gap-2">
              <FiStar className="fill-amber-400 text-amber-400" /> {course.rating} rating
            </span>
            <span className="flex items-center gap-2">
              <FiUsers className="text-indigo-600" /> {formatStudents(course.students)} students
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {course.price}
            </span>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                style={{ width: `${course.progress}%` }}
                className="h-full rounded-full bg-indigo-600"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`mt-6 w-full ${PRIMARY_BUTTON_CLASS}`}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
