<script setup>
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
</script>
<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div class="border-l border-green-500 w-full">
        <div class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] flex items-center justify-between p-2">
          <div class="flex items-center">
            <div class="rounded-full mx-1 w-10 h-10 text-white flex items-center justify-center font-bold bg-blue-400">
              AB
            </div>
            <div class="text-gray-900 ml-1 font-semibold">
              Frank
            </div>
          </div>
          <DotsVerticalIcon fillColor="#515151" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
