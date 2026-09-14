import axiosInstance from '../axios'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatRequest {
  query: string
  conversation_id: string
  history: ChatMessage[]
}

export interface ChatResponse {
  status: string
  query: string
  response: string
  conversation_id?: string
}

export const sendChatMessage = async (
  query: string, 
  conversationId: string, 
  history: ChatMessage[]
): Promise<ChatResponse> => {
  try {
    const response = await axiosInstance.post<ChatResponse>('/chat', {
      query,
      conversation_id: conversationId,
      history,
    })
    return response.data
  } catch (error) {
    console.error('Chat API Error:', error)
    throw error
  }
}
