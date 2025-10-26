# ThinkBoard

ThinkBoard is a MERN (MongoDB, Express, React, Node.js) stack application for creating, viewing, and managing notes.
It is deployed and live at: [https://thinkboard-48s0.onrender.com](https://thinkboard-48s0.onrender.com)

---

## Features

- Create, view, update, and delete notes
- Modern, responsive React frontend with Vite + TailwindCSS
- REST API backend with Express and MongoDB (Mongoose)
- Rate limiting with Upstash Redis
- Deployed for production using Render

---

## Getting Started (Local Development)

### Backend
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Set up your `.env` file in the backend directory (see `.env.example` if available).
3. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend
1. Install dependencies:
   ```bash
   cd frontend/thinkboard
   npm install
   ```
2. (Optional) Set up a `.env` file for frontend API URLs.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deployment

The app is deployed on [Render](https://render.com):

- **Live URL:** [https://thinkboard-48s0.onrender.com](https://thinkboard-48s0.onrender.com)

---

## Tech Stack

- **Frontend:** React 19, Vite, TailwindCSS, DaisyUI, Axios, Lucide-React, React Hot Toast, React Router DOM
- **Backend:** Node.js, Express, MongoDB (Mongoose), dotenv, Upstash Redis (for rate-limiting)

---

