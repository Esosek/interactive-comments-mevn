import { type User } from './user'

export type UserComment = {
  id: string
  content: string
  createdAt: string
  user: User
  parentId?: string
  replyingTo?: string
}
