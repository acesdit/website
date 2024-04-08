import { blockContent } from './schemas/blockContent'
import { post } from './schemas/post'
import { member } from './schemas/member'

export const schema = {
  types: [post, member, blockContent],
}
