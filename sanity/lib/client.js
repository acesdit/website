import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn
})

export const getPosts = async () => {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
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
        _type == 'Club Members' => @->{name, "slug": slug.current, image},
        _type == 'Volunteer' => {"name": volunteerName},
      },
      "slug": slug.current,
      summary,
      body,
      mainImage,
    }`, { slug, next: {
      revalidate: 0
    } }
  )
}

// export const createMember = async (doc) => {
//   client.create(doc).then((res) => {
//     console.log(`Member created with document ID ${res._id}`)
//   })
// }

export const getMembers = async (slug) => {
  return client.fetch(groq`*[_type == "member"]{
    name,
    "slug": slug.current,
    clubPosts,
    image
  }`, {next: {
    revalidate: 0
  }})
}

export const getMember = async (slug) => {
  return client.fetch(
      groq`*[_type == "member" && slug.current == $slug][0] {
      name,
      bio,
      clubPosts,
      socials,
      image
    }`, { slug, next: {
      revalidate: 0
    } }
  )
}