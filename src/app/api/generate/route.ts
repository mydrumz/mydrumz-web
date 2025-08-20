// src/app/api/generate/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { prompt } = await request.json()

  const res = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // la clave que generaste en Google AI Studio
        'X-goog-api-key': process.env.GEMINI_API_KEY!,
      },
      body: JSON.stringify({
        // estructura mínima según la doc de Gemini
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  )

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    return NextResponse.json(
      { error: err, status: res.status },
      { status: res.status }
    )
  }

  const { candidates } = await res.json()
  // Gemini devuelve un array “candidates” con las opciones de texto
  const text = candidates?.[0]?.output?.content || ''

  return NextResponse.json({ text })
}
