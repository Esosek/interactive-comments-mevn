import { defineStore } from 'pinia'

import mockData from '../../data.json'
import { type User } from '@/types/user'

const useUserStore = defineStore('users', {
  state: () => ({
    loggedUser: mockData.currentUser as User
  })
})

export default useUserStore
