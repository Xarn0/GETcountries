<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const data = ref<any[]>([])
const currentPage = ref(1)
const perPage = 20 // выводим по 20 стран за страницу

onMounted(async () => {
  const res = await fetch("https://restcountries.com/v3.1/independent?status=true")
  data.value = await res.json()
})

const totalPages = computed(() => Math.ceil(data.value.length / perPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return data.value.slice(start, end)
})

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <div>
    <h2>Страны ({{ data.length }})</h2>

    <ul>
      <li
        v-for="country in paginatedData"
        :key="country.cca3"
      >
        {{ country.name.common }}
      </li>
    </ul>

    <button
      @click="prevPage"
      :disabled="currentPage === 1"
    >
      Назад
    </button>
    <span>Страница {{ currentPage }} из {{ totalPages }}</span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      Вперёд
    </button>
  </div>
</template>
