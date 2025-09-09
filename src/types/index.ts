export type UserRole = 'client' | 'photographer'

export interface PhotographerProfile {
	id: string
	name: string
	location: string
	contactEmail: string
	services: string[]
	rating: number
	reviewCount: number
	civilScore: number
	portfolio: PortfolioItem[]
}

export type PortfolioItem = {
	id: string
	type: 'photo' | 'video' | 'album'
	url: string
	thumbnailUrl?: string
	title?: string
}

export interface Review {
	id: string
	photographerId: string
	clientId: string
	rating: number
	comment: string
	createdAt: number
}

export interface BookingRequest {
	id: string
	clientId: string
	photographerId: string
	status: 'pending' | 'accepted' | 'rejected' | 'completed'
	message?: string
	createdAt: number
}
