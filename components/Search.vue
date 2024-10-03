<template>
  <div
    class="max-w-md mx-auto rounded-lg shadow-lg bg-opacity-0 overflow-hidden mt-5"
  >
    <div class="flex items-center bg-gray-100 rounded-lg">
      <input
        type="text"
        v-model="query"
        class="flex-grow p-2 rounded-md border border-gray-300 "
        placeholder="Search"
      />
    </div> 
  </div>
</template>

<script setup lang="ts">
const query = defineModel()
</script>
