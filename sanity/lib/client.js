import {createClient} from 'next-sanity'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: 'published',
    })
  : null

export async function sanityFetch({query, params = {}}) {
  if (!client) return null
  return client.fetch(query, params, {cache: 'no-store'})
}
