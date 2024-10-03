<template>
    <div class="flex flex-1 flex-row">
        <Sidebar :list="countryList" />
        <RandomWidget :list="widgetList"/>
    </div>
</template>
<script setup lang="ts">
import { useCountry } from '../composables/useCountry';
import type { IShortCountry } from '../types/country.type';
const { getAll } = useCountry();
const countryList = ref<IShortCountry[]>([])
const widgetList =  ref<IShortCountry[]>([])
const randomCountries = (list:IShortCountry[]) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}
onBeforeMount(async()=>{
    countryList.value = await getAll();
    widgetList.value = randomCountries(countryList.value)
})
</script>
