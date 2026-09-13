import axiosInstance from '../axios'

export interface ChatRequest {
  query: string
}

export interface ChatResponse {
  status: string
  query: string
  response: string
}

export const sendChatMessage = async (query: string): Promise<ChatResponse> => {
  try {
    const response = await axiosInstance.post<ChatResponse>('/chat', {
      query,
    })
    return response.data
  } catch (error) {
    console.error('Chat API Error:', error)
    throw error
  }
}
