import { defineStore } from 'pinia'

type VoteStateType = {
  commentVotes: Record<string, number>
  userVotes: Record<string, boolean>
}

const useVoteStore = defineStore('votes', {
  state: (): VoteStateType => ({
    commentVotes: {
      '1': 15,
      '2': 5,
      '3': 4,
      '4': 2
    },
    userVotes: {}
  }),
  getters: {
    getCommentVotesById: (state) => (commentId: string) => state.commentVotes[commentId],
    hasUserVoted: (state) => (commentId: string) => Object.keys(state.userVotes).includes(commentId)
  },
  actions: {
    setVote(commentId: string, voteType: boolean) {
      // Try to get an existing vote
      const userVote = this.userVotes[commentId]
      // Store new vote
      if (!userVote) {
        this.userVotes[commentId] = voteType
        this.commentVotes[commentId] += voteType ? 1 : -1
        return
      }
      // Prevent vote duplicate
      if (userVote === voteType) return
      // Reset vote
      delete this.userVotes[commentId]
      this.commentVotes[commentId] += voteType ? 1 : -1
    }
  }
})

export default useVoteStore
