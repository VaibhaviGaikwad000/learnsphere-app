import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { PAGE_PADDING } from "../utils/constants";
import learningHeroBackground from "../assets/learning-hero-background.png";

export default function HeroSection({ onExplore }) {
  return (
    <section
      id="top"
      className={`relative isolate overflow-hidden bg-slate-950 ${PAGE_PADDING} py-16 text-white lg:py-24`}
    >
      <img
        src={learningHeroBackground}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-slate-950/65" />
      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-4 text-sm font-semibold text-indigo-100">
            YOUR LEARNING SPACE
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Welcome back, Students.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg">
            Pick up where you left off, build momentum, and keep growing one
            lesson at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore courses <FiArrowRight />
            </button>
            <a
              href="#learning"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              <FiPlayCircle /> Continue learning
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-lg border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold">This week's focus</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                3 days streak
              </span>
            </div>
            <div className="rounded-md bg-white p-5 text-slate-900 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-indigo-600">
                    UP NEXT
                  </p>
                  <h2 className="mt-2 font-display text-lg font-bold">
                    Component composition
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Modern React Patterns
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 text-indigo-600">
                  <FiPlayCircle />
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[72%] rounded-full bg-indigo-600" />
              </div>
              <p className="mt-2 text-right text-xs font-semibold text-slate-500">
                72% complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
