// src/context/AuthContext.tsx

import { createContext, useContext, type ReactNode } from 'react'

// Minimal placeholder shape; replace with Firebase when enabling auth
export type User = {
	uid: string
	email?: string | null
	displayName?: string | null
} | null

interface AuthContextValue {
	user: User
	loading: boolean
	signInWithGoogle: () => Promise<void>
	logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	async function signInWithGoogle() {
		// No-op while Firebase is disabled
		return Promise.reject(new Error('Auth disabled. Configure Firebase to enable.'))
	}

	async function logout() {
		// No-op while Firebase is disabled
		return Promise.resolve()
	}

	return (
		<AuthContext.Provider value={{ user: null, loading: false, signInWithGoogle, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) throw new Error('useAuth must be used within AuthProvider')
	return context
}
