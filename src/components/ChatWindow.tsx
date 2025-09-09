import { useState } from 'react'
import { useChat } from '../contexts/ChatContext'

export function ChatWindow({ selfId, peerId }: { selfId: string; peerId: string }) {
	const { messages, sendMessage } = useChat()
	const [text, setText] = useState('')

	const thread = messages.filter(
		(m) => (m.senderId === selfId && m.recipientId === peerId) || (m.senderId === peerId && m.recipientId === selfId)
	)

	function handleSend() {
		if (!text.trim()) return
		sendMessage({ senderId: selfId, recipientId: peerId, text })
		setText('')
	}

	return (
		<div className="flex flex-col h-80">
			<div className="flex-1 overflow-y-auto space-y-2 p-2 bg-gray-50 border rounded">
				{thread.map((m) => (
					<div key={m.id} className={m.senderId === selfId ? 'text-right' : 'text-left'}>
						<span className="inline-block px-3 py-1 rounded bg-white border">{m.text}</span>
					</div>
				))}
			</div>
			<div className="mt-2 flex gap-2">
				<input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 border rounded p-2" placeholder="Type a message" />
				<button onClick={handleSend} className="px-3 py-2 bg-blue-600 text-white rounded">Send</button>
			</div>
		</div>
	)
}
