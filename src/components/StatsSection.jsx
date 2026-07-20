import { FiAward, FiBookOpen, FiCheckCircle, FiClock } from "react-icons/fi";
import StatsCard from "./StatsCard";
import { PAGE_PADDING } from "../utils/constants";
export default function StatsSection({ courses }) {
  const stats = [
    {
      icon: <FiBookOpen />,
      value: courses.length,
      label: "Total courses",
      accent:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300",
    },
    {
      icon: <FiCheckCircle />,
      value: courses.filter((c) => c.status === "Completed").length,
      label: "Completed",
      accent:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
    },
    {
      icon: <FiClock />,
      value: courses.filter((c) => c.status === "In Progress").length,
      label: "In progress",
      accent:
        "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300",
    },
    {
      icon: <FiAward />,
      value: 2,
      label: "Certificates",
      accent:
        "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300",
    },
  ];
  return (
    <section className={`${PAGE_PADDING} py-10`}>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
