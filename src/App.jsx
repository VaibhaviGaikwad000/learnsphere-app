import { useEffect, useMemo, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ContinueLearning from "./components/ContinueLearning";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/footer";
import useLocalStorage from "./hooks/useLocalStorage";
import courses from "./data/courses";

function App() {
  const [theme, setTheme] = useLocalStorage(
    "learnsphere-theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );
  const [favorites, setFavorites] = useLocalStorage(
    "learnsphere-favorites",
    courses.filter((course) => course.favorite).map((course) => course.id),
  );
  const [category, setCategory] = useLocalStorage(
    "learnsphere-category",
    "All",
  );
  const [query, setQuery] = useLocalStorage("learnsphere-query", "");
  const [sortBy, setSortBy] = useState("newest");
  const [showAll, setShowAll] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  useEffect(() => {
    const listener = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  const enrichedCourses = useMemo(
    () =>
      courses.map((course) => ({
        ...course,
        favorite: favorites.includes(course.id),
      })),
    [favorites],
  );
  const filteredCourses = useMemo(
    () =>
      enrichedCourses
        .filter((course) => category === "All" || course.category === category)
        .filter((course) =>
          `${course.title} ${course.description} ${course.instructor}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .sort((a, b) =>
          ({
            newest: () => b.id - a.id,
            name: () => a.title.localeCompare(b.title),
            progress: () => b.progress - a.progress,
            rating: () => b.rating - a.rating,
          })[sortBy](),
        ),
    [enrichedCourses, category, query, sortBy],
  );

  const toggleFavorite = (id) =>
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  const resetFilters = () => {
    setCategory("All");
    setQuery("");
    setSortBy("newest");
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection
          onExplore={() =>
            document
              .querySelector("#explore")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <StatsSection courses={enrichedCourses} />
        <ContinueLearning
          courses={enrichedCourses.filter(
            (course) => course.status === "In Progress",
          )}
          toggleFavorite={toggleFavorite}
        />
        <section
          id="explore"
          className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  EXPLORE LIBRARY
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                  Find your next skill
                </h2>
              </div>
              <SearchBar value={query} onChange={setQuery} />
            </div>
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <CategoryFilter
                active={category}
                onChange={(value) => {
                  setCategory(value);
                  setShowAll(false);
                }}
              />
              <label className="flex shrink-0 items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                Sort{" "}
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  <option value="newest">Newest</option>
                  <option value="name">Course name</option>
                  <option value="progress">Progress</option>
                  <option value="rating">Rating</option>
                </select>
              </label>
            </div>
            <CourseGrid
              courses={filteredCourses}
              showAll={showAll}
              onToggleShow={() => setShowAll((value) => !value)}
              toggleFavorite={toggleFavorite}
              resetFilters={resetFilters}
            />
          </div>
        </section>
      </main>
      <Footer />
      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-indigo-600 text-white shadow-lg transition hover:-translate-y-1 hover:bg-indigo-700"
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}
export default App;
