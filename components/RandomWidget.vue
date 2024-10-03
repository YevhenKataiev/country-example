<template>
    <div class="relative ml-80 flex h-full min-h-screen flex-1 flex-col">
        <WidgetCountryCard v-for="country in list" :key="country.name" :country="country"/>
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
