import {blockContent} from './schemas/blockContent'
import {clubPost} from './schemas/clubPost'
import {post} from './schemas/post'
import {author} from './schemas/author'

export const schema = {
  types: [post, author, clubPost, blockContent],
}
