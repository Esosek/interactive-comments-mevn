import { defineStore } from 'pinia'

import mockData from 'data.json'
import type { UserComment } from '@/types/userComment'

const useCommentStore = defineStore('comments', {
  state: () => ({
    comments: mockData.comments as UserComment[]
  }),
  actions: {
    addComment(commentText: string, parentId?: string) {
      const [replyingTo, content] = splitReplyText(commentText)
      const newComment: UserComment = {
        id: (Math.random() * 100).toString(),
        content,
        createdAt: new Date().toString(),
        user: {
          id: '4',
          image: '/images/avatars/image-juliusomo.webp',
          username: 'juliusomo'
        },
        parentId,
        replyingTo
      }
      this.comments.push(newComment)
    },
    removeComment(commentId: string) {
      const commentIndex = this.comments.findIndex((c) => c.id === commentId)
      if (commentIndex < 0) return
      this.comments.splice(commentIndex, 1)
    },
    editComment(commentId: string, commentText: string) {
      const editedComment = this.comments.find((c) => c.id === commentId)
      if (!editedComment) return
      const [replyingTo, content] = splitReplyText(commentText)
      editedComment.replyingTo = replyingTo
      editedComment.content = content
    }
  }
})

function splitReplyText(commentText: string): [string | undefined, string] {
  const regex = /@(\w+)(?:\s+(.*))?/
  const match = commentText.match(regex)

  if (match) {
    const replyToUsername = match[1]
    const content = match[2]?.trim()

    return [replyToUsername, content]
  }
  return [undefined, commentText]
}

export default useCommentStore
