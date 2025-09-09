import { useParams } from 'react-router-dom'

export function Profile() {
	const { id } = useParams()
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Photographer Profile</h1>
			<p className="text-gray-600">Profile ID: {id}</p>
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 space-y-4">
					<div className="border rounded-lg p-4 bg-white">Portfolio Gallery</div>
					<div className="border rounded-lg p-4 bg-white">Services Offered</div>
				</div>
				<aside className="space-y-4">
					<div className="border rounded-lg p-4 bg-white">Contact & Location</div>
					<div className="border rounded-lg p-4 bg-white">Civil Score & Ratings</div>
				</aside>
			</section>
		</div>
	)
}
