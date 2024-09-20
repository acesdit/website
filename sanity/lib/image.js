import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

/**
 * Generates a URL for a given image asset.
 * @param {import('sanity').Asset} source
 * @returns {string}
 */
export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
