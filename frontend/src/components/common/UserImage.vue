<script setup lang="ts">
import type { User } from '@/types/user'

type Props = {
  user: User
  remSize?: number
}

const { user, remSize = 2 } = defineProps<Props>()
</script>

<template>
  <div class="" :style="{ height: `${remSize}rem`, width: `${remSize}rem` }">
    <img :src="user.image" :alt="`Avatar of ${user.username}`" />
  </div>
</template>
