<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

interface Country {
  name: {
    common: string
    official: string
    nativeName?: Record<string, { official: string; common: string }>
  }
  cca2: string
  cca3: string
  translations?: Record<string, { official: string; common: string }>
  region: string
  subregion?: string
  [key: string]: any
}

const route = computed(() => useRoute().params.slug)
const country = ref<Country | null>(null)

onMounted(async () => {
  if (!route.value) return
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${route.value}`)
    const data: Country[] = await res.json()
    country.value = data[0] || null // берём первый объект или null
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div
    class="container"
    v-if="country"
  >
    <h1>Страна {{ route}} / {{ country.translations?.rus?.official }}</h1>
    <div>
      <img
        :src="country.flags.svg"
        alt=""
      />
    </div>
    <div>Столица {{ country.capital[0] }}</div>
    <div>Население {{ country.population }}</div>
    <div>Площадь {{ country.area }} км<sup>2</sup></div>
  </div>
</template>
