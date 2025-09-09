import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Chat } from './pages/Chat'
import { BookingRequests } from './pages/BookingRequests'
import { ReviewPage } from './pages/ReviewPage'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="container mx-auto px-4 py-6 flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile/:id" element={<Profile />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/bookings" element={<BookingRequests />} />
						<Route path="/review/:id" element={<ReviewPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App
