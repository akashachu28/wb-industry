"use client"
import { useState } from 'react'
import { sendChatMessage } from '@/lib/api/chat'

const CHAT_HISTORY = [
  { id: 1, title: 'Investment Opportunities', timestamp: 'Today' },
  { id: 2, title: 'Project Timeline Analysis', timestamp: 'Yesterday' },
  { id: 3, title: 'Industrial Park Comparison', timestamp: '2 days ago' },
  { id: 4, title: 'West Bengal Incentives', timestamp: '3 days ago' },
  { id: 5, title: 'Infrastructure Requirements', timestamp: 'Last week' },
]

// Loading dots component
const LoadingDots = () => (
  <div className="flex gap-1">
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
)

export default function ChatbotPage() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeChat, setActiveChat] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = message.trim()
      setMessages(prev => [...prev, { role: 'user', content: userMessage }])
      setMessage('')
      setIsLoading(true)
      
      try {
        // Call the API
        const response = await sendChatMessage(userMessage)
        
        // Add AI response to messages
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response.response || 'Sorry, I could not process your request.'
        }])
      } catch (error) {
        console.error('Error sending message:', error)
        // Add error message
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error while processing your request. Please try again.'
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleNewChat = () => {
    setMessages([])
    setActiveChat(null)
  }

  return (
    <main className="flex-1 overflow-hidden flex bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
      {/* Collapsible Sidebar */}
      <div
        className={`absolute left-0 top-0 h-full bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg transition-all duration-300 z-10 ${
          sidebarOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full w-64">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
              New Chat
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
              Recent Chats
            </div>
            <div className="space-y-1">
              {CHAT_HISTORY.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`w-full text-left rounded-lg px-3 py-2.5 transition-colors group ${
                    activeChat === chat.id
                      ? 'bg-blue-50 text-blue-900'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="shrink-0"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <p className="text-xs font-medium truncate">{chat.title}</p>
                      </div>
                      <p className="text-xs text-gray-500">{chat.timestamp}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              Total Chats: {CHAT_HISTORY.length}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`absolute top-4 z-20 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 shadow-md transition-all duration-300 ${
          sidebarOpen ? 'left-[260px]' : 'left-4'
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          className={`transition-transform duration-300 ${sidebarOpen ? '' : 'rotate-180'}`}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col">
          <div className="flex-1">
            {messages.length === 0 ? (
              // Empty State
              <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto">
                <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 opacity-80 blur-2xl" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-2">
                  Good Morning, User
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 text-center mb-8">
                  How Can I <span className="text-cyan-600 italic font-semibold">Assist You Today?</span>
                </p>
              </div>
            ) : (
              // Messages
              <div className="max-w-3xl mx-auto space-y-6 pb-6">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex gap-4 justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="rounded-2xl px-4 py-3 bg-white border border-gray-200">
                      <LoadingDots />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Area - Inside Chat */}
          <div className="max-w-3xl mx-auto w-full mt-auto pt-4">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="flex items-center px-4 py-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                  className="shrink-0"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                  placeholder="Initiate a query or send a command to the AI..."
                  className="flex-1 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
