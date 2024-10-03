<template>
    <div v-if="holyday" class="flex flex-col border rounded justify-center mb-2 w-full">
        <CountryLink :country="country" />
        <div>
            {{ holyday.name }}
        </div>
        <div>
            {{  holyday.date }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IShortCountry } from '~/types/country.type';
import type { IHolyday } from '~/types/holyday.type';
const { getNextHolyday} = useCountry()
const { country } = defineProps({
    country: {
        type: Object as () => IShortCountry,
        required: true
    }
})
const holyday = ref<IHolyday>()
onBeforeMount(async() => {
    holyday.value = await getNextHolyday(country.countryCode)
})
</script>