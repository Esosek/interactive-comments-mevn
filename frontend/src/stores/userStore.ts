import { defineStore } from 'pinia'

import mockData from '../../data.json'
import { type User } from '@/types/user'

type UserStoreState = {
  loggedUser: User | null
}

const useUserStore = defineStore('users', {
  state: (): UserStoreState => ({
    loggedUser: mockData.currentUser
  })
})

export default useUserStore
