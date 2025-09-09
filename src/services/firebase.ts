import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Validate env vars for clearer errors in dev
const missing = Object.entries(firebaseConfig)
	.filter(([, v]) => !v || String(v).trim() === '')
	.map(([k]) => k)

if (missing.length > 0) {
	// eslint-disable-next-line no-console
	console.error('Missing Firebase env vars:', missing.join(', '))
	throw new Error('Firebase configuration is incomplete. Add VITE_FIREBASE_* values to .env and restart the dev server.')
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
