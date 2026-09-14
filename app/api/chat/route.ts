import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { query, conversation_id, history } = body

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }

    if (!conversation_id) {
      return NextResponse.json(
        { error: 'Conversation ID is required' },
        { status: 400 }
      )
    }

    // Get the API endpoint from environment variable
    const apiUrl = process.env.API_URL || 'http://106.51.226.42:4561'
    
    // Forward the request to the external API
    const response = await fetch(`${apiUrl}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({ 
        query,
        conversation_id,
        history: history || []
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('External API Error:', response.status, errorText)
      return NextResponse.json(
        { 
          error: 'Failed to get response from chat API',
          details: errorText 
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Return the response from the external API
    return NextResponse.json(data)
  } catch (error) {
    console.error('Proxy Error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
