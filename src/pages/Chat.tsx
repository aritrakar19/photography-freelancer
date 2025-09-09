import { ChatWindow } from '../components/ChatWindow'

export function Chat() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Chat</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<aside className="border rounded-lg p-4 bg-white">Conversations</aside>
				<section className="lg:col-span-2 border rounded-lg p-4 bg-white">
					<ChatWindow selfId="demo-client" peerId="demo-photographer" />
				</section>
			</div>
		</div>
	)
}
