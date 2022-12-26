<script setup>
import { ref } from "vue";
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import ChatsView from './ChatsView.vue'
import MessageView from './MessageView.vue'

let open = ref(true)
</script>
<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">
      <div class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2">
        <div class="rounded-full ml-1 w-10 h-10 text-white flex items-center justify-center font-bold bg-red-400">
          AU
        </div>
        <div class="flex items-center justify-center">
          <AccountGroupIcon fillColor="#515151" class="mr-6" />
          <DotsVerticalIcon fillColor="#515151" class="cursor-pointer" />
        </div>
      </div>
      <div id="Search" class="bg-white w-full shadow-sm px-2 border-b">
        <div class="flex items-center justify-center px-1 m-2 bg-[#F0F0F0] rounded-md">
          <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
          <input
            class="ml-5 appearance-none w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
            autocomplete="off" type="text" placeholder="Start a new chat">
        </div>
      </div>
    </div>
    <ChatsView class="mt-[100px]" />

    <div v-if="open">
      <MessageView />
    </div>
    <div v-else>
      <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-xenter">
        <div class="grid h-screen place-items-center">
          <div class="text-center">
            <div class="w-full flex items-center justify-center">
              <img width="375" src="/vite.svg" alt="Chat">
            </div>
            <div class="text-[32px] text-gray-500 font-light mt-10">WhatsApp Web</div>
            <div class="text-[14px] text-gray-600 mt-2">
              <div>Send and recieve messeges withour keeping your phone online.</div>
              <div>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
