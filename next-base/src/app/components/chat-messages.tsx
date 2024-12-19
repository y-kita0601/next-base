import { Message } from 'ai'
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatMessages({ messages }: { messages: Message[] }) {
    return (
        <ScrollArea className="h-[600px] pr-4">
            {messages.map((message) => (
                <div key={message.id} className="mb-4">
                    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                            className={`rounded-lg px-4 py-2 max-w-[80%] ${
                                message.role === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : message.role === 'assistant'
                                        ? 'bg-gray-200'
                                        : 'bg-green-100'
                            }`}
                        >
                            {message.role === 'system' && <div className="font-bold mb-1">System</div>}
                            {message.content}
                            <div className="text-xs mt-1 opacity-50">
                                {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </ScrollArea>
    )
}

