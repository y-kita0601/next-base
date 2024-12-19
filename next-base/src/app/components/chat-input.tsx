import { FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ChatInputProps {
    input: string
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    isLoading: boolean
}

export function ChatInput({ input, handleInputChange, handleSubmit, isLoading }: ChatInputProps) {
    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <Textarea
                value={input}
                onChange={handleInputChange}
                placeholder="メッセージを入力してください..."
                className="w-full p-2 mb-2"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? '送信中...' : '送信'}
            </Button>
        </form>
    )
}

