export function SearchFilter() {
	return (
		<div className="flex flex-wrap gap-3 items-center">
			<input className="border rounded p-2" placeholder="Location" />
			<select className="border rounded p-2">
				<option>All Services</option>
				<option>Weddings</option>
				<option>Events</option>
				<option>Portraits</option>
			</select>
			<select className="border rounded p-2">
				<option>Any Rating</option>
				<option>4+ stars</option>
				<option>3+ stars</option>
			</select>
			<button className="px-3 py-2 bg-blue-600 text-white rounded">Search</button>
		</div>
	)
}
