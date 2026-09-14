# Chat API Update - Conversation ID & History

## Overview
Updated the chat API to support conversation tracking with unique IDs and message history for better contextual conversations.

## Changes Made

### 1. Updated API Types (`lib/api/chat.ts`)

**New Interface:**
```typescript
export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatRequest {
  query: string
  conversation_id: string
  history: ChatMessage[]
}
```

**Updated Function:**
```typescript
export const sendChatMessage = async (
  query: string, 
  conversationId: string, 
  history: ChatMessage[]
): Promise<ChatResponse>
```

### 2. Updated API Proxy Route (`app/api/chat/route.ts`)

**New Request Body:**
```json
{
  "query": "Which industrial parks have the most available land?",
  "conversation_id": "550e8400-e29b-41d4-a716-446655440000",
  "history": [
    {
      "role": "user",
      "content": "Previous user message"
    },
    {
      "role": "assistant", 
      "content": "Previous AI response"
    }
  ]
}
```

**Validation:**
- Validates both `query` and `conversation_id` are present
- Sends `history` array (defaults to empty array if not provided)

### 3. Updated Chatbot Component (`app/chatbot/page.tsx`)

**New State Management:**
```typescript
const [conversationId, setConversationId] = useState<string>(crypto.randomUUID())
const [messages, setMessages] = useState<ChatMessage[]>([])
```

**Conversation Flow:**
1. **Initial Load**: Generates unique conversation ID using `crypto.randomUUID()`
2. **Sending Message**: Includes previous messages as history in API call
3. **New Chat**: Generates new conversation ID when "New Chat" is clicked

## Key Features

### ✅ Unique Conversation IDs
- Each new chat generates a unique UUID using `crypto.randomUUID()`
- Conversation ID persists throughout the chat session
- New conversation ID created when starting a new chat

### ✅ Message History Tracking
- All previous messages in the conversation are sent with each request
- Enables AI to maintain context across multiple messages
- History includes both user messages and assistant responses

### ✅ Type Safety
- Proper TypeScript interfaces for all data structures
- Type-safe message handling with `ChatMessage` interface
- Compile-time validation of API requests

## Example Usage

### Starting a New Conversation
```typescript
// Automatic on component mount
const [conversationId] = useState(crypto.randomUUID())
// Example: "550e8400-e29b-41d4-a716-446655440000"
```

### Sending a Message with History
```typescript
await sendChatMessage(
  "What are the top industrial parks?",
  conversationId,
  [
    { role: 'user', content: 'Hello' },
    { role: 'assistant', content: 'Hi! How can I help?' }
  ]
)
```

### Starting Fresh Chat
```typescript
handleNewChat() // Clears messages and generates new UUID
```

## API Request Example

**Before:**
```json
{
  "query": "Tell me about Kharagpur"
}
```

**After:**
```json
{
  "query": "What about its connectivity?",
  "conversation_id": "550e8400-e29b-41d4-a716-446655440000",
  "history": [
    {
      "role": "user",
      "content": "Tell me about Kharagpur"
    },
    {
      "role": "assistant",
      "content": "Kharagpur Industrial Area is located in Paschim Medinipur..."
    }
  ]
}
```

## Benefits

1. **Contextual Conversations**: AI can reference previous messages
2. **Multi-Turn Dialogues**: Better follow-up question handling
3. **Session Management**: Each chat session is uniquely identified
4. **Better UX**: More natural, conversational interactions
5. **Debugging**: Easier to track and debug specific conversations

## Testing

To test the implementation:

1. Start a new chat (should generate UUID in console)
2. Send a message
3. Send a follow-up question referencing the first message
4. AI should understand the context from history
5. Click "New Chat" - should generate new UUID and clear history

## Notes

- `crypto.randomUUID()` is available in modern browsers and Node.js 15+
- Conversation IDs are generated client-side for better performance
- History is sent with each request (consider pagination for very long conversations)
- Empty history array is sent for first message in a conversation
