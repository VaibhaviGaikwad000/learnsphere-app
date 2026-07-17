# LearnSphere

A responsive, frontend-only learning dashboard built for a college assignment. It provides a polished course discovery and progress experience that works without a backend.

## Features

- Responsive sticky navigation and mobile menu
- Course search, categories, sorting, show more/less, and friendly empty state
- Progress tracking, status colors, continued-learning rail, and stats
- Persistent dark mode, favorites, search query, and category selection via local storage
- Keyboard-friendly controls, lazy-loaded course media, and smooth scrolling

## Stack

React 19, Vite, JavaScript, Tailwind CSS v4, React Icons, Google Fonts, and Local Storage.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to produce a production bundle. The project can be deployed directly to Vercel or Netlify.

## Structure

`src/components` contains the reusable UI; `src/data/courses.js` contains the course catalogue; `src/hooks` provides persistence; `src/utils` holds shared view helpers.

## Future improvements

Connect courses and learner profiles to an authenticated API, add lesson-level routes, and allow certificates to be downloaded.

## License

MIT
