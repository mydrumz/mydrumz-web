import groq from 'groq'

export const homeQuery = groq`*[_type == "home" && _id == "home"][0]{
  title,
  subtitle,
  "heroImage": {
    "url": heroImage.asset->url,
    "alt": coalesce(heroImage.alt, "Hero")
  }
}`
