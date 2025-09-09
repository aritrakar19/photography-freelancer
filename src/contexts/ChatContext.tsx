import { createContext, useContext, ReactNode, useState } from 'react'

interface ChatMessage {
	id: string
	senderId: string
	recipientId: string
	text: string
	timestamp: number
}

interface ChatContextValue {
	messages: ChatMessage[]
	sendMessage: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
	const [messages, setMessages] = useState<ChatMessage[]>([])

	function sendMessage(msg: Omit<ChatMessage, 'id' | 'timestamp'>) {
		setMessages((prev) => [
			...prev,
			{ id: crypto.randomUUID(), timestamp: Date.now(), ...msg },
		])
	}

	return (
		<ChatContext.Provider value={{ messages, sendMessage }}>
			{children}
		</ChatContext.Provider>
	)
}

export function useChat() {
	const ctx = useContext(ChatContext)
	if (!ctx) throw new Error('useChat must be used within ChatProvider')
	return ctx
}
