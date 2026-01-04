# SportP – Sports Management Platform (Frontend)

SportP is a modern sports management web application that allows users to browse matches, sports, leagues, and players with features like infinite scrolling, lazy-loaded sections, and favourites.  
The frontend is built with **Next.js App Router** and communicates with a separate backend API secured using **JWT (httpOnly cookies)**.

---

## 🚀 Features

- Authentication using JWT (httpOnly cookies)
- Protected and public routes
- Infinite scroll for Matches, Leagues, and Players
- Lazy-loaded Home page sections (load only when visible)
- Glassmorphism UI with Tailwind CSS
- Favourite matches (add / remove)
- Responsive, scalable architecture

---

## 🛠 Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- TanStack React Query
- Axios

### Backend (integrated)
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## 🔐 Authentication

- JWT stored in **httpOnly cookies**
- Middleware protects all routes except `/login` and `/registration`
- `/me` endpoint validates session
- Automatic redirect on `401`

---

## 🏠 Home Page Architecture

Sections load progressively as the user scrolls:

1. Matches (infinite scroll)
2. Sports (lazy-loaded)
3. Leagues (lazy-loaded + infinite scroll)
4. Players (lazy-loaded + infinite scroll)

This avoids unnecessary API calls and improves performance.

---

## ⭐ Favourites

- Users can favourite matches
- Backend stores favourites separately
- Frontend merges favourites with matches
- Toggle via API calls

---

## 🌐 API Endpoints Used

### Authentication
- POST `/login`
- POST `/registration`
- GET `/me`

### Matches
- GET `/matches?cursor=&limit=`

### Sports
- GET `/sports`

### Leagues
- GET `/leagues?cursor=&limit=`

### Players
- GET `/players?cursor=&limit=`

### Favourites
- GET `/favourite`
- POST `/favourite/:matchId`
- DELETE `/favourite/:favouriteId`

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js >= 18
- pnpm
- Running backend server

### Installation

```bash
git clone <repository-url>
cd sportp-frontend
pnpm install
```

### Environment Variables

Create `.env`:

```env
NEXT_PUBLIC_API_BASE_URL=  //Back-end URL

```

### Run Dev Server

```bash
pnpm dev
```

Open http://localhost:3000

---


