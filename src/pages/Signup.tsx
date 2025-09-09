export function Signup() {
	return (
		<div className="max-w-md mx-auto space-y-6">
			<h1 className="text-2xl font-semibold">Sign Up</h1>
			<form className="space-y-4">
				<input className="w-full border rounded p-2" placeholder="Email" />
				<input type="password" className="w-full border rounded p-2" placeholder="Password" />
				<button className="w-full px-4 py-2 bg-blue-600 text-white rounded">Create Account</button>
			</form>
		</div>
	)
}
