import { defineStore } from 'pinia'

import mockData from '../../data.json'
import { type User } from '@/types/user'

type UserStoreType = {
  loggedUser: User | null
}

const useUserStore = defineStore<string, UserStoreType>('users', {
  state: () => ({
    loggedUser: mockData.currentUser
  })
})

export default useUserStore
