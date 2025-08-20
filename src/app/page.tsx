import { sanity } from '@/sanity/client'
import { homeQuery } from '@/sanity/queries'
import Image from 'next/image'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const data = await sanity.fetch(homeQuery)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      {data?.heroImage?.url && (
        <Image
          src={data.heroImage.url}
          alt={data.heroImage.alt || 'Hero'}
          width={1600}
          height={900}
          className="mb-8 rounded-lg"
          priority
        />
      )}
      <h1 className="text-6xl font-bold mb-4">{data?.title ?? 'Mydrumz'}</h1>
      <p className="text-xl text-gray-300 text-center max-w-2xl">{data?.subtitle}</p>
    </main>
  )
}
