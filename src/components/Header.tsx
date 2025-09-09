import { Link, NavLink } from 'react-router-dom'

export function Header() {
	return (
		<header className="border-b bg-white">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				<Link to="/" className="text-xl font-semibold">PhotoHire</Link>
				<nav className="flex items-center gap-4">
					<NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}>Home</NavLink>
					<NavLink to="/chat" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}>Chat</NavLink>
					<NavLink to="/bookings" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}>Bookings</NavLink>
					<NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}>Login</NavLink>
				</nav>
			</div>
		</header>
	)
}
