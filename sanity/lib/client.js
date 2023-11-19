import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const getPosts = async () => {
  return client.fetch(
    groq`*[_type == "post"] {
      _id,
      title,
      publishedAt,
      "slug": slug.current,
      summary,
      mainImage
    }`
  )
}

export const getPost = async (slug) => {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      publishedAt,
      'authors': authors[]{
        _type == 'Club Members' => @->{name, slug, image},
      },
      "slug": slug.current,
      summary,
      body,
      mainImage,
    }`, { slug }
  )
}