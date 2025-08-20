import { sanity } from '../sanity/client'
import { homeQuery, seoQuery } from '../sanity/queries'
import Image from 'next/image'
import type { Metadata } from 'next'
import RichText from '../components/RichText'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanity.fetch(
    seoQuery,
    {},
    { next: { revalidate: 60, tags: ['home'] } }
  )

  return {
    title: seo?.metaTitle ?? 'mydrumz',
    description: seo?.metaDescription ?? 'Estudio creativo & marketing',
    openGraph: {
      title: seo?.metaTitle ?? 'mydrumz',
      description: seo?.metaDescription ?? 'Estudio creativo & marketing',
      url: 'https://www.mydrumz.com',
      siteName: 'mydrumz',
      images: seo?.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
    alternates: { canonical: 'https://www.mydrumz.com' },
  }
}

export default async function HomePage() {
  const data = await sanity.fetch(
    homeQuery,
    {},
    { next: { revalidate: 60, tags: ['home'] } }
  )

  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      {data?.heroImage?.url && (
        <div className="relative w-full max-w-5xl aspect-[16/9] mb-8">
          <Image
            src={data.heroImage.url}
            alt={data.heroImage.alt || 'Hero'}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <h1 className="text-6xl font-bold mb-4">{data?.title ?? 'mydrumz'}</h1>
      <p className="text-xl text-gray-300 mb-8">{data?.subtitle}</p>

      <section className="w-full max-w-3xl">
        <RichText value={data?.content} />
      </section>
    </main>
  )
}
