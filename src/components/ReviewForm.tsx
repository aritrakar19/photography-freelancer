export function ReviewForm({ onSubmit }: { onSubmit: (rating: number, comment: string) => void }) {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const form = e.currentTarget as HTMLFormElement & { rating: { value: string }, comment: { value: string } }
		onSubmit(Number(form.rating.value), form.comment.value)
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-3">
			<textarea name="comment" className="w-full border rounded p-2" rows={4} placeholder="Write your review..." />
			<div className="flex items-center gap-3">
				<label className="text-sm">Rating</label>
				<input name="rating" type="number" min={1} max={5} className="w-20 border rounded p-2" defaultValue={5} />
				<button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
			</div>
		</form>
	)
}
