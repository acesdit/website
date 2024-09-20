import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn
})

/**
 * Fetches all blog posts from Sanity, sorted by most recently published first.
 * @returns {Promise<Object[]>} A promise that resolves with an array of post objects.
 * Each post object contains the following properties:
 * - _id {string}: The ID of the post.
 * - title {string}: The title of the post.
 * - publishedAt {Date}: The date the post was published.
 * - slug {string}: The slug of the post.
 * - summary {string}: A short summary of the post.
 * - mainImage {Object}: The main image of the post. Contains the following properties:
 *   - asset {Object}: The asset metadata for the image. Contains the following properties:
 *     - url {string}: The URL of the image.
 *     - width {number}: The width of the image in pixels.
 *     - height {number}: The height of the image in pixels.
 *   - alt {string}: The alt text for the image.
 *   - caption {string}: The caption for the image.
 */
export const getPosts = async () => {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
      "slug": slug.current,
      summary,
      mainImage
    }`, {
    next: {
      revalidate: 0
    }
  }
  )
}

/**
 * Fetches a single blog post from Sanity by slug.
 * @param {string} slug The slug of the post to fetch.
 * @returns {Promise<Object>} A promise that resolves with the post object.
 * The post object contains the following properties:
 * - _id {string}: The ID of the post.
 * - title {string}: The title of the post.
 * - publishedAt {Date}: The date the post was published.
 * - slug {string}: The slug of the post.
 * - summary {string}: A short summary of the post.
 * - body {Object}: The body of the post. Contains the following properties:
 *   - _type {string}: The type of the block.
 *   - _key {string}: The key of the block.
 *   - children {Object[]}: An array of child blocks.
 *   - markDefs {Object[]}: An array of mark definitions.
 * - mainImage {Object}: The main image of the post. Contains the following properties:
 *   - asset {Object}: The asset metadata for the image. Contains the following properties:
 *     - url {string}: The URL of the image.
 *     - width {number}: The width of the image in pixels.
 *     - height {number}: The height of the image in pixels.
 *   - alt {string}: The alt text for the image.
 *   - caption {string}: The caption for the image.
 * - authors {Object[]}: An array of authors. Each author object contains the following properties:
 *   - name {string}: The name of the author.
 *   - slug {string}: The slug of the author.
 *   - image {Object}: The image of the author. Contains the following properties:
 *     - asset {Object}: The asset metadata for the image. Contains the following properties:
 *       - url {string}: The URL of the image.
 *       - width {number}: The width of the image in pixels.
 *       - height {number}: The height of the image in pixels.
 *     - alt {string}: The alt text for the image.
 *     - caption {string}: The caption for the image.
 */
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
    }`, {
    slug, next: {
      revalidate: 600
    }
  }
  )
}

/**
 * Fetches all club members from Sanity, filtered by tenure year.
 * @returns {Promise<Object[]>} A promise that resolves with an array of member objects.
 * Each member object contains the following properties:
 * - name {string}: The name of the member.
 * - slug {string}: The slug of the member.
 * - clubPosts {Object[]}: The club posts held by the member. Each post object contains the following properties:
 *   - title {string}: The title of the post.
 *   - tenure {string}: The year of the post.
 * - image {Object}: The image of the member. Contains the following properties:
 *   - asset {Object}: The asset metadata for the image. Contains the following properties:
 *     - url {string}: The URL of the image.
 *     - width {number}: The width of the image in pixels.
 *     - height {number}: The height of the image in pixels.
 *   - alt {string}: The alt text for the image.
 *   - caption {string}: The caption for the image.
 */
export const getMembers = async (slug) => {
  return client.fetch(groq`*[_type == "member" && (clubPosts[0].tenure == "2024" || clubPosts[1].tenure == "2024" || clubPosts[2].tenure == "2024")]{
    name,
    "slug": slug.current,
    clubPosts,
    image
  }`, {
    next: {
      revalidate: 600
    }
  })
}

export const getMember = async (slug) => {
  return client.fetch(
    groq`*[_type == "member" && slug.current == $slug][0] {
      name,
      bio,
      clubPosts,
      socials,
      image
    }`, {
    slug, next: {
      revalidate: 600
    }
  }
  )
}
