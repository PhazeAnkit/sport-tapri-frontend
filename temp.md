# SportP – Sports Management Platform (Frontend)

SportP is a modern sports management web application that allows users to explore sports data such as matches, sports, leagues, teams, and players with a smooth, performant, and scalable user experience.

The frontend is built using **Next.js App Router** and communicates with a **separately hosted backend API**, secured using **JWT authentication stored in httpOnly cookies**.

---

## Key Features

### Authentication & Session Management
- JWT-based authentication using **httpOnly cookies**
- Secure login & registration flow
- Session validation via `/me` endpoint
- Automatic redirect to Auth page on `401 Unauthorized`
- Session persistence across page refresh
- Backend is the single source of truth for authentication

---

### Routing & Access Control
- Public routes: `/auth`
- Protected routes: `/`, `/matches`, `/favourites`, etc.
- Frontend middleware for **coarse route protection**
- Fine-grained auth enforcement handled by backend APIs

---

### Home Page (Lazy & Progressive Loading)
The Home page is divided into **multiple vertically scrollable sections** that load progressively to avoid unnecessary API calls:

1. **Matches Section**
   - Infinite scroll
   - Grouped by date (Today / Tomorrow / Upcoming)
   - Favourite toggle support

2. **Sports Section**
   - Lazy-loaded only when visible
   - Displays available sports from DB

3. **Leagues Section**
   - Lazy-loaded
   - Infinite scroll
   - Filtered by sport when required

4. **Players Section**
   - Lazy-loaded
   - Infinite scroll
   - Data fetched only when user reaches section

---

### Matches Page
A dedicated Matches page with advanced filtering and infinite scroll.

#### Filters (DB-driven, not hardcoded):
- Sport
- League
- Team
- Date range (from / to)

#### Features:
- Filters reset pagination automatically
- Infinite scroll with cursor-based pagination
- Filters dynamically fetch dependent data (Leagues → Teams)
- Reuses Match cards and favourite logic

---

### Favourites
- Users can mark/unmark matches as favourites
- Favourites stored in backend (`Favourite` model)
- Dedicated **Favourites page**
- Optimistic UI updates (instant removal on unfavourite)
- Fully synced with Matches page

---

### UI / UX
- Glassmorphism-inspired design
- Static gradient background
- Centered, floating navbar for protected routes
- No navbar on public routes
- Desktop-first design with responsive support
- Skeleton loaders for all async data

---

## Tech Stack

### Frontend
- **Next.js 16** (App Router)
- React 18
- TypeScript
- Tailwind CSS
- TanStack React Query
- Axios

### Backend (Integrated)
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## Architecture Highlights

- Feature-based folder structure
- Strong separation of concerns:
  - API layer
  - Hooks layer
  - UI components
- Cursor-based pagination (scalable)
- React Query cache normalization (single contract per query key)
- Defensive UI rendering to prevent runtime crashes
- Backend-driven filters & metadata

---

## API Endpoints Used

### Authentication
- `POST /login`
- `POST /registration`
- `GET /me`

### Matches
- `GET /matches?cursor=&limit=&sportId=&leagueId=&teamId=&fromDate=&toDate=`

### Sports
- `GET /sports`

### Leagues
- `GET /leagues?sportId=&cursor=&limit=`

### Teams
- `GET /teams?leagueId=&sportId=`

### Players
- `GET /players?cursor=&limit=`

### Favourites
- `GET /favourite`
- `POST /favourite/:matchId`
- `DELETE /favourite/:favouriteId`

---

##  Setup Instructions

### Prerequisites
- Node.js >= 18
- pnpm
- Backend server running and accessible

---

### Installation

```bash
git clone <repository-url>
cd sportp-frontend
pnpm install
```

---

### Environment Variables

Create a `.env` file in the root:

```env
NEXT_PUBLIC_API_BASE_URL=<BACKEND_API_URL>
```

---

### Run Development Server

```bash
pnpm dev
```

Open:  
http://localhost:3000

---

## Key Design Decisions

- Backend is the **only authority** for authentication
- Frontend middleware is **not used for strict auth validation** in cross-domain setups
- React Query cache keys strictly map to **one API contract**
- Filters and metadata are **always fetched from DB**
- No hardcoded enums for sports, leagues, or teams

---

## Planned / Future Enhancements

- URL-based filter persistence
- Mobile filter drawer
- Optimistic favourite add on Matches page
- Animations for list item enter/exit
- Searchable team dropdown
- Error boundaries for better resilience

---

## Status

The project is actively evolving with a focus on:
- Scalability
- Clean architecture
- Real-world production patterns
