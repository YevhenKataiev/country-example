<template>
  <aside
    class="fixed left-0 top-0 h-screen w-80 flex-none overflow-y-auto text-sm font-medium leading-4 text-primary-color bg-background-color"
  >
    <Search v-model="query"/>
    <CountrList :list="filterList" />
  </aside>
</template>
<script setup lang="ts">
import type { IShortCountry } from '~/types/country.type';
const { list } = defineProps({
  list: {
        type: Array as () => IShortCountry[],
        required: true
    } 
})
const query = ref<string>('')
const filterList = ref<IShortCountry[]>(list || [])
watch(()=> query.value, ()=> {
  filterList.value = list?.filter((country) => country.name.includes(query.value))
}, { immediate: true})
watch(()=>list,()=> {
  filterList.value = list?.filter((country) => country.name.includes(query.value))
}, { immediate: true})
</script>