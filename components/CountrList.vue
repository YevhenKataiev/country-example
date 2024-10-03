<template>
<div v-if="list && list.length" class="rounded-lg bg-white">
    <ul class="rounded-lg">
      <li
        v-for="country in list"
        :key="country.name"
        class="flex items-center p-1 bg-white rounded-lg"
      >
        <CountryLink :country="country" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { IShortCountry } from '~/types/country.type';
const { list } = defineProps({
  list: {
        type: Array as () => IShortCountry[],
        required: true
    }
})
</script>