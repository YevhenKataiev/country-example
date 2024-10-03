<template>
    <div class="flex flex-col p-2 border rounded w-full">
        <div class=" text-center text-blue-300"> {{ item?.localName }}</div>

        <div class=" text-center"> {{ item?.date }}</div>
    </div>
    
</template>
<script setup lang="ts">
import type { IHolyday } from '~/types/holyday.type';
const { item } = defineProps({
    item: {
        type: Object as () => IHolyday,
    }
})
</script>