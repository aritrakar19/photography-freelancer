import { PhotographerCard } from '../components/PhotographerCard'
import { SearchFilter } from '../components/SearchFilter'
import type { PhotographerProfile } from '../types';

const MOCK: PhotographerProfile[] = [
	{
		id: 'p1',
		name: 'Ava Lens',
		location: 'Kolkata',
		contactEmail: 'ava@example.com',
		services: ['Weddings', 'Portraits'],
		rating: 4.8,
		reviewCount: 32,
		civilScore: 92,
		portfolio: [],
	},
	{
		id: 'p2',
		name: 'Noah Frames',
		location: 'Mumbai',
		contactEmail: 'noah@example.com',
		services: ['Events'],
		rating: 4.5,
		reviewCount: 21,
		civilScore: 88,
		portfolio: [],
	},
]

export function Home() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Find Photographers</h1>
			<SearchFilter />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{MOCK.map((p) => (
					<PhotographerCard key={p.id} profile={p} />
				))}
			</div>
		</div>
	)
}
