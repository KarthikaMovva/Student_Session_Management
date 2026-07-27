# Session Evaluation Dashboard

A responsive Next.js dashboard for viewing and analyzing student session evaluation data.

The application displays session records, supports filtering, provides detailed session views, and visualizes evaluation metrics over time.

---

## Features

### Authentication

- Simple mock authentication gate
- Protected dashboard routes
- Redirects unauthenticated users to login

---

### Session Dashboard

- View all evaluation sessions
- Filter by:
  - Student name
  - Date range
- Responsive table layout
- Empty and error states

---

### Session Details

Each session includes:

- Student information
- Session date
- Average evaluation scores:
  - Engagement
  - Clarity
  - Pacing

---

### Data Visualization

Metrics are displayed using interactive charts:

- Engagement score trends
- Clarity score trends
- Pacing score trends

---

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query
- Recharts


### Mock Backend

- JSON Server
- Static JSON API



---

# Getting Started

## Install dependencies

```bash
npm install

## Start Next.js application
npm run dev

## Application runs at:  http://localhost:3000
```
## Start Mock API

## Open another terminal:
```bash
npm run mock-api

## Mock API runs at: http://localhost:4000
```

## Login

This project uses a mock authentication flow.

Use the provided login page to access the dashboard.

## Data Fetching Approach

The application uses React Query for server state management.

## Reasons:

- Automatic caching
- Loading/error state handling
- Cleaner async data management
- Easy API replacement in the future

Local React state is used only for UI state such as filters.
