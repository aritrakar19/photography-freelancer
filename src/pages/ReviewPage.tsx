import { useParams } from 'react-router-dom'

export function ReviewPage() {
	const { id } = useParams()
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Leave a Review</h1>
			<p className="text-gray-600">For Photographer: {id}</p>
			<form className="space-y-4 max-w-xl">
				<textarea className="w-full border rounded p-2" rows={5} placeholder="Write your review..." />
				<div className="flex items-center gap-3">
					<label className="text-sm">Rating</label>
					<input type="number" min={1} max={5} className="w-20 border rounded p-2" />
					<button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
				</div>
			</form>
		</div>
	)
}
