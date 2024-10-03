<template>
    <button class="border rounded p-1" @click="$router.push(country.countryCode)">
        {{ country.name }}
    </button>
</template>
<script setup lang="ts">
import type { IShortCountry } from '~/types/country.type';
const { country } = defineProps({
    country: {
        type: Object as () => IShortCountry,
        required: true
    }
})
</script>