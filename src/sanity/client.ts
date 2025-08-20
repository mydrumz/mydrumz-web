import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'o8905hxl',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})
