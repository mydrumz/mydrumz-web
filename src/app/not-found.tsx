// src/app/not-found.tsx
export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">404</h1>
        <p className="text-gray-300 mb-6">Página no encontrada</p>
        <a href="/" className="underline">Volver al inicio</a>
      </div>
    </main>
  )
}
