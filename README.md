# LearnSphere

LearnSphere is a responsive, frontend-only learning dashboard built with React, Vite, and Tailwind CSS. It helps learners discover courses, track progress, manage favorites, and continue learning from one place.

## Features

- Responsive sticky navbar with mobile navigation
- Course search, category filters, sorting, and show more/less controls
- Course progress, status labels, statistics, and a continue-learning section
- Favorite courses and persistent dark mode using local storage
- Responsive course cards with detailed course information in a modal
- Notification bell with unread count and a scrollable notification panel
- Accessible controls, lazy-loaded course images, and smooth scrolling

## Technologies Used

- React 19
- Vite
- JavaScript
- Tailwind CSS v4
- React Icons
- Google Fonts
- Browser Local Storage

## Installation Steps

1. Clone the repository.

   ```bash
   git clone <repository-url>
   ```

2. Move into the project folder.

   ```bash
   cd learnsphere-app
   ```

3. Install the dependencies.

   ```bash
   npm install
   ```

## How to Run the Project

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

Other useful commands:

```bash
npm run lint
npm run build
npm run preview
```

## Folder Structure

```text
learnsphere-app/
├── public/                 # Public assets
├── src/
│   ├── assets/             # Images and local assets
│   ├── components/         # Reusable React UI components
│   │   ├── Navbar.jsx
│   │   ├── NotificationButton.jsx
│   │   ├── NotificationPanel.jsx
│   │   ├── NotificationItem.jsx
│   │   ├── CourseCard.jsx
│   │   └── CourseDetailsModal.jsx
│   ├── data/               # Course and notification data
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Shared constants and helper functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Tailwind import and global styles
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite configuration
```

## New Features Added

- **Sticky Navbar:** The navigation stays visible while the user scrolls.
- **Notification System:** A reusable notification bell displays an unread count and opens a responsive, scrollable panel with read and unread notification states.
- **Course Details Modal:** Every course card has a View Details button that opens a responsive modal with the selected course information. The modal can be closed with its button or by clicking outside it.
- **Responsive Improvements:** Layouts are protected against narrow-screen overflow, and text wraps safely in cards and notifications.

## License

MIT
