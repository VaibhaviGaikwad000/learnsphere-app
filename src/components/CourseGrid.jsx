import CourseCard from "./CourseCard";
import EmptyState from "./EmptyState";
import ShowMoreButton from "./ShowMoreButton";
export default function CourseGrid({
  courses,
  showAll,
  onToggleShow,
  toggleFavorite,
  resetFilters,
}) {
  if (!courses.length) return <EmptyState onReset={resetFilters} />;
  const visible = showAll ? courses : courses.slice(0, 6);
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      {courses.length > 6 && (
        <ShowMoreButton
          expanded={showAll}
          onClick={onToggleShow}
          remaining={courses.length - 6}
        />
      )}
    </>
  );
}
