import type { PortfolioItem } from '../types'

export function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
			{items.map((it) => (
				<div key={it.id} className="aspect-video bg-gray-200 rounded overflow-hidden">
					{/* Replace with real media rendering */}
				</div>
			))}
		</div>
	)
}
