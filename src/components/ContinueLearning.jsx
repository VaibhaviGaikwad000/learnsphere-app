import CourseCard from "./CourseCard";
import { PAGE_PADDING } from "../utils/constants";
export default function ContinueLearning({ courses, toggleFavorite }) {
  return (
    <section
      id="learning"
      className={`scroll-mt-20 bg-white ${PAGE_PADDING} py-16 dark:bg-slate-900/40`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              KEEP GOING
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
              Continue learning
            </h2>
          </div>
          <a
            href="#explore"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all
          </a>
        </div>
        <div className="flex snap-x gap-5 overflow-x-auto pb-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              compact
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
