# Photography Freelancer Web App

A React + Vite app for clients to discover and hire photographers, chat, and review; and for photographers to manage profiles, portfolios, bookings, and reputation (ratings + civil score).

## Stack
- React + Vite (TypeScript)
- React Router
- Tailwind CSS
- Firebase: Auth, Firestore, Storage (and later Realtime/FCM)

## Structure
```
src/
  components/ (Header, PhotographerCard, PortfolioGallery, ReviewForm, ChatWindow, SearchFilter)
  contexts/ (AuthContext, ChatContext)
  pages/ (Home, Profile, Chat, BookingRequests, ReviewPage, Login, Signup)
  services/ (firebase.ts)
  types/ (shared TS types)
```

## Setup
1) Install deps
```
npm install
```
2) Node version
- Vite 7 needs Node 20.19+ or 22.12+. Upgrade if needed.

3) Tailwind
- Already configured via `postcss.config.js` using `@tailwindcss/postcss`.

4) Firebase env
Create `.env` in project root:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Run
```
npm run dev
```

## Next
- Wire Firestore collections for photographers, reviews, bookings, chat.
- Implement file uploads to Storage for portfolio items.
- Compute civil score from ratings + completed jobs.
# photography-freelancer
