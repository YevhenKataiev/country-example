<template>
    <div class="flex flex-col">
        <div v-if="country" class="flex-none overflow-auto">
            {{ country.officialName }}
        </div>
        <HolydayList :list="allHolydays"  class="flex-1"/>
        <div class="flex-none flex flex-row justify-around">
            <button v-for="y in years" :key="y" @click="currentYear = y" class="p-1 border rounded" :class="{'bg-slate-400': y === currentYear}">
                {{ y }}
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { ICountry } from '~/types/country.type';
import type { IHolyday } from '~/types/holyday.type';
import { useRoute } from 'vue-router';
const { getAllHolidays } = useHolyday()
const { getCountryInfo } = useCountry()
const route = useRoute()
const years = ['2020','2021','2022','2023','2024','2025','2026','2027','2028','2029', '2030']
const currentYear = ref<string>('') 
const allHolydays = ref<IHolyday[]>()
const country = ref<ICountry>()
watch(()=>currentYear.value, async()=>{
    // there is no feature at backend to show holydays by year only longweekend
    if(country.value) allHolydays.value = await getAllHolidays(country.value.countryCode)
})
onBeforeMount(async()=>{
    currentYear.value = (new Date()).getFullYear().toString()
    country.value = await getCountryInfo(route.params.id as string)
    allHolydays.value = await getAllHolidays(country.value.countryCode)
})
</script>
