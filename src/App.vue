<template>
  <router-view />
</template>
<script setup>
import { useUserStore } from '@/store/user-store'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  if (!useUserStore().sub) router.push('/login')
})
</script>