<template>
  <div
    class="max-w-md mx-auto rounded-lg shadow-lg bg-opacity-0 overflow-hidden mt-[120px]"
  >
    <div class="text-white text-center text-4xl font-['Prata'] mb-8">
      Search the<br />
      Worker
    </div>
    <div class="flex items-center bg-gray-100 rounded-lg mb-3">
      <input
        type="text"
        v-model="query"
        @input="onInput"
        class="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Search"
      />
    </div>

    <div v-if="results.length" class="rounded-lg bg-white">
      <ul class="rounded-lg">
        <li
          v-for="result in results"
          :key="result.id"
          @click=""
          class="flex items-center p-4 bg-white rounded-lg"
        >
          <SearchItem :item="result" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from 'nuxt/app';
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const nuxtApp = useNuxtApp();

const query = ref('');
const results = ref([]);

const fetchResults = nuxtApp.$debounce(async () => {
  if (query.value) {
    const { data } = await nuxtApp.$axios.post('/employee/search', {
      keyword: query.value,
      salonId: userStore.user.employeeAccount.salon.id,
    });
    results.value = data.map(e => nuxtApp.$formatEmployee(e)).slice(0, 5);
  }
}, 500);

const onInput = () => {
  fetchResults();
};
</script>
