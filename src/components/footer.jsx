import {
  FiBookOpen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { PAGE_PADDING } from "../utils/constants";

export default function Footer() {
  return (
    <footer className={`border-t border-slate-200 bg-white ${PAGE_PADDING} py-12 dark:border-slate-800 dark:bg-slate-950`}>
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md bg-indigo-600 text-white">
              <FiBookOpen />
            </span>
            LearnSphere
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
            A focused space to learn the skills that move your work and
            curiosity forward.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Quick links
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
            <a href="#top" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#explore" className="hover:text-indigo-600">
              Explore courses
            </a>
            <a href="#learning" className="hover:text-indigo-600">
              My learning
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Stay connected
          </h2>
          <a
            href="mailto:hello@learnsphere.dev"
            className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400"
          >
            <FiMail /> hello@learnsphere.dev
          </a>
          <div className="mt-5 flex gap-2">
            {[FiGithub, FiLinkedin, FiInstagram].map((Icon, index) => (
              <a
                aria-label={["GitHub", "LinkedIn", "Instagram"][index]}
                key={index}
                href="#top"
                className="grid h-9 w-9 place-items-center rounded-md bg-slate-100 text-slate-600 transition hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-100 pt-6 text-sm text-slate-500 dark:border-slate-800">
        © 2026 LearnSphere. Built for lifelong learners.
      </div>
    </footer>
  );
}
