<template>
<ul class="rounded-lg">
      <li
        v-for="day in list"
        :key="day.name"
        class="flex items-center p-1 bg-white rounded-lg"
      >
        <HolydayCard :item="day"/>
      </li>
    </ul>
</template>
<script setup lang="ts">
import type { IHolyday } from '~/types/holyday.type';
const { list } = defineProps({
    list: {
        type: Array as () => IHolyday[],
    }
})
</script>