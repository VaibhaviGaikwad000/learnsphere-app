# LearnSphere

A responsive, frontend-only learning dashboard built for a college assignment. It provides a polished course discovery and progress experience that works without a backend.

## Features

- Responsive sticky navigation and mobile menu
- Course search, categories, sorting, show more/less, and friendly empty state
- Progress tracking, status colors, continued-learning rail, and stats
- Persistent dark mode, favorites, search query, and category selection via local storage
- Keyboard-friendly controls, lazy-loaded course media, and smooth scrolling

## Stack

React 19
Vite
JavaScript
Tailwind CSS v4
React Icons
Google Fonts
Local Storage.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to produce a production bundle. The project can be deployed directly to Vercel or Netlify.

## Structure

learnsphere-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

## Future improvements

Connect courses and learner profiles to an authenticated API, add lesson-level routes, and allow certificates to be downloaded.


