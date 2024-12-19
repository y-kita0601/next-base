'use client'

import { useChat } from 'ai/react'
import { ChatInput } from './components/chat-input'
import { ChatMessages } from './components/chat-messages'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from 'react'

const initialMessages:any = [
  { id: '1', role: 'system', content: 'こんにちは！AIアシスタントです。どのようなことでお手伝いできますか？' },
  { id: '2', role: 'user', content: 'こんにちは。今日の天気を教えてください。' },
  { id: '3', role: 'assistant', content: '申し訳ありませんが、私はリアルタイムの天気情報にアクセスできません。ただし、一般的な天気の傾向や季節に応じた情報をお伝えすることはできます。特定の地域の今日の天気が知りたい場合は、地域の気象庁のウェブサイトや天気予報アプリをご確認いただくのがよいでしょう。他に何かお手伝いできることはありますか？' },
  { id: '4', role: 'user', content: 'わかりました。では、美味しいラーメンの作り方を教えてください。' },
]

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat()

  useEffect(() => {
    setMessages(initialMessages)
  }, [setMessages])

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>AI Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <ChatMessages messages={messages} />
            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            />
          </CardContent>
        </Card>
      </div>
  )
}