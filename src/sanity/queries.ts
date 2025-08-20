import groq from 'groq'

export const homeQuery = groq`*[_type == "home" && _id == "home"][0]{
  title,
  subtitle,
  content,
  "heroImage": {
    "url": heroImage.asset->url,
    "alt": coalesce(heroImage.alt, "Hero")
  }
}`

export const seoQuery = groq`*[_type == "home" && _id == "home"][0]{
  "metaTitle": coalesce(seo.title, title),
  "metaDescription": coalesce(seo.description, subtitle),
  "ogImage": coalesce(seo.image.asset->url, heroImage.asset->url)
}`
